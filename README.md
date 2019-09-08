This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tasker

Tasker is a simple task managing web app that allows users to keep a track of their projects

## Installation // Usage 

* Clone this directory onto your device and run the following command to install the required packages.
```
npm install
```
* This will install the node modules required for the client. 

* In order to set up the node_modeules for api follow the commands below.
```
cd Api
npm install
```
* And finally we need to upload the Main_table.sql into our sql database. In order to do that open your sql server and upload the Main_table.sql file with the database name Test_Assignment. (Note once the table is upload you may delete all the current data in the table)

* After following this step the application is ready to be launched. 

* In the Api folder run the following code to start running the api bassed on express
```
nodemon
```
* And in the tasker folder run the application by 
```
npm Start
```
## Features
* The application allows users to list their tasks in an hierachy, one depending on the other as shown below. For each parent task there is a graph thats shows the number of tasks completed, tasks done as well the total number of tasks.
![Screenshot from 2019-09-08 17-04-01](https://user-images.githubusercontent.com/35691714/64486228-caa2c580-d25c-11e9-8542-36ba6e559427.png)
* Allowing users to create tasks and assinging them to a parent Task. A search field allows users to search by task name, task description and task status.
![Screenshot from 2019-09-08 17-02-42](https://user-images.githubusercontent.com/35691714/64486170-3afd1700-d25c-11e9-88ac-d7ba5f84c44d.png)
* An Edit box which allows users to edit the task name, description as well as parentID (Editing parentID for a parent task is disabled as some of the data under the parent task will got lost).
![Screenshot from 2019-09-08 17-03-12](https://user-images.githubusercontent.com/35691714/64486203-a1823500-d25c-11e9-852b-ced38cddd1dc.png)

* The application comes with a number of other features such as pagination, progress bar to show the number of In Progress tasks, checkbox update the status of the tasks. 
