Rajwani Family web site version 3. 

This website is about the Rajwani family. Includes personal profiles, vacations and a contact us form. 

This version is more advance than [version 1](https://github.com/RuheeRajwani/FamilySite-1 "version 1.") and [version 2](https://github.com/RuheeRajwani/FamilySite-2 "version 2.")

Changes from version 1:
1. Nodejs for webserver.
2. Ejs for templating.
3. Code size is signifantly reduced as header/footer/menu is moved to partials.
4. Easy to change as header/footer/menu is at one place.

Changes from version 2:
1. Contact us details are stored in Mongodb (database: familySiteDb , collection: contact )
2. Ability to run without mongodb by passing appropiate parameter
3. I used Mongoui to view content of database, it can be installed using

    npm i -g mongoui
  



To run do the following:
1. npm install
2. start Mongodb
3. node server.js

To run without Mongodb do the following:
1. npm install
2. node server.js --db off

