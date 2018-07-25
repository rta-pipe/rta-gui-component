# RTA-GUI-Components

## First setup
Download node binaries
prepend-path PATH /home/cta/nodejs-v8.11.3/node-v8.11.3-linux-x64/bin
npm install polymer-cli
npm install bower

## Description
This software contains Plotly.js plots incapsulated in Polymer Components. Each component was bootstrapped by the Polymer-cli that allows to expose a single element or group of related elements which you intend to use in other element or app projects, or distribute on a registry like Bower or NPM. Elements are reusable and organized to be used alongside other elements, so components are referenced outside the project.

## Creating a new element

* mkdir new-elem
* cd mew-elem
* ./../node_modules/polymer-cli/bin/polymer.js init 
  
Choose polymer-2-element and add an optional description. At this point, Polymer CLI generates files and directories for your element, and installs your project's dependencies. If the installing of the project's dependencies fails, run manually:

* ./../node_modules/bower/bin/bower install 

Polymer init script will also create a README.md and a .gitignore files. Delete them.

Now start the server with:

* ./../node_modules/polymer-cli/bin/polymer.js serve

If you are using a remote ssh connection, a ssh-tunnel is needed:

* ssh -N -L 8500:localhost:8081 cta@agilepipedev.iasfbo.inaf.it

## Element directory
After the initialization process Polymer CLI generates the following files and directories:

* bower.json. Configuration file for Bower.
* bower_components/. Project dependencies. See Manage dependencies.
* demo/index.html. Demo of new-elem.html.
* index.html. Automatically-generated API reference. (not yet supported)
* new-elem.html. Element source code.
* test/new-elem_test.html. Unit tests for the element.

## Install external dependency
Run the following command in the element's directory:

* bower install <endpoint> --save

When --save flag is used, all additional endpoint are saved to dependencies in bower.json. 
Endpoints can have multiple forms:

* \<package\>
* \<package\>#\<version\>
* \<name\>=\<package\>#\<version\>

For additional information -> https://bower.io/docs/api/

Example:
  ./../node_modules/bower/bin/bower install https://github.com/plotly/plotly.js.git#v1.39.2 --save


# \<light-curve\>

This element will display the light-curve plot
