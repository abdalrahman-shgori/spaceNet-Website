# PowerShell script to clean build directory and rebuild
Write-Host "Cleaning build directory..."

# Kill any processes that might be locking files
Get-Process | Where-Object {$_.ProcessName -eq "node" -or $_.ProcessName -eq "Code"} | Stop-Process -Force -ErrorAction SilentlyContinue

# Wait a moment
Start-Sleep -Seconds 2

# Try to remove build directory
try {
    Remove-Item -Recurse -Force "build" -ErrorAction Stop
    Write-Host "Build directory removed successfully"
} catch {
    Write-Host "Could not remove build directory, trying alternative method..."
    # Try using cmd
    cmd /c "rmdir /s /q build 2>nul"
}

# Set environment variables and build
$env:GENERATE_SOURCEMAP = "false"
Write-Host "Building with fresh hash generation..."
npx react-scripts build

Write-Host "Build completed!"
