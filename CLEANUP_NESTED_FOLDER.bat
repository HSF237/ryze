@echo off
REM This script deletes the nested ryze folder that's causing npm install to fail

echo.
echo 🧹 Cleaning up nested ryze folder...
echo.

REM Delete the nested folder
rmdir /s /q "C:\Users\HI\Desktop\MY CODESPACE\RYZE\ryze"

if %errorlevel% equ 0 (
    echo.
    echo ✅ SUCCESS! Nested ryze folder deleted.
    echo.
    echo Next step: Run npm install
    echo   cd C:\Users\HI\Desktop\MY CODESPACE\RYZE
    echo   npm install
    echo.
) else (
    echo.
    echo ❌ ERROR: Could not delete folder.
    echo Try manually deleting: C:\Users\HI\Desktop\MY CODESPACE\RYZE\ryze
    echo.
)

pause
