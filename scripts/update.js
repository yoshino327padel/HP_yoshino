/**
 * 串間よし乃公式サイト - データ自動更新スクリプト
 *
 * Note RSS フィードから最新記事を取得し、data/news.json を更新します。
 *
 * 使い方:
 *   node scripts/update.js
 *
 * 必要環境: Node.js 18以上（fetch API使用）
 */

const fs = require('fs');
const path = require('path');

const NOTE_RSS_URL = 'https://note.com/yoshino327_padel/rss';
const NEWS_JSON_PATH = path.join(__dirname, '..', 'data', 'news.json');

/**
 * 簡易XMLパーサー：RSS <item> 要素を配列として取得
 */
function parseRssItems(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];
    const getTag = (tag) => {
      const r = new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`);
      const m = itemXml.match(r);
      return m ? m[1].trim() : '';
    };

    items.push({
      title: getTag('title'),
      link: getTag('link'),
      pubDate: getTag('pubDate'),
      description: getTag('description')
    });
  }

  return items;
}

/**
 * 日付をフォーマット (YYYY.MM.DD)
 */
function formatDate(dateStr) {
  const d = new Date(dateStr);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}.${m}.${day}`;
}

/**
 * HTMLタグを除去してプレーンテキストに
 */
function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
}

/**
 * テキストを指定文字数で切り詰め
 */
function truncate(text, maxLen = 80) {
  if (text.length <= maxLen) return text;
  return text.substring(0, maxLen) + '...';
}

async function main() {
  console.log('[update] Note RSSフィードを取得中...');

  // 既存のnews.jsonを読み込む
  let newsData;
  try {
    newsData = JSON.parse(fs.readFileSync(NEWS_JSON_PATH, 'utf-8'));
  } catch (e) {
    newsData = { lastUpdated: null, items: [] };
  }

  // Note RSSフィードを取得
  let rssItems = [];
  try {
    const res = await fetch(NOTE_RSS_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    rssItems = parseRssItems(xml);
    console.log(`[update] ${rssItems.length} 件の記事を取得`);
  } catch (e) {
    console.error('[update] Note RSS取得エラー:', e.message);
  }

  // 既存のNote記事のURLリストを作成
  const existingNoteUrls = new Set(
    newsData.items
      .filter(item => item.source === 'note')
      .map(item => item.url)
  );

  // 新しいNote記事をニュースに追加
  let newCount = 0;
  for (const rssItem of rssItems) {
    if (existingNoteUrls.has(rssItem.link)) continue;

    const newsItem = {
      date: formatDate(rssItem.pubDate),
      tag: 'media',
      tagLabel: 'Note',
      title: rssItem.title,
      excerpt: truncate(stripHtml(rssItem.description)),
      thumb: 'Note 記事',
      thumbColor: 'green',
      url: rssItem.link,
      source: 'note'
    };

    // 日付順で正しい位置に挿入
    let inserted = false;
    for (let i = 0; i < newsData.items.length; i++) {
      if (newsItem.date > newsData.items[i].date) {
        newsData.items.splice(i, 0, newsItem);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      newsData.items.push(newsItem);
    }

    newCount++;
    console.log(`[update] 新記事追加: ${rssItem.title}`);
  }

  // 更新日時を記録
  newsData.lastUpdated = new Date().toISOString();

  // JSONファイルに書き込み
  fs.writeFileSync(NEWS_JSON_PATH, JSON.stringify(newsData, null, 2), 'utf-8');

  console.log(`[update] 完了: ${newCount} 件の新しい記事を追加`);
  console.log(`[update] news.json を更新しました`);
}

main().catch(e => {
  console.error('[update] エラー:', e);
  process.exit(1);
});
