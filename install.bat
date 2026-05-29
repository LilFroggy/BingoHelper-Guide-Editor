@echo off

pushd "%~dp0"

echo creating shortcut...
call install\create_shortcut.bat

echo checking dependencies...
call install\check_dependencies.bat

echo initializing Node.js environment...
call npm ci 2>nul >nul

echo.
echo setup complete.

popd

pause