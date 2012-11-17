#!/bin/bash

seaport listen 7000 &

echo '# seaport localhost:7000 show'
echo '# curl -X POST localhost:$PORT'

node 500_worker.js 111 &
node 500_worker.js 333 &
node 500_worker.js 555 &
node 410_web.js
