# Vercel Deployment + Auto-Update Design

## Goal

Deploy the HP_yoshino static site to Vercel with daily automatic data updates via GitHub Actions.

## Architecture

```
GitHub Repository (HP_yoshino)
  ├── Site code (HTML/CSS/JS/images)
  ├── data/ (schedule.json, news.json, gallery.json)
  ├── scripts/update.js (FIP data fetcher)
  └── .github/workflows/update-data.yml (daily cron)

      ↓ auto-deploy on push

Vercel (public site)
  └── CDN-served static files
```

## Components

### 1. GitHub Repository Setup
- Create GitHub repo and push all existing code
- Set main branch as default

### 2. Vercel Deployment
- Sign up with GitHub account
- Import the repository
- Framework preset: "Other" (static site, no build step)
- Output directory: `.` (root)
- Auto-deploy on push to main branch

### 3. Auto-Update System (GitHub Actions)
- **Trigger:** Daily at 9:00 JST (cron: `0 0 * * *` UTC)
- **Manual trigger:** workflow_dispatch enabled
- **Script:** `scripts/update.js` fetches data from FIP official site
- **Data updated:**
  - `data/schedule.json` - upcoming tournaments
  - `data/news.json` - latest news (manual additions remain)
- **Flow:** Fetch → update JSON → commit & push → Vercel auto-redeploys

### 4. Custom Domain (optional, later)
- Configure in Vercel dashboard
- Add DNS records at domain registrar
- Free SSL via Vercel

## Data Sources

- **FIP Player Page:** https://www.padelfip.com/player/yoshino-kushima/
  - Tournament results, rankings, upcoming schedule
- **News:** Manually updated (auto-update could add FIP results)

## Constraints

- Free tier for both GitHub and Vercel (sufficient for this site)
- GitHub Actions: 2,000 minutes/month free (daily cron uses ~30 min/month)
- Vercel: 100GB bandwidth/month free (more than enough)
- No server-side code needed (static site)
