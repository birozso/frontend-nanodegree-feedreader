# Project Overview

There is a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! All further tests have developed by me (Zsolt Biro) following the instructions of Udacity project rubric.


## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)
* [File_details](#file_details)
* [Dependencies](#dependencies)

## Instructions

To start the test, simply double click (run) the **index.html** file in the root directory. **Index** will call the environment handler scripts and immediately start calling the loader of the RSS feeds and also start calling  the test handler scripts. 
Index calls [feedreader test](jasmine/spec/feedreader.js) Javascript spec file. Jasmine will read and contains all of the tests that will be run against this application.
Some test run right after the start, but the last two ( _Initial Entries_ , _New Feed Selection_ ) are run asynchronously , that means the test starts after some contents, data were collected and preloaded.

**feedreader.js** contains the following suits and tests:
* RSS Feeds suit
   - are defined test
   - URL defined test
   - name defined test

* The menu suit
   - hidden by default test
   - unhide by click test
   
* Initial Entries suit
   - loadFeed n feed container test

* New Feed Selection suit
   - feed changes test

Please see the remarks in the js code for test details. 

No test is dependent on the results of another.

Callbacks are used to ensure that feeds are loaded before they are tested.

## Contributing

This repository was build from the starter code of Udacity. You can share your thoughts and contribute in further development.


## File_details

You can find 4 main folders of the project files.

The :open_file_folder: **css** folder contains the [basic stylesheet](css/style.css) css file of the project and the [normalize stylesheet](css/normalize.css) that makes the project work on different browsers, devices. The [icomoon stylesheet](css/icomoon.css) used for placing and display the special icomoon fonts and images.

The :open_file_folder: **fonts** folder contains the icomoon fonts and vector graphic images.

The :open_file_folder: **js** folder contains the [javascript app](js/app.js) that controls the whole project by using Ajax calls and Google API to handle the feed reading, collecting, loading. 

The :open_file_folder: **jasmin** folder contains the :file_folder: **lib** folder with the basic test handle Jasmine files. The :file_folder: **spec** subfolder contains the  [feedreader.js](jasmin/spec/feedreader.js) spec file, that contains the test suits and tests, as described above. 


## Dependencies

This site was built using 
- [handlebars](http://cdn.jsdelivr.net/handlebarsjs/2.0.0/handlebars.min.js),
- [Google fonts Roboto](https://fonts.google.com/specimen/Roboto),
- [JQuery min](http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js),
- [Icomoon icons](https://icomoon.io/)
- [Google library loader](http://google.com/jsapi)
- [Jasmine Js](http://jasmine.github.io/)

Special thanks to Kelli, my Udacity mentor for all her help and encouragement. 
