#!/bin/bash

seaport listen 7000 &

echo '# seaport show localhost:7000'
echo '# curl -X POST localhost:$PORT'

node 250_worker.js &
node 410_web.js

