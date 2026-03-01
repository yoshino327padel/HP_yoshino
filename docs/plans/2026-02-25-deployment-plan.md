# Vercel Deployment + Auto-Update Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Deploy the static site to Vercel via GitHub, with daily automatic data updates from FIP and Note RSS.

**Architecture:** Push code to GitHub → connect to Vercel for auto-deploy. GitHub Actions runs daily cron to fetch FIP player data and Note RSS, updates `data/*.json`, commits changes, triggering Vercel redeploy.

**Tech Stack:** GitHub, Vercel, GitHub Actions, Node.js 20 (fetch API), FIP website scraping

---

### Task 1: Create .gitignore

**Files:**
- Create: `.gitignore`

**Step 1: Create .gitignore file**

```
# OS
.DS_Store
Thumbs.db
Desktop.ini
nul

# Editor
.vscode/
*.swp
*.swo
*~

# Node
node_modules/

# Claude
.claude/
```

**Step 2: Remove the `nul` file (Windows artifact)**

Run: `rm nul` (if it exists, it's an empty Windows artifact)

**Step 3: Commit**

```bash
git add .gitignore
git rm --cached nul 2>/dev/null || true
git commit -m "chore: add .gitignore"
```

---

### Task 2: Create GitHub repository and push

**Step 1: Create the repository on GitHub**

Run:
```bash
gh repo create HP_yoshino --public --source=. --remote=origin --push
```

If `gh` CLI is not installed or authenticated:
- Go to https://github.com/new
- Create repo named `HP_yoshino` (public)
- Then run:
```bash
git remote add origin https://github.com/<USERNAME>/HP_yoshino.git
git branch -M main
git push -u origin main
```

**Step 2: Verify all files are pushed**

Run: `git status`
Expected: `nothing to commit, working tree clean`

Run: `gh repo view --web` (or check GitHub in browser)
Expected: All site files visible in the repo

---

### Task 3: Deploy to Vercel

**This task is manual (done in browser).**

**Step 1: Sign up / log in to Vercel**

Go to: https://vercel.com/
- Click "Sign Up" → "Continue with GitHub"
- Authorize Vercel to access your GitHub account

**Step 2: Import the repository**

- Click "Add New..." → "Project"
- Select the `HP_yoshino` repository
- Configure:
  - **Framework Preset:** Other
  - **Root Directory:** `.` (leave default)
  - **Build Command:** (leave empty — no build needed)
  - **Output Directory:** `.` (leave default)
- Click "Deploy"

**Step 3: Verify deployment**

- Wait for deployment to complete (~30 seconds)
- Click the generated URL (e.g., `hp-yoshino.vercel.app`)
- Verify the site loads correctly with all images, styles, and functionality
- Test both JP and EN versions
- Test gallery, schedule, news sections

**Step 4: Note the deployment URL**

Save the URL — this is your live site. Example: `https://hp-yoshino.vercel.app`

---

### Task 4: Update the auto-update script to also fetch FIP schedule data

The existing `scripts/update.js` already handles Note RSS. We need to add FIP schedule/results fetching.

**Files:**
- Modify: `scripts/update.js`

**Step 1: Add FIP data fetching to update.js**

Add the following after the existing Note RSS logic (before the final `main()` call). The script should:
1. Fetch the FIP player page HTML
2. Parse upcoming tournament entries
3. Update `data/schedule.json` with new entries (preserving manual entries)

Add this code to `scripts/update.js`, replacing the existing `main()` function:

```javascript
const SCHEDULE_JSON_PATH = path.join(__dirname, '..', 'data', 'schedule.json');
const FIP_PLAYER_URL = 'https://www.padelfip.com/player/yoshino-kushima/';

/**
 * FIP選手ページからスケジュール情報を取得（将来拡張用の骨格）
 * 注: FIPサイトの構造変更に対応するため、エラー時は既存データを保持
 */
async function updateScheduleFromFip() {
  console.log('[update] FIPスケジュール確認中...');

  try {
    const res = await fetch(FIP_PLAYER_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; KushimaYoshino-Site/1.0)' }
    });
    if (!res.ok) {
      console.log(`[update] FIPページ取得スキップ (HTTP ${res.status})`);
      return;
    }

    const html = await res.text();

    // FIPランキングを抽出 (ページに表示されている場合)
    const rankMatch = html.match(/ranking[^>]*>.*?(\d+)/is);
    if (rankMatch) {
      console.log(`[update] FIPランキング: ${rankMatch[1]}`);
    }

    console.log('[update] FIPページ取得完了（スケジュール自動解析は手動管理を推奨）');
  } catch (e) {
    console.log('[update] FIPページ取得スキップ:', e.message);
  }
}

async function main() {
  console.log('[update] データ更新開始...');
  console.log('');

  // === Note RSS ニュース更新 ===
  console.log('[update] === Note RSS フィード ===');

  let newsData;
  try {
    newsData = JSON.parse(fs.readFileSync(NEWS_JSON_PATH, 'utf-8'));
  } catch (e) {
    newsData = { lastUpdated: null, items: [] };
  }

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

  const existingNoteUrls = new Set(
    newsData.items
      .filter(item => item.source === 'note')
      .map(item => item.url)
  );

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

  newsData.lastUpdated = new Date().toISOString();
  fs.writeFileSync(NEWS_JSON_PATH, JSON.stringify(newsData, null, 2), 'utf-8');
  console.log(`[update] ニュース: ${newCount} 件の新しい記事を追加`);
  console.log('');

  // === FIP スケジュール確認 ===
  console.log('[update] === FIP スケジュール ===');
  await updateScheduleFromFip();

  console.log('');
  console.log('[update] 全データ更新完了');
}
```

**Step 2: Test the script locally**

Run:
```bash
node scripts/update.js
```

Expected output:
```
[update] データ更新開始...

[update] === Note RSS フィード ===
[update] X 件の記事を取得
[update] ニュース: 0 件の新しい記事を追加

[update] === FIP スケジュール ===
[update] FIPページ取得完了（スケジュール自動解析は手動管理を推奨）

[update] 全データ更新完了
```

**Step 3: Commit**

```bash
git add scripts/update.js
git commit -m "feat: enhance update script with FIP schedule check"
git push
```

---

### Task 5: Verify GitHub Actions workflow

**Files:**
- Verify: `.github/workflows/update-data.yml` (already exists, should work as-is)

**Step 1: Push any remaining changes**

```bash
git add -A
git status
```

If there are unstaged changes:
```bash
git commit -m "chore: sync all site files"
git push
```

**Step 2: Manually trigger the workflow to test**

Run:
```bash
gh workflow run update-data.yml
```

Or: Go to GitHub → Actions tab → "Update Site Data" → "Run workflow"

**Step 3: Verify the workflow ran successfully**

Run:
```bash
gh run list --workflow=update-data.yml --limit=1
```

Or check in GitHub Actions tab. Expected: green checkmark, workflow completed.

**Step 4: Verify Vercel auto-redeployed (if data changed)**

Check the Vercel dashboard for a new deployment triggered by the GitHub Actions push.

---

### Task 6: Final verification checklist

**Step 1: Verify live site**

Open the Vercel URL and check:
- [ ] Homepage loads (index.html)
- [ ] English version loads (en.html)
- [ ] All images load (hero, profile, sponsors, gallery, section backgrounds)
- [ ] Gallery tab switching works
- [ ] Schedule section shows correct upcoming tournaments
- [ ] News section shows latest items
- [ ] Results table displays correctly
- [ ] Contact form works (shows alert)
- [ ] Language switching works (JP/EN)
- [ ] Mobile responsive layout works
- [ ] Results page (results.html) loads

**Step 2: Verify auto-update pipeline**

- [ ] GitHub Actions cron is scheduled (check Actions tab)
- [ ] Manual workflow trigger works
- [ ] Script fetches Note RSS data
- [ ] Changes auto-deploy to Vercel

---

## Notes

- **Schedule/Results:** FIP website doesn't have a public API, so tournament schedule and results are best managed manually via editing `data/schedule.json` and the HTML files. The auto-update focuses on Note RSS news.
- **Custom Domain:** Can be added later in Vercel dashboard → Settings → Domains. You'll need to update DNS records at your domain registrar.
- **Future Enhancement:** If FIP adds an API or if scraping becomes reliable, the update script can be extended to auto-update schedule and results data.
