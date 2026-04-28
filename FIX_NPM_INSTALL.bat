@echo off
echo.
echo 🔧 Fixing npm install issues...
echo.

echo Step 1: Clearing npm cache...
call npm cache clean --force
echo ✅ Cache cleared

echo.
echo Step 2: Deleting node_modules and lock files...
if exist node_modules (
    rmdir /s /q node_modules
    echo ✅ node_modules deleted
) else (
    echo ✅ node_modules not found (already clean)
)

if exist package-lock.json (
    del package-lock.json
    echo ✅ package-lock.json deleted
) else (
    echo ✅ package-lock.json not found (already clean)
)

echo.
echo Step 3: Running npm install...
call npm install

if %errorlevel% equ 0 (
    echo.
    echo ✅✅✅ SUCCESS! npm install completed!
    echo.
    echo Next: Run npm run build
    echo.
) else (
    echo.
    echo ❌ npm install still failing
    echo Try these fixes:
    echo   1. Check your internet connection
    echo   2. Try: npm config set registry https://registry.npmjs.org
    echo   3. Try: npm install --legacy-peer-deps
    echo.
)

pause
