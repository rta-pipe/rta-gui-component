# RTA-GUI-Components

## Description
This software contains Plotly.js web components developed with Polymer 2.

## Components in action
Start the Express (Node.js) server and then connect to it with the browser (use an ssh-tunnel if you are connecting with a remote ssh connection).

### Pre-requisities:
* Node.js (download binaries at https://nodejs.org/dist/v8.11.3/node-v8.11.3-linux-x64.tar.xz)

### First-time setup:
Download the code with:
```bash
  git clone https://github.com/cta-rta/rta-gui-component
```
Load Node.js with:
```bash
  prepend-path PATH \<node_folder\>/nodejs-v8.11.3/node-v8.11.3-linux-x64/bin
```
Install Express and Bower with:
```bash
  npm install
```
Install the component's javascript dependencies with:
```bash
  bower install
  bower install https://github.com/plotly/plotly.js.git#v1.39.2 --save
  bower install https://github.com/mathjax/MathJax.git#2.7.5 --save
  bower install --save bwt-datatable
  bower install web-animations-js --save

```
Start the server with:
```bash
  cd test_page
  . start_test.sh
```
(optional) If using a ssh remote connetction, use a ssh-tunnel with:
```bash
  ssh -N -L \<your-port\>:localhost:3000\<user@machine-address\>
```


# Components API

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

## \<rta-detection-datatable\>
This element will display a list of detections in a tabular fashion. The table is responsive and it allows the sorting by column-properties. An input text element allows the filtering of data based on the value of the 'label' property.

### Static Configurations
* [dataendpoint] : the url for the http get request to fetch a batch of data.  

Example

\<rta-detection-datatable id="detections-table" dataendpoint='/static/detections.json'\>\</rta-detection-datatable\>



### API
* addRow(json_row);
  * add a Json object as a table row. The Json object must have the following fields:
    * dec
    * detectionid
    * flux_err
    * label
    * ra
    * sqrtts
    * t_start_mjd
    * t_stop_mjd
    * t_start_tt
    * son_row.hasOwnProperty('t_stop_tt
    * x
    * y
* fetchNewData(dataendpoint);
  * make a http get request to 'dataendpoint' in order to load a new set of detections (the existing data is overwritten).


# Development

## Develop new components
Use the webcomp-example.hmtl as a starting point to develop a new web component. Once the component is ready, create a test page under the test_pages/ directory.

## Plotly Shadow Dom fix
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
