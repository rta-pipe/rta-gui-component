# RTA-GUI-Components


## Description
This software contains Plotly.js plots incapsulated in Polymer Components i.e. a single element or group of related elements which you intend to use in other element or app projects, or distribute on a registry like Bower or NPM. Elements are reusable and organized to be used alongside other elements, so components are referenced outside the project.


## Visualizing the components

### Description:
In order to test the Polymer components, an Express (Node.js) server has been setted up. Starts the server and then connect to it with the browser (use an ssh-tunnel if you are connceting with a remote ssh connection). The server will simulate the data streaming adding points to the plots.

### Pre-requisities:
* Node.js (download binaries at https://nodejs.org/dist/v8.11.3/node-v8.11.3-linux-x64.tar.xz)

### First-time setup:
* git clone https://github.com/cta-rta/RTA-GUI-Component
* cd RTA-GUI-Component/test_page
* prepend-path PATH \<node_folder\>/nodejs-v8.11.3/node-v8.11.3-linux-x64/bin
* npm install (it will install the backend dependencies locally and Bower)
* bower install (it will install the frontend dependencies)
* . start_server.sh (will copy the components in the test_page and it will start the server)
* (optional) If using a ssh remote connetction, use a ssh-tunnel with:  ssh -N -L \<your-port\>:localhost:3000 \<user@machine-address\>

### After first-time setup:
* cd RTA-GUI-Component/test_page
* prepend-path PATH \<node_folder\>/nodejs-v8.11.3/node-v8.11.3-linux-x64/bin
* . start_server.sh (will copy the components in the test_page and it will start the server)
* (optional) If using a ssh remote connetction, use a ssh-tunnel with:  ssh -N -L \<your-port\>:localhost:3000 \<user@machine-address\>

# Components

## \<light-curve\>

This element will display the light-curve plot. The light curve plot show the intensity of an astrophysical source with respect to time. Each point has a vertical and horizontal error bar or it can have an upper limit (an arrow facing down). The points can have different colors, depending on their class.

Configurations:
* height and width of the plot
* title and axis labels
* min y, max y
* number of point classes (each class, from 0 to n-1, has a certain color)
* sliding window initial size (only in the case of linear axis)

Example

\<light-curve id="lightCurveWebcomp" width="1000px" height="400px" plottitle="Light Curve" xLabel="MJD" ylabelmin=0 ylabelmax=9 classesnumber=3 slidingwindowSize=5\>\<\/light-curve\>

Interface:
* addPoint(text, x, y, err_x, err_y, addUpperLimit, pointClass)

## \<spectral-light-curve\>


## \<histogram\>


# Development

## First setup
Download node binaries
prepend-path PATH /home/cta/nodejs-v8.11.3/node-v8.11.3-linux-x64/bin
npm install polymer-cli
npm install bower
bower install --save Polymer/polymer#^2.0.0

## Creating a new element

* mkdir new-elem
* cd mew-elem
* ./../node_modules/polymer-cli/bin/polymer.js init

Choose polymer-2-element and add an optional description. At this point, Polymer CLI generates files and directories for your element, and installs your project's dependencies. If the installing of the project's dependencies fails, run manually:

* ./../node_modules/bower/bin/bower install

Polymer init script will also create a README.md and a .gitignore files. Delete them. Modify the import scripts, inserting the bower_components directory in the paths (BUG CLI).

Now start the server with:

* ./../node_modules/polymer-cli/bin/polymer.js serve

Other active and unclosed polymer sessions can be shown with ps -x and kill with kill -9 -id_session.
If you are using a remote ssh connection, a ssh-tunnel is needed to connect with a browser:

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
