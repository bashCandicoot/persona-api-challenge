# Persona API

Requires Postgres and Node.js  

Setup:

```cd server```  

```npm install -g sequelize-cli``` 

```npm install``` 

```npm run setup``` will create a db called ```persona_database```  

```npm run setup_test``` will create a db called ```persona_database_test```  

Both db's can be accessed via the postgres user ```username`` with no password  
This user can be changed to your own postgres user by editing ```server/config/config.json```

```npm run setup```

```npm start```


Run:

Head to the following urls in a browser/Postman/Insomnia

```GET    http://localhost:8081/search{username}```  
```GET    http://localhost:8081/people```  
```DELETE http://localhost:8081/people/{username}```  

Test:

```npm run setup_test```  
```npm test```  

## Must Haves

The Persona API is a fake RESTful API that delivers made up data on a few endpoints. The data sits within a zip file and needs to be decompressed only on deployment not when it sits in this repository. So you have to find a way to do that in an elegant manner.

- Develop the server and endpoints mentioned below with a framework of your preference
- Think carefully about data storage and scalability. Determine any limitations of your server
- Write a few unit tests with good code coverage

The REST API uses the data provided and has the following endpoints:

- GET /search/{username} Searches the data for the specific username
- GET /people Returns all people with pagination
- DELETE /people/{username} Delete a person

We would like to see good practices regarding the REST API, project structure, code documentation and code organisation. Your server will need to be able to ingest new data and we are expecting to see good use of design patterns where needed and good security practices. 


## Nice To Haves

- Nice to have would be to containerise your server so that it can deployed easily.
- A front-end that will allow users to search for a person and return back their information. 


## Go The Extra Mile

Come up with some ideas to visualise the fake profile data on a Vuejs front-end

