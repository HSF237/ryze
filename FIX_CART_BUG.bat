@echo off
REM Fix Cart Bug - Resolve Cart Drawer Always Open Issue
REM This script commits the cart context and drawer fixes and pushes to GitHub

echo.
echo =====================================================
echo RYZE Cart Bug Fix - Cart Drawer State Issue
echo =====================================================
echo.

REM Navigate to project directory
cd /d "C:\Users\HI\Desktop\MY CODESPACE\RYZE"

echo Working directory: %CD%
echo.

REM Check git status
echo Checking git status...
git status
echo.

REM Stage the fixed files
echo Staging fixed files...
git add lib/cart.jsx
git add components/CartDrawer.jsx
echo Files staged successfully
echo.

REM Commit the fix
echo Committing fix...
git commit -m "Fix: Resolve cart drawer always open - properly separate state boolean from action functions"
if errorlevel 1 (
    echo ERROR: Commit failed
    pause
    exit /b 1
)
echo Commit successful
echo.

REM Push to GitHub
echo Pushing to GitHub...
git push origin main
if errorlevel 0 (
    echo.
    echo =====================================================
    echo SUCCESS! Cart fixes pushed to GitHub
    echo =====================================================
    echo.
    echo Vercel will automatically rebuild in 1-2 minutes
    echo Monitor at: https://vercel.com/dashboard
    echo Check status: https://github.com/HSF237/ryze
    echo Live site: https://ryze-mu.vercel.app
    echo.
    echo Cart drawer should now open/close normally!
    echo.
) else (
    echo.
    echo ERROR: Push failed - check output above
    echo.
)

pause
