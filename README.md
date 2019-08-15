# Social Determinants of Health Data

## About

The goal of this application is to improve health outcomes by identifying factors affecting health equity and bridging the gaps by mapping them to available resources.

This application will assist the healthcare provider in identifying social determinants of health that may potentially affect the patient's ability to receive quality care. The user will be presented with relevant items from the PRAPARE (Protocol for Assessing Patients' Assets, Risks, and Experience) assessment tool questionnaire. The result of the questionnaire will determine if the patient is subject to social determinants of health (SDH). This application will provide links to external resources available to assist the patient.

In this current version of the application, the risk assessment is limited to the SDH transportation.

See our project presentation below:
[![Presentation](http://img.youtube.com/vi/HfXpf0RJ97M/0.jpg)](http://www.youtube.com/watch?v=HfXpf0RJ97M)

[Presentation Slides](/Final%20Deliverables/Final%20Project%20Presentation%20-%20Team%20GT-MKSM.pdf)

## Launching and using the application

 1. To begin, launch your preferred web browser.
 2. Navigate your web browser to [http://localhost:3000](http://localhost:3000). You have now launched the application.
 3. To begin, first enter the patient information (In the current version, enter the patient ID) and click Submit.
 4. The application will assess if the patient is at risk for various social determinants of health. If the patient is potentially found to be at risk, you will be provided with further information indicating each social determinant of health. (In the current version, the assessment is limited to transportation).
 5. A questionnaire pulled from PRAPARE's assessment tool is provided for each social determinant of health. Answer each question.
 6. If the result of the questionnaire indicates the patient is in need of assistance for that particular social determinant of health, the application will refer you to resources and agencies that is available for the patient. (In the current version, you will be provided with a link to [Aunt Bertha](https://www.auntbertha.com/), a website that assists in finding specific resources and programs available in a region.)
 
## Setup Instructions

1. Launch the application via the docker-compose.yml file in the root directory (ie. use "docker-compose up" from the root directory)
2. Once the image has loaded (~60 seconds) navigate to [http://localhost:3000](http://localhost:3000) - Note: If you see a "Page Not Found" error, click the "MKSM" button in the top left to load the application
3. You have now launched our team's application. 
	1. To identify and assist patients who may have trouble completing referrals due to the transportation social determinant of health, enter the patient's information.
		1. An exmaple patient who does not require assistance: 71c4dc82-65e2-453b-ab53-581a7dd6c98e
		2. An example patient who may require assistance: aae6d4ab-c671-486a-9aa4-ba7ce93e804e
	2. This demo includes an alert window that displays the score associated with the selected patient's zip code. If the score is <=1.1, then the social determinant of health question is asked. If the score is >1.1 then the application does nothing.
	3. If a social determinant of health question is asked, then the patient in question lives in an area with low access to transportation. Answer "Yes" to this question to be presented with external referrals to agencies that can assist patients who are subject to social determinants of health.
	4. Click the link to visit the external referral site.  
	
## Directory of files

1. config - default meanJS config files
2. modules - contains "chunks" of functionality for the app.
	1.  articles - sample CRUD module interacting with a db. unused.
	2.  chat - live chat functionality. unused.
	3.  core - the actual application
		1.  client - client-facing pages.
			1.  app - main angularjs initialization code. unchanged.
			2.  config - maps urls to views, controls the menu. unchanged outside of disabling some unused menu options
			3.  controllers - angularjs codebehind javascript pages for the app
				1.  home.client.controller.js - contains the main javascript logic for the app.
			1.  css - styling for the app. unmodified.
			2.  directives - some helper functions. unmodified.
			3.  img - image resources for the app
			4.  services - some angular goop that controls menus, error handling, etc. unmodified.
			5.  views - actual html pages for the app. also contains 404 page, etc.
				1.  header.client.view.html - partial html for the header bar. contains menus that we aren't using.
				2.  home.client.view.html - the html for the home page. contains the view logic for the app.
		3.  server - server side functionality, e.g. web services, db access
			1.  controllers - provide server side functionality
				1.  core.server.controller.js - contains most of the server-side functionality for the app. particularly, db access is here.
			2.  routes - maps urls to nodejs functions
				1.  core.server.routes.js - maps url GET requests to functions in core.server.controller.js
			2.  views - some server side error pages
	3.  users - contains currently unused logic for authentication. could be turned back on fairly easily.
4.  mongo-seed - stuff for seeding the database with data
	1.  Dockerfile - for docker, tells the db to load the data
	2.  mazips.json - the json data to load into mongodb.
4.  public - staging area that node maps to the actual web directory when hosted.
5.  scripts - miscellaneous, unused scripts. mostly for authentication.
6.  app.json - describes the web application for nodejs (our server solution)
9.  Dockerfile - app build file
10. docker-compose.yml - docker-compose file, entry point to run in docker
11. gulpfile - gulp file, which is our build system. provides realtime reloading, lint, etc.
12. karma.conf.js - test runner config file
13. LICENSE.md - MIT License.
14. manifest.yml - file used by heroku, if you feel inclined to host this there (it was, early on.)
15. MAZips.csv - original raw data file, before it was converted to json
16. package-lock.json, package.json - contains the node packages this app uses
17. Procfile - tells heroku what to do to start up the application (in this case, npm start)
18. protractor.conf.js - integration testing framework config
19. README.md - readme file
20. server.js - start point of the application. not very interesting, just loads /config and calls app.start()
21. test.js - start point for testing the application.  we're not running unit tests at the moment.
