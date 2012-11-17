#!/bin/bash
echo 'node src/server.js 8000 &'
node src/server.js 8000 &
sleep 1
echo 'node src/server.js 8000 8001 &'
node src/server.js 8000 8001 &
echo 'node src/seed.js 8000'
node src/seed.js 8000
kill %1 %2
