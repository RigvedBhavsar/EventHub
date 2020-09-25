//////////////////////////////////////////////////////////////////
Install the following dependencies...


npm init --yes
npm insatll express --save
npm insatll mongodb --save
npm install mongoose --save
npm install body-parser --save 
npm intall cors --save
npm install nodemon --save

//////////////////////////////////////////////////////////////////
replace the link of your mongoDB database in /routes/api.js

const db="LINK_OF_YOUR_MONGO_DATABSE";

//////////////////////////////////////////////////////////////////
/models/user.js

This file contains the schema of your document which use for
the store the user registration details.

you can add your own schema according to your need.

//////////////////////////////////////////////////////////////////
/routes/api.js

This file contains the routes(function) ,
whenever the user enters any routes with ant request the following 
file direct that request to its appropriate call.
Ex...
	http://localhost:3000/api/login


//////////////////////////////////////////////////////////////////