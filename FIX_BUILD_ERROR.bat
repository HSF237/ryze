@echo off
REM Fix Build Error - Resolve Merge Conflict in layout.jsx
REM This script commits the layout.jsx fix and pushes to GitHub to trigger Vercel rebuild

echo.
echo =====================================================
echo RYZE Build Error Fix - Merge Conflict Resolution
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

REM Stage the fixed layout.jsx file
echo Staging fixed layout.jsx...
git add app/layout.jsx
echo File staged successfully
echo.

REM Commit the fix
echo Committing fix...
git commit -m "Fix: Resolve merge conflict in app/layout.jsx - remove duplicate closing tags"
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
    echo SUCCESS! Build fix pushed to GitHub
    echo =====================================================
    echo.
    echo Vercel will automatically rebuild in 1-2 minutes
    echo Monitor at: https://vercel.com/dashboard
    echo Check status: https://github.com/HSF237/ryze
    echo.
) else (
    echo.
    echo ERROR: Push failed - check output above
    echo.
)

pause
