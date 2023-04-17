# Cook at home 

Welcome to my project! This is Single Page Application, based on ReactJS and Node.js. 
I started this project with the main motivation to develop and deepen my knowledge not just in the ReactJS framework, but CSS and HTML as well.

The project was created through the course [ReactJS](https://softuni.bg/trainings/3973/reactjs-february-2023) at the [Software University](https://softuni.bg/) and it is intetended to be defended as part of succesfully pass of the course. 

## Table of contents
* [Overview and Structure](#general-info)
* [Technologies](#technologies)
* [How to start the project](#setup) 
* [Features](#features)
* [Server configuration and end points](#server)
* [Project status](#status)

## General info

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

This service uses authentication and resources are accessible after user provide credentials.

Note that changes to the data will not be persisted! All operations happen in memory and will be wiped when the service is restarted. This service dynamically loads collections from the ./data/ folder, located with the server. For testing purposes a data is stored in the server, which will be loaded and rendered via requests, when the App starts. 

* [Authentication](#authentication)
* [Recipes](#recipes)
* [Products](#technologies)
* [Favorites](#technologies)
* [Cloudinary API](#technologies)

### Authentication

This service supports authentication - reading resources is public, but creating, updating and deleting can only be performed by authorized users. Additionally, only the original creator of a resource can edit or delete it.

To make an authorized request, add the following header, where {token} is the access token, returned by the service upon successful login or registration:

X-Authorization: {token}

CRUD Operations

Send requests to /data/:collection with appropriate method and headers. All operations, except for Read, require an authorization header to be present on the request.

The service is initialized with three users, which can be used for immediate testing:

    peter@abv.bg : 123456
    george@abv.bg : 123456
    admin@abv.bg : admin

#### Register

Create a new user by sending a POST request to */users/register* with properties email and password. You can add any other property that you need, like username, avatar, etc. The service automatically creates a session and returns an authorization token, that can be used for requests.

POST Request body :
```
{
"fullname":"test_user",
"username":"test_username",
"email":"test_user@abv.bg",
"password":"12345",
"confirm-password":"12345"
}
```
Server respond :

```
{"full-name":"test_user",
"username":"test",
"email":"test@abv.bg",
"password":"11111",
"confirm-password":"11111",
"_createdOn":1681643186644,
"_id":"94805dbe-9531-47e8-a326-6f611638729d",
"accessToken":"26258369244fa2d83ad55df6634746fe800752156bbab95ebe11a5890273eab5"}

```

#### Login

Login by sending a POST request with email and password to */users/login*. The service will respond with an object, containing a standard string token, that can be used for requests.

##### POST Request body :

```
{"email":"peter@abv.bg","password":"123456"}
```

#### Server respond :

```
{"email":"peter@abv.bg",
"imageUrl":"https://res.cloudinary.com/yavorhr/image/upload/v1678541995/Cook%20at%20home/Users/user_4_wruxoc.jpg",
"full-name":"Peter Georgiev Ivanov",
"_id":"35c62d76-8152-4626-8712-eeb96381bea8",
"accessToken":"a793d0e1ac3c939f16a01218c2b57164db3283eb50722692aad633117a3d259e"}
```

#### Logout

Send an authorized GET request to */users/logout*. The service returns an empty response - if you attempt to parse it as JSON, you will receive an error! You can check for this type of response by looking at the status (204 instead of 200) and the content-type header (will not be present).

#### Get User Details

Send an authorized GET request to /users/me. The service will return the record of the user, associated with the passed-in session token.




## License

[MIT](https://choosealicense.com/licenses/mit/)
