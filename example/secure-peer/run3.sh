#!/bin/bash

echo '# node 080_a.js &'
node 080_a.js &
sleep 1
echo '# node 200_b.js'
node 200_b.js
kill %%
