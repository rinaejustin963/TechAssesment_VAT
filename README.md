# TechAssesment_VAT
A simple todo api problem to be used as a technical test. 

## Description
A REST API backend service that exposes a few services that can be used as a TODO application.

## How to build and run the code locally
1. Firstly, we navigate to the project's directory.
2. Ensure that you have a latest(or recent version) of nodejs and Postman installed in your machine.
3. Then We can use postman to test our API, using the endpoints provided.

## Install(To set up packages):

    npm init -y
    
    npm i express
    
    npm i joi
    
    npm i jest --save
    
    npm i supertest --save
    
    

## Run the app

    npm start

## Run the tests
npm test
   

# REST API

REST API backend service is described below.

## Get list of Todos

### Request

`GET /api/todos`

    http://localhost:8080/api/todos/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 05 May 2022 20:38:02 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 230

    [{"id":1,"name":"Add backend functionality to the website","completed":false},
    {"id":2,"name":"Pay rent","completed":false},
    {"id":3,"name":"Take my Dog for a walk","completed":false},
    {"id":4,"name":"Make lasgna","completed":false}]

## Create a new Todo

### Request

`POST /api/todos`

    http://localhost:8080/api/todos

### Response

    HTTP/1.1 201 Created
    Date: Thu, 05 May 2022 20:35:14 GMT
    Status: 201 Created
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Location: /api/todos
    Content-Length: 294

    {"id": 5,"name": "Take my Daughter for a walk","completed": false}

## Get a specific Todo

### Request

`GET /api/todos/id`

    http://localhost:8080/api/todos/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 05 May 2022 20:45:24 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 76

    {"id": 1,"name": "Add backend functionality to the website","completed": false}

## Get a non-existent Todo

### Request

`GET /api/todos/id`

    http://localhost:8080/api/todos/88

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 05 May 2022 20:36:23 GMT
    Status: 404 Not Found
    Connection: keep-alive
    Content-Type: text/plain; charset=utf-8
    Content-Length: 9

    {"Not found"}

## Create another new Todo

### Request

`POST /api/todos/`

    http://localhost:8080/api/todos

### Response

    HTTP/1.1 201 OK
    Date: Thu, 05 May 2022 20:48:14 GMT
    Status: 201 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Location: /api/todos/
    Content-Length: 344

    {"id": 6,"name": "Buy Groceries","completed": false}



## Mark completed Todo

### Request

`PUT /api/markCompletedtodos/`

    http://localhost:8080/api/markCompletedtodos/`

### Response

    HTTP/1.1 200 OK
    Date: Thu, 05 May 2022 20:50:24 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 75

    {"id": 1,"name": "Add backend functionality to the website","completed": true}

## Get completed Todos

### Request

`GET /api/todosCompleted/`

    http://localhost:8080/api/todosCompleted/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 05 May 2022 21:09:41 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 77

    [{"id": 1,"name": "Add backend functionality to the website","completed": true}]

## Update a Todo

### Request

`PUT /api/todos/`

    http://localhost:8080/api/todos/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 05 May 2022 21:25:08 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json; charset=utf-8
    Content-Length: 52

    {"id": 1,"name": "Buy Groceriesiiii","completed": true}



## Delete a Todo

### Request

`DELETE /api/todos/:id`

    http://localhost:8080/api/todos/1/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 05 May 2022 21:52:53 GMT
    Status: 200 OK
    Connection: keep-alive


## Delete a non existing Todo

### Request

`DELETE /api/todos/id`

    http://localhost:8080/api/todos/88/

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 05 May 2022 21:54:34 GMT
    Status: 404 Not Found
    Connection: keep-alive
    Content-Type: text/plain; charset=utf-8
    Content-Length: 9

    Not Found
