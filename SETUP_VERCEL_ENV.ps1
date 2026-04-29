# RYZE Vercel Environment Setup Script
# This script adds all API keys to Vercel and triggers a redeploy

Write-Host "RYZE Vercel Environment Setup" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

# Check if Vercel CLI is installed
Write-Host "Checking Vercel CLI..." -ForegroundColor Yellow
vercel --version
if ($LASTEXITCODE -ne 0) {
    Write-Host "Vercel CLI not installed. Installing..." -ForegroundColor Red
    npm install -g vercel
}

Write-Host ""
Write-Host "Vercel CLI ready" -ForegroundColor Green
Write-Host ""

# Define all environment variables (ADD YOUR KEYS HERE - DO NOT COMMIT WITH REAL SECRETS)
$envVars = @(
    @{Name="NEXT_PUBLIC_FIREBASE_API_KEY"; Value="YOUR_KEY_HERE"},
    @{Name="NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"; Value="YOUR_KEY_HERE"},
    @{Name="NEXT_PUBLIC_FIREBASE_PROJECT_ID"; Value="YOUR_KEY_HERE"},
    @{Name="NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"; Value="YOUR_KEY_HERE"},
    @{Name="NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"; Value="YOUR_KEY_HERE"},
    @{Name="NEXT_PUBLIC_FIREBASE_APP_ID"; Value="YOUR_KEY_HERE"},
    @{Name="NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"; Value="YOUR_KEY_HERE"},
    @{Name="STRIPE_SECRET_KEY"; Value="YOUR_KEY_HERE"},
    @{Name="RESEND_API_KEY"; Value="YOUR_KEY_HERE"},
    @{Name="ADMIN_PASSWORD"; Value="YOUR_PASSWORD_HERE"},
    @{Name="NEXT_PUBLIC_APP_URL"; Value="YOUR_URL_HERE"}
)

# Navigate to RYZE folder
cd "C:\Users\HI\Desktop\MY CODESPACE\RYZE"
Write-Host "Working directory: $(Get-Location)" -ForegroundColor Yellow
Write-Host ""

# Add each environment variable
Write-Host "Adding environment variables to Vercel..." -ForegroundColor Cyan
Write-Host ""

foreach ($var in $envVars) {
    Write-Host "  Adding: $($var.Name)" -ForegroundColor White
    echo $var.Value | vercel env add $var.Name --yes 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  [OK]" -ForegroundColor Green
    } else {
        Write-Host "  [Already exists or skipped]" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "All environment variables processed!" -ForegroundColor Green
Write-Host ""

# Commit changes to git
Write-Host "Committing to GitHub..." -ForegroundColor Cyan
git add .
git commit -m "Add Vercel environment variables" 2>$null
git push origin main 2>$null

Write-Host "Pushed to GitHub" -ForegroundColor Green
Write-Host ""

# Trigger redeploy
Write-Host "Triggering Vercel redeploy..." -ForegroundColor Cyan
vercel redeploy --yes 2>$null

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "SETUP COMPLETE!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Check Vercel: https://vercel.com/dashboard" -ForegroundColor White
Write-Host "  2. Click ryze project - Deployments tab" -ForegroundColor White
Write-Host "  3. Wait 1-2 min for build to complete" -ForegroundColor White
Write-Host "  4. Visit https://ryze.vercel.app" -ForegroundColor White
Write-Host ""
Write-Host "Test payment:" -ForegroundColor Yellow
Write-Host "  Card: 4242 4242 4242 4242" -ForegroundColor White
Write-Host "  Date: Any future date" -ForegroundColor White
Write-Host "  CVC: Any 3 digits" -ForegroundColor White
Write-Host ""
Write-Host "Admin: https://ryze.vercel.app/admin/orders (password: admin123)" -ForegroundColor Yellow
Write-Host ""

Read-Host "Press Enter to close"
