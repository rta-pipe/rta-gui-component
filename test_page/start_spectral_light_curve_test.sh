#!/bin/bash

. ../../nodejs-v8.11.3/load_node_module.sh

# Style
cp -r ../components/plotly_components/styles/plotly-style.html styles/

# Component
cp ../components/plotly_components/spectral-light-curve.html components/

# Imports
cp -r ../components/plotly_components/imports ./


printf '\nExecute in a local shell:\nssh -N -L 8600:localhost:3000 cta@agilepipedev.iasfbo.inaf.it\n\n'

node index.js index-test-spectral-light-curve.html