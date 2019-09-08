This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tasker

Tasker is a simple task managing web app that allows users to keep a track of their projects

## Installation // Usage 

*Clone this directory onto your device and run the following command to install the required packages.
```
npm install
```
*This will install the node modules required for the client. 

*In order to set up the node_modeules for api follow the commands below.
```
cd Api
npm install
```
*And finally we need to upload the Main_table.sql into our sql database. In order to do that open your sql server and upload the Main_table.sql file with the database name Test_Assignment. (Note once the table is upload you may delete all the current data in the table)

*After following this step the application is ready to be launched. 

*In the Api folder run the following code to start running the api bassed on express
```
nodemon
```
*And in the tasker folder run the application by 
```
npm Start
```
## Features
* Tasker allows users to list their tasks in hierachy one depending on the other as shown below. 
