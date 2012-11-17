#!/bin/bash

echo '# node 220_server.js &'
node 220_server.js &
sleep 0.5

echo '# node 120_client'
node 120_client.js

kill %1
