@echo off
echo "Cleaning build directory..."
if exist build rmdir /s /q build
echo.

echo "Creating build directory..."
mkdir build
copy frontend\index.html build\
copy frontend\style.css build\

tsc -p frontend\tsconfig.json

