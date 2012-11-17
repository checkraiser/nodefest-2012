#!/bin/bash
pqiv -i -f $(grep '^!' readme.markdown | sed 's/.*(//; s/)$//')
