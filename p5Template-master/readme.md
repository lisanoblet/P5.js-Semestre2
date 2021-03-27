# LINK TO SEE MY WORK
https://lisanoblet.github.io/P5.js-Semestre2/p5Template-master/index.html

# Pseudocode

First, you trace a line to outline the mountain which defines the landscape. You can add more points to the line so that the outline/motif of the mountain is more precise. 
Thanks to this line, we can trace all the shapes that start from there. Depending on the number of starting points for the main line, I get more or less shapes and details.
We want to place at least one point of every primitive (triangles or lines) on the line. To do that, I calculate the equation of the slope. (That is to say: for a triangle for example, we want a point to always be placed on the line at a random position. The other points have a random position below the line.) 

So, for every segment of my line (which is a succession of intervals and segments), I can retrieve the coordinates of a random point that belongs to this line. 

From there, I get the other points of the shape using the random function to get a different pattern with each iteration and avoid overlapping shapes. To prevent the other points (those that do not belong to the lines that form the mountain) from crossing the line above, I add constraints when I choose the new random coordinates.
I reiterate the creation of these shapes and the starting lines to have as many as I want. 


## The code therefore simply breaks down into:
  - Definition of points for the mountain line
  - Creation of lines/segments that join these points
  - Calculation of the equation of the line for every segment to obtain the x and y coordinates of one of the first point located on the chosen line
  - Creation of all the triangles using the calculated coordinates and the other random ones.





# p5 template project

Forked from [https://github.com/Gaweph/p5-typescript-starter](https://github.com/Gaweph/p5-typescript-starter)

## Getting Started

You will need to have Node installed ([https://nodejs.org/](https://nodejs.org/))  
Download this repository and open it in your favorite IDE (I would **highly** recommend VS Code ([https://code.visualstudio.com/](https://code.visualstudio.com/)))  
Then open a terminal at the root of the folder (you can do it in VS Code by simply dragging up the bottom of the window) and type the following commands :

### Installing

```
npm i -g npm-run-all typescript browser-sync
```

Only use this command the first time you ever use this template (-g means you install things globally)

### Launching

```
npm start
```

A local version will now be running at [localhost:3000](http://localhost:3000)  
You can now write all the p5 things you want in __*src/sketch.ts*__

### Publishing online

#### Using GitHub Pages

Create a GitHub repository and commit all your files (if that's not already done)

Then in the **Settings** of your repository, under **GitHub Pages** set Source to *main* and click Save.  
If you scroll back down to **GitHub Pages** you can now see the url of your sketch ! (it might take a few minutes to be published online)
