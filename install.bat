@echo off
echo Creating shortcut...
call install\create_shortcut.bat

echo.
echo Checking for required tools (Node.js/Git)...
echo.
call install\check_dependencies.bat

echo.
echo Setup complete!
pause