# Push mobile-optimized component updates to GitHub
# Run this script to commit and push all mobile-optimized files

Write-Host "RYZE Mobile Optimization Push Script" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Navigate to project directory
cd "C:\Users\HI\Desktop\MY CODESPACE\RYZE"
Write-Host "Working directory: $(Get-Location)" -ForegroundColor Yellow

# Add all mobile-optimized files
Write-Host ""
Write-Host "Staging mobile-optimized components..." -ForegroundColor Cyan
git add components/ProductShowcase.jsx
git add components/Hero.jsx
git add components/Comparison.jsx
git add app/checkout/page.jsx

# Check git status
Write-Host ""
Write-Host "Files staged for commit:" -ForegroundColor Yellow
git status

# Commit the changes
Write-Host ""
Write-Host "Committing mobile-optimized components..." -ForegroundColor Cyan
git commit -m "Add mobile-responsive optimizations to ProductShowcase, Hero, Comparison, and Checkout components"

# Push to GitHub
Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push origin main

Write-Host ""
Write-Host "================================================" -ForegroundColor Green
Write-Host "Mobile optimization push COMPLETE!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your site will redeploy automatically on Vercel." -ForegroundColor Yellow
Write-Host "Check: https://ryze-mu.vercel.app" -ForegroundColor Yellow
Write-Host ""

Read-Host "Press Enter to close"
