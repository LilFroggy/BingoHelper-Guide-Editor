@echo off
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo [WARNING] Git not found. Install it from https://git-scm.com/ and run this setup script again if you want automatic editor updates.
)

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo [WARNING] Node.js not found. Install it from https://nodejs.org/ and run this setup script again if you want automatic schema updates.
    echo.
    echo Setup complete.
    pause
)