@echo off
REM Push RYZE to GitHub
REM This script initializes git, commits your code, and pushes to GitHub

echo.
echo ========================================
echo RYZE - Pushing to GitHub
echo ========================================
echo.

cd /d C:\Users\HI\Desktop\MY CODESPACE\RYZE

echo Setting git config...
git config user.email "hsfwebdevelopers@gmail.com"
git config user.name "HSF237"

echo.
echo Initializing git repository...
git init

echo.
echo Adding all files...
git add .

echo.
echo Committing code...
git commit -m "Initial commit: RYZE Smart Posture Trainer - Next.js storefront"

echo.
echo Adding GitHub remote...
git remote add origin https://github.com/HSF237/ryze.git

echo.
echo Switching to main branch...
git branch -M main

echo.
echo Pushing to GitHub (this may take a moment)...
git push -u origin main

echo.
echo ========================================
echo SUCCESS! Code pushed to GitHub
echo Repository: https://github.com/HSF237/ryze
echo ========================================
echo.
pause
