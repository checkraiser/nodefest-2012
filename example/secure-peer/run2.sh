#!/bin/bash

echo '# node 080_a.js &'
node 080_a.js &
sleep 1
echo '# node 170_b.js'
node 170_b.js
kill %%
