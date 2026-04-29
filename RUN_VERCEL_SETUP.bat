@echo off
cls
echo.
echo 🚀 Running RYZE Vercel Environment Setup...
echo.
echo This will:
echo   ✓ Add all API keys to Vercel
echo   ✓ Push changes to GitHub
echo   ✓ Trigger a Vercel redeploy
echo.
echo Starting in 3 seconds...
timeout /t 3

REM Run the PowerShell script
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0SETUP_VERCEL_ENV.ps1"

pause
