#!/bin/bash

. ../../nodejs-v8.11.3/load_node_module.sh

cp ../components/plotly_components/light-curve.html components/

printf '\nExecute in a local shell:\nssh -N -L 8600:localhost:3000 cta@agilepipedev.iasfbo.inaf.it\n\n'

node index.js
