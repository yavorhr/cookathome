# Cook at home 

Welcome to my project! This is Single Page Application, based on ReactJS and Node.js. 
I started this project with the main motivation to develop and deepen my knowledge not just in the ReactJS framework, but CSS and HTML as well.

The project was created through the course [ReactJS](https://softuni.bg/trainings/3973/reactjs-february-2023) at the [Software University](https://softuni.bg/) and it is intetended to be defended as part of succesfully pass of the course. 

## Contents
 - [Introduction](#introduction)
 - [Project structure](#project-structure)
- [Technologies](#technologies)
 - [Setup](#setup) 
 - [Features](#features)
 - [Server configuration and end points](#server)
   - [Authentication](#authentication)
   - [Collections](#collections)

 [Status](#status)

## Introduction

This project is Single Page Application, which represents a cooking interactive website with different features. For the client-side is used ReactJS. For the server-side is used remote REST service, built with Node.js. In the project I'm striving to use specific programming concepts to the React library such as :

1. Stateless and state full components
2. Controlled forms and form validations
3. Component Styling
4. React hooks and custom hooks
5. Context API
6. Use of Function components with props & state
7. // more ....

Depending on that if user is authenticated to the server or not, the app has public and private parts. 

Public parts includes the following resources, which can be accessed without authentication :
- Catalog, Home page, Login,Register pages, Recipe details

Private part includes :
-  Favorites, Grocery List, Profile page, Create recipe, Edit & Delete recipe. To be able to edit & delete, the user should be owner of the resource.

## Project structure

The project consists of the two main folders - Client and Server.
 * Client folder - this is where the ReactJS framework is. The folder is divided to sub-folders such as :
   - Components - all components are stored here.
   - context - context API is used to pass data through the component tree without passing props manually. In this project I have created two contexts for keeping data in state of the app - AuthContext and RecipeContenxt.
   - hooks - all custom hooks are stored here.
   - service - generally util functions for making Fetch API calls.
   - App.js - this is the start point of the application. It imports and renders all components, which are URL mapped with Route react components.

 * Server folder - This is REST service for the project, provided by SoftUni and is not changed in any way.  

![structure](https://user-images.githubusercontent.com/76119513/232288390-d0a49a50-87cf-4bd4-b517-0dd901d0bfde.JPG)

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

1. Home page - recipe of the day, latest added recipes etc.
2. Add to favorites
3. Catalog of Recipes - sorting
4. Edit / Delete resource, if user is owner
5. Search
6. Login / Register
7. Add to grocery list
8. Add resources such as profile image & recipe images to Cloudinary 

## Server configuration and end points

Note that changes to the data will not be persisted! All operations happen in memory and will be wiped when the service is restarted. This service dynamically loads collections from the ./data/ folder, located with the server. For testing purposes a data is stored in the server, which will be loaded and rendered via requests, when the App starts. 

* [Authentication](#authentication)
* [Collections](#collections)

### Authentication

This service supports authentication - reading resources is public, but creating, updating and deleting can only be performed by authorized users. Additionally, only the original creator of a resource can edit or delete it.

To make an authorized request, add the following header, where {token} is the access token, returned by the service upon successful login or registration:

X-Authorization: {token}

The service is initialized with three users, which can be used for immediate testing:

    peter@abv.bg : 123456
    george@abv.bg : 123456
    admin@abv.bg : admin

#### Register

Create a new user by sending a POST request to */users/register* with properties email and password. You can add any other property that you need, like username, avatar, etc. The service automatically creates a session and returns an authorization token, that can be used for requests.

Request body :

```
{
"email":"test_user@abv.bg",
"password":"12345",
}
```

Respond body :
```
{"email":"asfdd2@abv.bg",
"password":"123",
"confirm-password":"123",
"_createdOn":1681734566345,
"_id":"00d43401-747f-40ab-b812-52f5bd95f21f",
"accessToken":"7465c15b78813ebb1fb1a5e385868fd74ae9c692d4104a7bd2d2e1446572a78c"}
```

#### Login

Login by sending a POST request with email and password to */users/login*. The service will respond with an object, containing a standard string token, that can be used for requests.

```
{
"email":"test_user@abv.bg",
"password":"12345",
}
```

```
{
"email":"peter@abv.bg",
"_id":"35c62d76-8152-4626-8712-eeb96381bea8",
"accessToken":"a793d0e1ac3c939f16a01218c2b57164db3283eb50722692aad633117a3d259e"
}
```

#### Logout

Send an authorized GET request to */users/logout*. The service returns an empty response - if you attempt to parse it as JSON, you will receive an error! You can check for this type of response by looking at the status (204 instead of 200) and the content-type header (will not be present).

### Collections

CRUD Operations

Send requests to /data/:collection with appropriate method and headers. All operations, except for Read, require an authorization header to be present on the request.

Read

An end point is revealed at /data, which grants access to information, stored on the service. GET requests to the service will return the following responses:

    GET /data/:collection - array of all entries in target collection; will return 404 if collection does not exist
    GET /data/:collection/:id - entry matching the given ID; will return 404 if collection or entry do not exist with appropriate message attached to response

Create

This request requires authorization and content-type headers.
Send POST request to /data/:collection to create new entry. ID will be generated automatically and will be included in the returned object. If the collection does not exist, it will be created.

Update
This request requires authorization and content-type headers (see above). Only the owner of the resource can edit it.

Send PUT request to /data/:collection/:id to update a single entry. Note that the existing entry will be replaced!
Partial Update

This request requires authorization and content-type headers (see above). Only the owner of the resource can edit it.

Delete

This request requires authorization headers. Only the owner of the resource can delete it.

Send DELETE request to /data/:collection/:id to delete a single entry.


## Status

The project is still in development phase. Future implementations include :

1. Add own backend server with Spring MVC.
2. Add options to delete/edit resources, which are stored in Cloud.
3. Add comments functionality.
