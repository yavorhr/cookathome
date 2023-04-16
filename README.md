# Cook at home 

Welcome to my project! This is Single Page Application, based on ReactJS and Node.js. 
I started this project with the main motivation to develop and deepen my knowledge not just in the ReactJS framework, but CSS and HTML as well.

The project was created through the course [ReactJS](https://softuni.bg/trainings/3973/reactjs-february-2023) at the [SoftUni](https://softuni.bg/) and it is intetended to be defended as part of succesfully pass of the course. 

## Table of contents
* [General info](#general-info)
* [Overview of technologies](#technologies)
* [How to start the project](#setup) 
* [Features](#features)
* [Server configuration and end points](#server)
* [Project status](#status)

## General info

![structure](https://user-images.githubusercontent.com/76119513/232288390-d0a49a50-87cf-4bd4-b517-0dd901d0bfde.JPG)

The project consists of the main folders - Client and Server.
 * Client folder - this is where the ReactJS framework is. The folder is divided to sub-folders such as :
   - Components - all components are stored here.
   - context - context API is used to pass data through the component tree without passing props manually. In this project I have created two contexts for keeping data in state of the app - AuthContext and RecipeContenxt.
   - hooks - all custom hooks are stored here.
   - service - generally util functions for making Fetch API calls.
   - App.js - this is the start point of the application. It imports and renders all components, which are URL mapped with Route react components.

 * Server folder - This is REST service for the project, provided by SoftUni and is not changed in any way.  
   - This service uses authentication and resources are accessible after user provide credentials.
   - Note that changes to the data will not be persisted! All operations happen in memory and will be wiped when the service is restarted. This service dynamically loads collections from the ./data/ folder, located with the server. For testing purposes a data is stored in the server, which will be loaded and rendered via requests, when the App starts. 

## Technologies

Project is created with:
* ReactJS : v 18.2.0",
* Node.js backend server, which is provided by [SoftUni](https://softuni.bg/)
* HTML 5 and CSS
	
## Setup
To run this project, you need first :

1. Install the missing npm packages on your machine :
```
$ cd client
$ npm install

```

2. Run the server on your localhost address :
```
$ cd server
$ node serer.js
```

3. Run the ReactJS project in separate powershell :
```
$ cd client
$ npm start

```
## Features


## Server configuration and end points

* [Authentication](#authentication)
* [Recipes](#recipes)
* [Products](#technologies)
* [Favorites](#technologies)
* [Cloudinary API](#technologies)


## Authentication

This is REST service, created for educational purposes. A compiled bundle should be available with every exercise's resources. To execute it, run the included start.bat file, or manually open a command prompt and run node server.js.

Note: You do NOT need to download anything from this repository - this is intended for reference only.
Services

Note that changes to the data will not be persisted! All operations happen in memory and will be wiped when the service is restarted.
JSON Store
Read the detailed documentation for this service
Configuration


CRUD Operations

All requests are sent to /jsonstore/:resource. Resources can be nested and have any shape. Individual properties can be accessed by appending /:propName to the endpoint as deep as you require. Supported requests are GET, POST, PUT, PATCH, DELETE
Authentication

The service is initialized with three users, which can be used for immediate testing:

    peter@abv.bg : 123456
    george@abv.bg : 123456
    admin@abv.bg : admin

Register

Create a new user by sending a POST request to /users/register with properties email and password. You can add any other property that you need, like username, avatar, etc. The service automatically creates a session and returns an authorization token, that can be used for requests.
Login

Login by sending a POST request with email and password to /users/login. The service will respond with an object, containing a standard string token, that can be used for requests.
Logout

Send an authorized GET request to /users/logout. The service returns an empty response - if you attempt to parse it as JSON, you will receive an error! You can check for this type of response by looking at the status (204 instead of 200) and the content-type header (will not be present).
Get User Details

Send an authorized GET request to /users/me. The service will return the record of the user, associated with the passed-in session token.
Authorized Requests

To make an authorized request, add the following header, where {token} is the access token, returned by the service upon successful login or registration:

X-Authorization: {token}

Admin Override

Any request which includes the X-Admin header will be granted full access to any resource inside the Collections service. The only exception is if the request has an invalid session token, which still throws a 403 with the appropriate message.
Collections
Read the detailed documentation for this service

This service uses authentication - reading resources is public, but creating, updating and deleting can only be performed by authorized users. Additionally, only the original creator of a resource can edit or delete it.
CRUD Operations

Send requests to /data/:collection with appropriate method and headers. All operations, except for Read, require an authorization header to be present on the request (see the Authentication section on how to obtain a valid token).


## License

[MIT](https://choosealicense.com/licenses/mit/)
