# Quick Start: Deploy to Vercel

This is a quick reference guide for deploying the Fafa Access frontend to Vercel.

## Prerequisites

1. GitHub account with access to this repository
2. Vercel account (free tier works great)
3. Backend API deployed and accessible

## Step 1: Import to Vercel

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select `Gordon28533/Fafa-Access-front`
4. Click "Import"

## Step 2: Configure Build Settings

Vercel should auto-detect these settings:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

If not auto-detected, set them manually.

## Step 3: Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

### Required Variables:
```
VITE_API_URL=https://your-backend-api.com/api
```

### Recommended Variables:
```
VITE_APP_NAME=Fafa Access
VITE_APP_VERSION=1.0.0
VITE_ENABLE_ANALYTICS=true
```

### Optional (for monitoring):
```
VITE_DATADOG_ENABLED=false
VITE_DATADOG_APP_ID=
VITE_DATADOG_CLIENT_TOKEN=
VITE_SENTRY_DSN=
```

## Step 4: Update API Proxy

Edit `vercel.json` and update the backend URL:

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://your-actual-backend-url.com/api/:path*"
    }
  ]
}
```

Commit and push this change.

## Step 5: Deploy

1. Click "Deploy" in Vercel dashboard
2. Wait for deployment to complete (usually 1-2 minutes)
3. Your site will be live at `https://your-project.vercel.app`

## Step 6: Custom Domain (Optional)

1. Go to Settings → Domains
2. Add your custom domain (e.g., `app.fafaaccess.com`)
3. Follow DNS configuration instructions
4. Wait for SSL certificate provisioning (automatic)

## Troubleshooting

### Build Fails
- Check if all environment variables are set
- View build logs in Vercel dashboard
- Ensure `npm run build` works locally

### API Requests Fail
- Verify `VITE_API_URL` is correct
- Check backend CORS settings
- Ensure backend is accessible from Vercel

### Blank Page
- Check browser console for errors
- Verify environment variables
- Check if assets are loading correctly

## Automatic Deployments

Vercel automatically deploys:
- **Production**: On push to `main` branch
- **Preview**: On push to any branch or PR

## Commands

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy from CLI
vercel

# Deploy to production
vercel --prod

# View logs
vercel logs
```

## Next Steps

1. ✅ Test the deployed application
2. ✅ Verify API connectivity
3. ✅ Test on multiple browsers/devices
4. ✅ Set up custom domain
5. ✅ Enable Vercel Analytics
6. ✅ Configure alerts

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Project Issues](https://github.com/Gordon28533/Fafa-Access-front/issues)

---

**Last Updated**: 2026-02-17
