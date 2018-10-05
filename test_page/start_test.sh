#!/bin/bash

if [ "$#" -ne 1 ]; then
    printf "\nPlease provide one of the following test pages:\n"
    for entry in "test_pages"/*
    do
      echo " -> ${entry##*/}"
    done
    printf "\n"
    return;
fi

module load node-v8.11.3


printf '\nExecute in a local shell:\nssh -N -L 8600:localhost:3000 cta@agilepipedev.iasfbo.inaf.it\n\n'

node index.js $1
