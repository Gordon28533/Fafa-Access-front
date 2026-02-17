# Deployment Guide for Fafa Access Frontend

This guide provides detailed instructions for deploying the Fafa Access frontend to various platforms.

## Table of Contents
- [Vercel (Recommended)](#vercel-recommended)
- [Netlify](#netlify)
- [AWS S3 + CloudFront](#aws-s3--cloudfront)
- [Traditional Web Server](#traditional-web-server)

---

## Vercel (Recommended)

Vercel provides the best experience for Vite applications with automatic builds, deployments, and CDN.

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Gordon28533/Fafa-Access-front)

### Manual Setup

#### 1. Prerequisites
- GitHub account with repository access
- Vercel account (sign up at https://vercel.com)
- Backend API deployed and accessible

#### 2. Import Project
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Vercel will auto-detect the framework as Vite

#### 3. Configure Build Settings
The following settings should be automatically detected:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

#### 4. Environment Variables
Add these environment variables in your Vercel project settings:

```bash
# Required
VITE_API_URL=https://your-backend-api.com/api

# Optional but recommended
VITE_APP_NAME=Fafa Access
VITE_APP_VERSION=1.0.0
VITE_ENABLE_ANALYTICS=true
VITE_DATADOG_ENABLED=false
```

To add environment variables:
1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Environment Variables"
3. Add each variable with appropriate values
4. Select environments (Production, Preview, Development)

#### 5. Update vercel.json
Edit `vercel.json` and update the API proxy destination:

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

#### 6. Deploy
1. Push your changes to the main branch
2. Vercel automatically builds and deploys
3. Your site will be live at `https://your-project.vercel.app`

#### 7. Custom Domain (Optional)
1. Go to "Settings" → "Domains"
2. Add your custom domain
3. Configure DNS records as instructed by Vercel
4. Wait for SSL certificate provisioning (automatic)

### Vercel CLI Deployment

Install Vercel CLI:
```bash
npm i -g vercel
```

Deploy:
```bash
vercel
```

For production:
```bash
vercel --prod
```

---

## Netlify

### Quick Deploy

1. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

2. **Deploy via CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

3. **Environment Variables:**
Add in Netlify Dashboard → Site Settings → Environment Variables

4. **Redirects for SPA:**
Create `public/_redirects`:
```
/*    /index.html   200
```

---

## AWS S3 + CloudFront

### 1. Build the Application
```bash
npm run build
```

### 2. Create S3 Bucket
```bash
aws s3 mb s3://fafa-access-frontend
aws s3 website s3://fafa-access-frontend --index-document index.html
```

### 3. Upload Files
```bash
aws s3 sync dist/ s3://fafa-access-frontend --delete
```

### 4. Configure CloudFront
1. Create CloudFront distribution
2. Set origin to S3 bucket
3. Configure custom error responses:
   - 404 → /index.html (for SPA routing)
   - 403 → /index.html

### 5. Update DNS
Point your domain to the CloudFront distribution

---

## Traditional Web Server

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/fafa-access/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Security headers
    add_header X-Frame-Options "DENY";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API proxy
    location /api/ {
        proxy_pass https://your-backend-api.com/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Apache Configuration

```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /var/www/fafa-access/dist

    <Directory /var/www/fafa-access/dist>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted

        # SPA routing
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>

    # Security headers
    Header always set X-Frame-Options "DENY"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"

    # API proxy
    ProxyPass /api/ https://your-backend-api.com/api/
    ProxyPassReverse /api/ https://your-backend-api.com/api/
</VirtualHost>
```

---

## Post-Deployment Checklist

- [ ] Verify API connection is working
- [ ] Test authentication flow
- [ ] Check all pages load correctly
- [ ] Verify SPA routing works (no 404s on refresh)
- [ ] Test on multiple browsers
- [ ] Check mobile responsiveness
- [ ] Verify analytics are tracking (if enabled)
- [ ] Test error scenarios
- [ ] Check security headers
- [ ] Verify SSL certificate is valid
- [ ] Test performance (Lighthouse score)
- [ ] Update documentation with live URLs

---

## Troubleshooting

### Build Fails
- Check Node.js version (use .nvmrc)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Verify all environment variables are set

### API Requests Fail
- Check VITE_API_URL is correct
- Verify CORS settings on backend
- Check network tab in browser DevTools
- Ensure backend is accessible from deployment

### 404 on Page Refresh
- Configure SPA redirects/rewrites
- For Vercel: rewrites in vercel.json
- For Nginx: try_files directive
- For Apache: RewriteRule

### Blank Page After Deployment
- Check browser console for errors
- Verify build was successful
- Check if assets are being served correctly
- Verify base URL in vite.config.ts

---

## Performance Optimization

### Recommended Settings
- Enable CDN (automatic with Vercel)
- Configure asset caching (1 year for immutable assets)
- Enable gzip/brotli compression
- Use code splitting (already configured)
- Optimize images before deployment
- Enable HTTP/2 or HTTP/3
- Monitor with performance tools

---

## Monitoring

### Tools to Use
- Vercel Analytics (built-in)
- Google Analytics
- Datadog RUM (configure with env vars)
- Sentry for error tracking
- Lighthouse CI for performance

---

## Support

For deployment issues:
1. Check this guide
2. Review Vercel/Netlify documentation
3. Open an issue on GitHub
4. Contact the development team

---

**Last Updated:** 2026-02-17
