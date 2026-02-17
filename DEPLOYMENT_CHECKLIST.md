# Deployment Checklist

Use this checklist to ensure a smooth deployment of the Fafa Access frontend to Vercel.

## Pre-Deployment

### Backend Preparation
- [ ] Backend API is deployed and accessible
- [ ] Backend API URL is noted (e.g., `https://api.fafaaccess.com`)
- [ ] Backend CORS is configured to allow frontend domain
- [ ] Backend endpoints are tested and working
- [ ] Database is set up and seeded (if applicable)

### Repository Preparation
- [ ] All code is committed and pushed to GitHub
- [ ] Branch to deploy is determined (usually `main`)
- [ ] Build passes locally (`npm run build`)
- [ ] Linting passes (`npm run lint`)
- [ ] No TypeScript errors

## Vercel Setup

### Account & Project
- [ ] Vercel account created at https://vercel.com
- [ ] GitHub account connected to Vercel
- [ ] Repository imported to Vercel
- [ ] Project name chosen

### Configuration
- [ ] Framework preset set to "Vite"
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Install command: `npm install`
- [ ] Node.js version: 18.x (from .nvmrc)

### Environment Variables
Add these in Vercel Dashboard → Settings → Environment Variables:

#### Required
- [ ] `VITE_API_URL` = Your backend API URL (e.g., `https://api.fafaaccess.com/api`)

#### Recommended
- [ ] `VITE_APP_NAME` = Fafa Access
- [ ] `VITE_APP_VERSION` = 1.0.0
- [ ] `VITE_ENABLE_ANALYTICS` = true

#### Optional (if using monitoring)
- [ ] `VITE_DATADOG_ENABLED`
- [ ] `VITE_DATADOG_APP_ID`
- [ ] `VITE_DATADOG_CLIENT_TOKEN`
- [ ] `VITE_SENTRY_DSN`

### Code Updates
- [ ] Updated `vercel.json` with correct backend API URL
- [ ] Committed and pushed the changes

## Deployment

### First Deploy
- [ ] Click "Deploy" in Vercel dashboard
- [ ] Wait for build to complete (1-3 minutes)
- [ ] Verify deployment succeeded
- [ ] Note deployment URL (e.g., `https://your-project.vercel.app`)

### Testing
- [ ] Visit deployment URL
- [ ] Verify homepage loads
- [ ] Check browser console for errors
- [ ] Test authentication (login/logout)
- [ ] Test main user flows:
  - [ ] Browse laptops
  - [ ] Submit application
  - [ ] View dashboard
  - [ ] Check notifications
- [ ] Test on multiple browsers:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
- [ ] Test on mobile devices:
  - [ ] iOS Safari
  - [ ] Android Chrome

### API Connectivity
- [ ] API calls are working
- [ ] Authentication persists
- [ ] Data loads correctly
- [ ] Forms submit successfully
- [ ] File uploads work (if applicable)

## Custom Domain (Optional)

If using a custom domain:
- [ ] Domain purchased/available
- [ ] Domain added in Vercel Settings → Domains
- [ ] DNS records configured as per Vercel instructions
- [ ] SSL certificate provisioned (automatic, wait ~5 mins)
- [ ] Custom domain working
- [ ] Redirects from default domain to custom domain (optional)

## Post-Deployment

### Monitoring Setup
- [ ] Vercel Analytics enabled (Settings → Analytics)
- [ ] Error monitoring configured (Sentry, if using)
- [ ] Performance monitoring set up
- [ ] Uptime monitoring configured (optional)

### Documentation
- [ ] Deployment URL documented
- [ ] Environment variables documented
- [ ] Known issues documented (if any)
- [ ] Team notified of new deployment

### Performance
- [ ] Run Lighthouse audit (target: 90+ score)
- [ ] Check Core Web Vitals
- [ ] Verify assets are cached correctly
- [ ] Check bundle size (should be ~1.1MB)

### Security
- [ ] Security headers verified (check with https://securityheaders.com)
- [ ] HTTPS enforced
- [ ] No sensitive data in client-side code
- [ ] Environment variables not exposed

## Continuous Deployment

### Automatic Deployments
- [ ] Production deploys on push to `main` branch
- [ ] Preview deploys on push to other branches
- [ ] PR previews enabled
- [ ] Team has access to Vercel project

### Monitoring
- [ ] Set up alerts for:
  - [ ] Build failures
  - [ ] Deployment failures
  - [ ] High error rates
  - [ ] Performance degradation
- [ ] Regular review of:
  - [ ] Error logs
  - [ ] Performance metrics
  - [ ] User analytics

## Rollback Plan

In case of issues:
- [ ] Previous deployment URL saved
- [ ] Know how to rollback in Vercel (Deployments → Previous → Promote)
- [ ] Team knows rollback procedure
- [ ] Database rollback plan (if schema changed)

## Success Criteria

Deployment is successful when:
- [ ] All pages load without errors
- [ ] Authentication works end-to-end
- [ ] API calls succeed
- [ ] Main user flows work
- [ ] Performance is acceptable (Lighthouse 90+)
- [ ] No console errors
- [ ] Mobile experience is good
- [ ] Cross-browser compatibility verified

## Troubleshooting

If deployment fails, check:
- [ ] Build logs in Vercel dashboard
- [ ] Environment variables are set correctly
- [ ] `vercel.json` syntax is valid
- [ ] No TypeScript/ESLint errors
- [ ] Dependencies install successfully
- [ ] Node version matches .nvmrc

If API calls fail:
- [ ] Backend is running and accessible
- [ ] CORS is configured correctly
- [ ] API URL in env variables is correct
- [ ] Network tab shows request/response

If pages don't load:
- [ ] Check browser console for errors
- [ ] Verify routing is configured correctly
- [ ] Check if assets are 404ing
- [ ] Verify base URL in config

## Support Resources

- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev
- Project Docs: README.md, DEPLOYMENT.md
- GitHub Issues: https://github.com/Gordon28533/Fafa-Access-front/issues

---

**Deployment Date:** __________  
**Deployed By:** __________  
**Deployment URL:** __________  
**Custom Domain:** __________  

## Notes

_Add any deployment-specific notes here:_

