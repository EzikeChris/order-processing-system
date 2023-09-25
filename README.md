## Description

Order processing system in NestJS that integrates with Objection.js and
Knex to handle and manage kitchen orders based on the provided data structure.



## Technologies

NEST JS - Framework
ObjectionJS - ORM
Knex - SQL



## Setup:
● Initialized a new NestJS project.
● Integrated Objection.js and set up Knex for database management.
● Used PostgreSQL




## Prerequisites

To use the application, you need to have PostgreSQL available locally. You then create a database for the app and include the connection link in the .env file. Just as shown in the .env.example


## Running The App
$ yarn run migrate && yarn run seed
$ yarn run start

API is accessible at `http://localhost:3000/v1`

# watch mode
$ yarn run start:dev
