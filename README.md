rugby
-----

I'll keep this readme updated as I progress so it's a bit easier to follow along with.  Let me know if 
there's anything you'd like me to elaborate on.  Once I make some more progress, I'll publicly host the site somewhere temporarily.

If you're unfamiliar with github, it's just a tool to use with Git version control.  once you setup a github 
account and git, you'll have access to a new command line tool called git bash.  just run git bash in 
the directory you want to keep everything in, then run 'git clone https://github.com/twergin/rugby' and 
it will download everything you need.


6/27/14 
-----
<i>Set up the project folder with some build tools.  Reworked the code I had for the homepage.  Looks the same as it did last time you saw it, but underneath it's quite a bit different.  should be fully responsive but I haven't tested extensviely yet.</i>

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

<b>Css</b>

-  The three stylesheets you'll come across are style.css, normalize.css, and reset.css. style is your 
main css doc, normalize smoothes out some browser compatibility issues, and reset just changes some 
annoying default stuff, like margins before and after text.  you'll never need to edit normalize or 
reset.

-  I've only used class (.) selectors, as opposed to id (#) selectors.  The reason for this is for easier code reuse and modularity.  Id selectors are unique, and can only be used once per document.  classes work well because you can apply common styles to any number of elements quickly and without repeating yourself.  Less code, less opportunties for errors.

<b>JavaScript</b>

-  there will be more to the main.js file later, but for now it's just animating the slide in/out of 
the navigation drawer on smaller screens



