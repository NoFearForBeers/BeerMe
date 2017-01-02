
Team No feer for beer
=========

----------

##BeerMe##


###Team members usernames:###
-   Natali_Adamova
-   marianamn
-   P.Boyanov

###Project desctiption:###
BeerMe is an application for beer addicted people and homemade beer comunity. 

BeerMe allows users to:

- share homemade beer recipes
- to participate in beer events
- to reed most recent news for BG beers industry and
- to have Beer WoW experience.

###Public (accessible without authentication) web pages:###
- **/home** - shows image carousel and top 3 recent beer news
- **/beer-history** - shows BG beer industry information page
- **/beer-ingredients** - lists beer ingredieant with basic information
- **/beer-tasting** - shows basic information for beer tashing
- **/beer-brands** - lists all BG beer brands
- **/beer-types** - lists beer types
- **/top-beers** - lista top BG beers
- **/top-beers/:id** - top BG beer detailes
- **/news** - shows all beer news. News content is limmited to 500 chars
- **/news/:id** - shows detailed news page
- **/register** - Registration form
- **/login** - LogIn form

###Private (accessible without authentication)###
- not Admin pages:
	- **/recipes** - lista all added homemade beer recipes
	- **/recipes/:id** - recipe detailed page
	- **/add-recipev** - form for adding recipe
	- **/events** - lists all upcomming beer events
	- **/events/:id** - shows event detailes
	- **/participations/:id** - when participation button is clicked, event participation form is shown
- Admin pages:
	- **/unapproved-recipes** - lists of unnaproved recipes
	- **/unapproved-recipe/:id** - unnaproved recipe detailes 
	- **/participations** - lists all users with their event participations

###Pipes:###

- sortNewsByDate - sorts news by post date - used in News page
- takeRecentNews - takes top 3 of recent news - used in Home page
- cutText - takes part of a text string - used in News page


###Directives:###
- background directive - set background image - used in Home page
- uppercase directive - set text to uppercase - used in multiple places
- myColor directive - set text color - used in Admin pages


###Animation:###
- Animation is used when Regect button is clicked in Approved recipe section


###Additional functionality:###

- Used partial components
- TypeScript language used
- Object-oriented design
- Responsive UI design
- Share page on Facebook
- Git source code link
- Watch project youTube video link

###Backend service:###

Node.js, MongoDb

