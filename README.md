# Hosting a Full-Stack Application

- [Udagram](#udagram)
  - [Description](#description)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
  - [Testing](#testing)  
  - [Built With](#built-with)
  - [Documentation](#documentation)


---


# Udagram
[Access the hosted website](http://udacityprojectapppppp.s3-website-us-east-1.amazonaws.com/)


# description

This application is provided from udacity as an alternative starter project. The udagram application is a fairly simple application that includes all the major components of a Full-Stack web application.

# Getting Started

1. clone the repo.
1. install all dependencies of the front and back end `npm install`.
1. start the frontend ` npm run frontend:start`.
1. set up a .env file in the backend `cd udagram-api && touch .env`.
1. start the backend    `npm run api:start`.


## Installation

Provision the necessary AWS services needed for running the application:

1. In AWS, provision a publicly available RDS database running Postgres.
1. In AWS, provision a s3 bucket for hosting the uploaded files.
1. Export the ENV variables needed or use a package like [dotnev](https://www.npmjs.com/package/dotenv)/.
1. From the root of the repo, navigate udagram-api folder `cd starter/udagram-api` to install the node_modules `npm install`. After installation is done start the api in dev mode with `npm run dev`.
1. Without closing the terminal in step 1, navigate to the udagram-frontend `cd starter/udagram-frontend` to intall the node_modules `npm install`. After installation is done start the api in dev mode with `npm run start`.

## Testing

This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.

1. `cd starter/udagram-frontend`
1. `npm run test`
1. `npm run e2e`

There are no Unit test on the back-end

### Unit Tests:

Unit tests are using the Jasmine Framework.

### End to End Tests:

The e2e tests are using Protractor and Jasmine.

## Built With

- [Angular](https://angular.io/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework
## Documentation
- [App dependencies and Documentation detailes](./docs/Doc.md)
- [Screenshots of the AWS configurations and the CircleCI](./docs/screenshots/)
- [Architecture Diagrams of the AWS and the Pipeline](./docs/Diagrams/)

