# ADPROM Server

ADPROM, short for Advanced Project Management Tool, was my attempt to keep track of my different side projects through, well, another side project. 
Back then, in my early days as a web developer, I considered it a wise move to ignore all existing (and working!) solutions and build one myself.
Although I ended up never actually using ADPROM, I learned a lot along the way and decided to upload my code as a future reference on how it _could_ be done.


Details on my journey with ADPROM can be found in [this](https://medium.com/@christoph.werner.stein/what-happens-when-motivation-tries-to-outrun-reality-ea49337e4796#10e5-e3d8106acb91) medium post.

## Installation

Before getting started, make sure you have Node and npm installed. Instructions on how to do so can be found [here](https://www.npmjs.com/get-npm).

Run `npm install` to install any missing packages and dependencies.


## Usage

Before starting the server, make sure to have an SQL server running on your machine according to the setting described in [config.json](/config/config.json)


If the SQL server is running, start the ADPROM backend by executing
```bash
node index.js
```

During development, I recommend to use [Nodemon](nodemon.io) to spin up the server, as it automatically restarts on code change. Once Nodemon is installed, start the server by running
```bash
nodemon index.js
```




<!-- ## License
[MIT](https://choosealicense.com/licenses/mit/) -->