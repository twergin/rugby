rugby
-----

I'll keep this readme updated as I progress so it's a bit easier to follow along with.  Let me know if 
there's anything you'd like me to elaborate on.  Once I make some more progress, I'll publicly host the site somewhere temporarily.

If you're unfamiliar with github, it's just a tool to use with Git version control.  once you setup a github 
account and git, you'll have access to a new command line tool called git bash.  just run git bash in 
the directory you want to keep everything in, then run 'git clone https://github.com/twergin/rugby' and 
it will download everything you need.

7/9/14
-----
<i>Pretty major changes made.  I'm planning on deploying the site using a service called Heroku, which I haven't configured yet, but once I do I'll add in a link.</i>

- I decided to use a stack of MongoDB, Express, AngularJS, and Node for the site.  MongoDB is the database where players will be stored, Express is a framework for creating a server, Angular is a front end MVC framework, and node powers the backend.  The benefit of this stack is that everything is written in JavaScript so it all works really nicely together.

- AngularJS solves a lot of common issues with building webapps that are heavy on javascript.  The syntax is pretty similar, the biggest thing you'll see is in the html docs there will be content in the format {{ content }} inserted.  Angular essentially uses a template system so the stuff displayed on a page is bound to the front and backend code, and will update as they do.  It's pretty similar to using PHP if you're familiar with that.  If you look in the javascript file controlling a page, you'll see functions and variables prefixed by $scope.  This is Angular's way of binding the html with it's controller.  The other thing that will look different on the html docs is you'll see ng-click, ng-app, etc.  these are also for data binding.  There's a lot of good info/tutorials online if any of it doesn't make sense, and I can answer any questions you might have also.

- The 'about' page has a diagram of all the positions on the lefthand side, and a sidebar with each player's name, position, home town, and picture on the right.  By default the sidebar displays all players that are in the database, and if you click on any position it'll filter the sidebar to just players with a position property equal to whatever you clicked.

- There's also a page at about/add that just has a form for adding players to the database.  It has inputs for all of the player info, and once you click 'add' they'll be added to the database, and the front end stuff on the site will reflect that immediately.  Rather than uploading an image for the player, there's a form field for a link to their picture.  I figured it'd be easier all around to just host the pictures elsewhere (using imgur at the moment).  I haven't added in functionality for removing players yet, but I'll work it in soon.  The add page is password protected so not just anyone can add players.

-------

<b>General Stuff</b>

- "Rugby" is the root folder.  everything inside it except for the "public" folder are just workflow 
utilities I've used.  You can use them if you'd like but they're not at all necessary.  The 'public' 
folder has everything that will be uploaded to the server and be accessible to anyone.  if you don't 
care about the workflow stuff, you can just go straight here.

- Pretty much all of the workflow stuff is run through Node and Node Packaged Modules.  If you're 
unfamiliar with it, NPM is basically a command line utility that allows you to easily install tools 
you'll use in a given project.  Instructuctions on installing can be found on 
http://nodejs.org/download/ and https://github.com/joyent/node/wiki/installation There are a bunch of 
tutorials and guides available online if you get stuck.

- once you have Node installed globally on your system, all you need to do is navigate to the "rugby" 
folder via the command line, then run 'npm install' - this command looks for a file called package.json 
in the current directory.  package.json is just a file telling node what is needed.  *Note - some of 
the tools like grunt need to be installed globally as well.  

-  Grunt is a task runner that automates stuff you don't want to do manually.  it's configured in the 
Gruntfile.js file. more info on installation here http://gruntjs.com/getting-started for this project, 
the tasks I've set up are uglify which compresses javascript files, cssmin which does the same for 
css files, jshint which checks for syntax errors in your js, and concat which will concatenate files 
into one, so you're making fewer http requests to the server.  Again, these aren't necessary to use but 
they will make your life easier if you want to go through all the setup.

-  During development, I host everything on localhost:3000.  to get this running, you'll just need to 
use the command 'node server.js' and it will tell you the server is up on port 3000 if it worked.  if 
it didn't, google the error it gives you and there should be documentation on how to fix it. 

-  Inside the 'public' folder should be pretty self explanatory.  In addition to folders for css, imgs, 
and js, there are folders for the separate pages and their assets.  'fa' is for font awesome, it's an 
icon pack.  you shouldn't need to modify anything there.




6/27/14 
-----
<i>Set up the project folder with some build tools.  Reworked the code I had for the homepage.  Looks the same as it did last time you saw it, but underneath it's quite a bit different.  should be fully responsive but I haven't tested extensviely yet.</i>

<b>Css</b>

-  The three stylesheets you'll come across are style.css, normalize.css, and reset.css. style is your 
main css doc, normalize smoothes out some browser compatibility issues, and reset just changes some 
annoying default stuff, like margins before and after text.  you'll never need to edit normalize or 
reset.

-  I've only used class (.) selectors, as opposed to id (#) selectors.  The reason for this is for easier code reuse and modularity.  Id selectors are unique, and can only be used once per document.  classes work well because you can apply common styles to any number of elements quickly and without repeating yourself.  Less code, less opportunties for errors.

<b>JavaScript</b>

-  there will be more to the main.js file later, but for now it's just animating the slide in/out of 
the navigation drawer on smaller screens

