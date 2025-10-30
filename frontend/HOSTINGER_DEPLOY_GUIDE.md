# Hostinger Deployment Guide

## Step 1: Prepare Your Build
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Make build script executable
chmod +x build-hostinger.sh

# Run build script
./build-hostinger.sh
```

## Step 2: Hostinger Setup

1. Log in to your Hostinger account
2. Go to "Hosting" → Select your hosting package
3. Click on "File Manager"

## Step 3: Upload Files

1. In File Manager, navigate to `public_html` directory
2. Upload all contents from your local `frontend/dist` directory to `public_html`
   - You can use FTP or the web interface
   - Make sure `.htaccess` file is included

## Step 4: Domain Configuration

1. Go to "Domains" in Hostinger panel
2. Point your domain to Hostinger nameservers if not already done
3. Wait for DNS propagation (can take up to 24-48 hours)

## Step 5: SSL Configuration

1. Go to "SSL" in Hostinger panel
2. Install SSL certificate if not already installed
3. Enable "Force HTTPS"

## Step 6: PHP Configuration

1. Go to "PHP Configuration"
2. Set PHP version to 8.0 or higher
3. Enable required PHP extensions:
   - mod_rewrite
   - mod_headers
   - mod_expires
   - mod_deflate

## Step 7: Verify Installation

1. Visit your domain
2. Check if all routes work (try refreshing different pages)
3. Verify all assets are loading
4. Test all functionality

## Common Issues and Solutions

### If pages don't load on refresh:
- Verify `.htaccess` file is properly uploaded
- Check if mod_rewrite is enabled
- Contact Hostinger support to enable required modules

### If assets don't load:
- Check file permissions (should be 644 for files, 755 for directories)
- Verify paths in the build files
- Clear browser cache and Hostinger's cache

### If API calls fail:
- Update API endpoints in production environment
- Check CORS configuration
- Verify SSL certificate is properly installed

## Maintenance

### To update your site:
1. Make changes locally
2. Run build script
3. Upload new files to Hostinger
4. Clear cache in Hostinger panel

### Regular Maintenance:
1. Keep regular backups
2. Update dependencies regularly
3. Monitor error logs
4. Check SSL certificate expiration

## Security Considerations

1. Keep `.htaccess` file secure
2. Enable Hostinger's security features
3. Regular security scans
4. Keep all dependencies updated

## Performance Optimization

1. Enable Hostinger's LiteSpeed Cache
2. Use browser caching (already configured in .htaccess)
3. Enable GZIP compression (already configured in .htaccess)
4. Optimize images and assets

## Support

If you encounter issues:
1. Check Hostinger's knowledge base
2. Contact Hostinger support
3. Review server logs in Hostinger panel