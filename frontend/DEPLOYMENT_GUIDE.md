# Deploying to Hostinger

## Pre-deployment Steps

1. Build your React application:
```bash
npm run build
```

## Deployment Steps

1. **Login to Hostinger**
   - Go to https://hpanel.hostinger.com
   - Login to your account

2. **Domain Setup**
   - Go to "Domains" section
   - Select your domain or create a new one
   - Wait for DNS propagation if using a new domain

3. **File Upload**
   - Go to "File Manager" in hPanel
   - Navigate to `public_html` (or your subdomain directory)
   - Upload all contents from your local `build` folder to this directory

4. **Configure for React Router**
   Create a `.htaccess` file in your `public_html` directory with the following content:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteCond %{REQUEST_FILENAME} !-l
     RewriteRule . /index.html [L]
   </IfModule>
   ```

5. **SSL Configuration**
   - Go to "SSL" section in hPanel
   - Install SSL certificate if not already installed
   - Force HTTPS redirection

## Post-deployment Steps

1. **Test Your Website**
   - Visit your domain and ensure everything loads correctly
   - Test all routes and features
   - Check for any console errors
   - Verify all assets are loading properly

2. **Common Issues and Solutions**

   a. **Blank Page After Refresh**
   - Ensure the .htaccess file is properly configured
   - Check if mod_rewrite is enabled

   b. **Assets Not Loading**
   - Verify all paths in the build are relative
   - Check if the asset files were uploaded correctly

   c. **API Connection Issues**
   - Update API endpoints to production URLs
   - Verify CORS settings
   - Check SSL certificate status

3. **Performance Optimization**
   - Enable Hostinger's LiteSpeed Cache
   - Configure browser caching
   - Enable GZIP compression

## Environment Variables

1. Create a `.env` file in your Hostinger hosting space with production values:
```env
REACT_APP_API_URL=https://your-api-domain.com
```

## Maintenance

1. **Updating Your Site**
   - Create a new build locally
   - Upload new build files to Hostinger
   - Clear browser and server cache

2. **Backup**
   - Keep regular backups of your build files
   - Use Hostinger's backup feature

## Security Considerations

1. Ensure all sensitive information is removed from the build
2. Use environment variables for configuration
3. Enable security headers in Hostinger
4. Keep all dependencies updated

## Support

If you encounter any issues:
1. Check Hostinger's knowledge base
2. Contact Hostinger support
3. Review React deployment documentation