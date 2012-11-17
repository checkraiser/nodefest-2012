#!/bin/bash

echo '# node 210_c.js &'
node 210_c.js &
sleep 1
echo '# node 200_b.js'
node 200_b.js
kill %%
