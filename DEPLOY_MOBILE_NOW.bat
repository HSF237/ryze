@echo off
REM RYZE Mobile Optimization Deployment Script
REM This script pushes all mobile-optimized components to GitHub and triggers Vercel deployment

echo.
echo =====================================================
echo RYZE Mobile Optimization Deployment
echo =====================================================
echo.

REM Navigate to project directory
cd /d "C:\Users\HI\Desktop\MY CODESPACE\RYZE"

echo Working directory: %CD%
echo.

REM Check if git is available
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com
    pause
    exit /b 1
)

echo [1/5] Git is ready
echo.

REM Check current branch
echo [2/5] Checking git status...
git status --porcelain
echo.

REM Stage mobile-optimized files
echo [3/5] Staging mobile-optimized components...
git add components/ProductShowcase.jsx
git add components/Hero.jsx
git add components/Comparison.jsx
git add app/checkout/page.jsx
echo       - ProductShowcase.jsx staged
echo       - Hero.jsx staged
echo       - Comparison.jsx staged
echo       - checkout/page.jsx staged
echo.

REM Commit changes
echo [4/5] Creating commit...
git commit -m "Add mobile-responsive optimizations to all product components"
if errorlevel 1 (
    echo WARNING: Commit may have failed. Check the output above.
)
echo.

REM Push to GitHub
echo [5/5] Pushing to GitHub...
git push origin main
echo.

if errorlevel 0 (
    echo =====================================================
    echo SUCCESS! Files pushed to GitHub
    echo =====================================================
    echo.
    echo Next: Vercel will auto-deploy in 1-2 minutes
    echo Monitor at: https://vercel.com/dashboard
    echo.
    echo Live site: https://ryze-mu.vercel.app
    echo.
) else (
    echo =====================================================
    echo PUSH COMPLETED (Check output above for any errors)
    echo =====================================================
)

echo.
pause
