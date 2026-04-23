@echo off
setlocal
cd /d "%~dp0"
echo Installing dependencies if needed...
call npm.cmd install
if errorlevel 1 exit /b %errorlevel%
echo Building static site...
call npm.cmd run build
if errorlevel 1 exit /b %errorlevel%
echo Serving built site at http://localhost:3000/GamebananaAPI-Docs/
call npm.cmd run serve
