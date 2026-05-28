@echo off
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] Warning: Node.js not found. Guide schema will not update automatically.
    echo Download: https://nodejs.org/
    echo.
)

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] Warning: Git not found. Editor cannot update from command line.
    echo Download: https://git-scm.com/
    echo.
)