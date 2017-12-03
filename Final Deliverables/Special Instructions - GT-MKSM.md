Team GT-MKSM Deliverable 5 Special Instructions
===========

1. Launch the application via the docker-compose.yml file in the root directory (ie. use "docker-compose up" from the root directory)
2. Once the image has loaded (~60 seconds) navigate to [http://localhost:3000](http://localhost:3000) or [https://fhirtesting.hdap.gatech.edu/SocialDeterminantHealth](https://fhirtesting.hdap.gatech.edu/SocialDeterminantHealth) - Note: If you see a "Page Not Found" error, click the "MKSM" button in the top left to load the application
3. You have now launched our team's application. 
	1. To identify and assist patients who may have trouble completing referrals due to the transportation social determinant of health, enter the patient's information.
		1. An exmaple patient who does not require assistance: 71c4dc82-65e2-453b-ab53-581a7dd6c98e
		2. An example patient who may require assistance: aae6d4ab-c671-486a-9aa4-ba7ce93e804e
	2. This demo includes an alert window that displays the score associated with the selected patient's zip code. If the score is <=1.1, then the social determinant of health question is asked. If the score is >1.1 then the application does nothing.
	3. If a social determinant of health question is asked, then the patient in question lives in an area with low access to transportation. Answer "Yes" to this question to be presented with external referrals to agencies that can assist patients who are subject to social determinants of health.
	4. Click the link to visit the external referral site.  