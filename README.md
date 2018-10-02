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

### Description
This element will display the light-curve plot. The light curve plot show the intensity of an astrophysical source with respect to time. Each point has a vertical and horizontal error bar or it can have an upper limit (an arrow facing down). The points can have different colors, depending on their class.

### Static Configurations
* [plottitle] : label of the plot title (default = 'Title not set')
* [xlabel] : label of the x axis (default = 'xlabel not set')
* [ylabel] : label of the y axis (default = 'ylabel not set')
* [classesnumber] : number of point classes (each class, from 0 to n-1, has a certain color) (MAX 5 classes, default = 2)
* [slidingwindowsize] : how many points the plot can display (only in the case of linear axis) (default = 100)
* [slidingwindowmaxsize] : it's possibile to increment the number of points displayed by the plot up to this value (default = 500)
* [slidingwindowminsize] : it's possibile to decrement the number of points displayed by the plot down to this value (default = 1)
* [scrollzoom] : enables zooming with the mouse wheel (default = false)
* [showcontrols] : shows up the controls buttons. (dafault = true)
* [debug] : displays informations and shows a performance plot (default = false)

Example

\<light-curve id="lightCurveWebcomp" plottitle="Light Curve" xLabel="MJD" ylabelmin=0 ylabelmax=9 classesnumber=3 slidingwindowSize=5 debug=true\>\<\/light-curve\>

### API
* setPlotTitle(title);
* setAxisLabels(xLabel, yLabel);
* setYlimits(ymin, ymax);
  * The interval [ymin, ymax] will be stretched of another 20%
* setTickDistance(dTick);
  * Switch from 'auto' to 'linear' tick-mode. Set the distance between one tick and another on the X axis, in a linear fashion. Use with caution.
* setTickAutoMode();
  * Set the original 'auto' tick-mode
* addPoint(text, x, y, err_x, err_x_min, err_y, err_y_min, addUpperLimit, pointClass);
* addLine(x0,y0,x1,y1,color,width,dashType);
  * dashType: sets the dash style of lines. Set to a dash type string ("solid", "dot", "dash", "longdash", "dashdot", or "longdashdot") or a dash length list in px (eg "5px,10px,2px,2px").
* highlightsAnnotations();
* resetPlot();

### Issues
* Performance decreases when annotation (to display upper limits) are used.
* Can't pass MathJax string as an attribute value (e.g. <light-curve yLabel="$\\text{ [10}^{-8}\\text{ph }\\text{cm}^{-2}\\text{ s}^{-1}\\text{]}$"></light-curve>)



## \<data-quality-histogram\>
### Description
This element will display the data-quality-histogram plot.

### Static Configurations
* [plottitle] : label of the plot title (default = 'Title not set')
* [xlabel] : label of the x axis (default = 'xlabel not set')
* [ylabel] : label of the y axis (default = 'ylabel not set')

Example

\<data-quality-histogram id="dqHistogramWebcomp" plottitle="Data Quality Histogram" xLabel="Poperty value" yLabel="Count events"\>\<\/data-quality-histogram\>

### API
* configure(mine, maxe, eis);
  * set the minimum and the maximum value of the x axis and the bin size.
* addPoint(x);
* resetPlot();


# Development

## First setup
Download node binaries
prepend-path PATH /home/cta/nodejs-v8.11.3/node-v8.11.3-linux-x64/bin
npm install polymer-cli
npm install bower
bower install --save Polymer/polymer#^2.0.0

## Info
* Out of the box plotly does not work with the Polymer's shadow dom. This is due to the way it adds styles to the main document. If each template includes the appropriate styles plotly works fine. A style module was created (https://www.polymer-project.org/2.0/docs/devguide/style-shadow-dom) and each component imports it with: <style include="plotly-style"></style>.


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
