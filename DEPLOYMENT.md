# Deployment Guide - IntelliSTAR Emulator

## Automated Deployment with GitHub Actions

Your IntelliSTAR Emulator is set up for automatic deployment to GitHub Pages!

### How It Works

1. **Automatic Trigger**: Every push to `main` branch triggers deployment
2. **Build Process**: Static files are prepared
3. **Deploy**: Files are pushed to GitHub Pages
4. **Live URL**: Your app is accessible at `https://ctree2088-sketch.github.io/intellistar-2/`

### Deployment Workflow

```yaml
Event: Push to main branch
  ↓
Checkout code
  ↓
Setup Node.js environment
  ↓
Install dependencies
  ↓
Build (static files)
  ↓
Deploy to GitHub Pages
  ↓
✅ Live at GitHub Pages URL
```

## Manual Deployment Steps

### Option 1: Using GitHub Actions (Automatic)

1. The workflow runs automatically on every push to `main`
2. Check status: Go to **Actions** tab in your repo
3. View deployments: Go to **Settings** → **Pages**

### Option 2: Local Testing Before Deploy

```bash
# Clone the repository
git clone https://github.com/ctree2088-sketch/intellistar-2.git
cd intellistar-2

# Serve locally
npx http-server

# Open in Chrome
# http://localhost:8000
```

### Option 3: Enable GitHub Pages Manually

1. Go to your repo **Settings**
2. Click **Pages** (left sidebar)
3. Under "Build and deployment":
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Click **Save**

## Live Deployment URL

🌐 **https://ctree2088-sketch.github.io/intellistar-2/**

Once deployment completes, your IntelliSTAR Emulator will be live!

## Checking Deployment Status

### View GitHub Actions Runs

1. Go to: **https://github.com/ctree2088-sketch/intellistar-2/actions**
2. Click on the latest workflow run
3. Check the status:
   - ✅ Green checkmark = Success
   - ❌ Red X = Failed
   - 🟡 Yellow circle = Running

### View Deployment Details

1. Go to: **https://github.com/ctree2088-sketch/intellistar-2/settings/pages**
2. Scroll to "GitHub Pages" section
3. Check deployment status and live URL

## Troubleshooting

### Deployment Failed
- Check **Actions** tab for error messages
- Ensure all files are committed and pushed
- Verify `index.html` exists in root directory

### Live URL Not Working
- Wait 1-2 minutes after successful deployment
- Hard refresh: `Ctrl+Shift+R`
- Check GitHub Pages settings are enabled
- Verify branch is set to `main`

### Files Not Updating
- Make sure you pushed to the `main` branch
- GitHub Actions should run automatically
- Check if workflow is enabled in **Actions** tab

## Environment Variables & Secrets

The workflow automatically uses:
- `GITHUB_TOKEN` - Built-in GitHub authentication
- No additional secrets needed!

## Performance

- **Deployment Time**: ~30-60 seconds
- **Build Time**: ~10-15 seconds
- **CDN**: GitHub Pages global CDN
- **SSL/TLS**: Automatic HTTPS

## Rollback (If Needed)

To revert to a previous version:

1. Go to **Actions** tab
2. Find the workflow run before the issue
3. Re-run that deployment workflow

## Next Steps

✅ Deployment configured  
✅ GitHub Pages enabled  
✅ Auto-deploy on push  
🚀 Ready to go live!

---

**Your IntelliSTAR Emulator is now deployed!** 🎉
