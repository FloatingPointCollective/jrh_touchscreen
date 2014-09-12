#!/bin/sh
if [ $(ps ax | grep -v grep | grep "Chromium.app" | wc -l) -eq 0 ]
then
echo "Chromium not running. opening…"
/Applications/Chromium.app/Contents/MacOS/Chromium -kiosk
else
echo "Chromium running"
fi