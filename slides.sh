#!/bin/bash
pqiv -i -f $(grep '^!' slides.markdown | sed 's/.*(//; s/)$//')
