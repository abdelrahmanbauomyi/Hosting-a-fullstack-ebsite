# Description
A more in depth documentation into the application.

## Dependencies

```
- Node v14.15.1 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 6.14.8 (LTS) or more recent, Yarn can work but was not tested for this project

- AWS CLI v2, v1 can work but was not tested for this project

- A RDS database running Postgres.

- A S3 bucket for hosting uploaded pictures and the frontend.

- Elsatic beanstalk for hosting the API.

```

### AWS Cloud Setup

- RDS - Database Host: database-2.c8nopmkqawyj.us-east-1.rds.amazonaws.com
- RDS - Database Port: 5432
- RDS - Database Name: postgres

- S3 Endpoint - Frontend: http://udacityprojectapppppp.s3-website-us-east-1.amazonaws.com/

- Elastic Beanstalk URL - Backend:http://udacityproject.eba-2ap8nkup.us-east-1.elasticbeanstalk.com/api/v0

## Environment Variables

Setup the following variables in the .env file or in the cloud environments:
```
- PORT                = 8080
- port                = 5432
- POSTGRES_HOST       = <Database_IP_Address>
- POSTGRES_PORT       = <Database_Port>
- POSTGRES_DB         = <Database_Name>
- POSTGRES_USERNAME   = <Database_Username>
- POSTGRES_PASSWORD   = <Database_Password>
- URL                 = <Url>
- JWT_SECRET          = <Any_PassPhrase>
- AWS_REGION          = <us-east-1>
- AWS_PROFILE         = <Profile>
- AWS_BUCKET          = <Bucket_Name>
```


## Pipeline

From the root of the project:
- `npm run frontend:install`    - To install frontend dependencies.
- `npm run frontend:build`      - To build the Angular/Frontend.
- `npm run backend:install`     - To install backend dependencies.
- `npm run backend:build`       - To transpile the Typescript/Backend.
- `npm run backend:deploy`      - To deploy the project frontend and api 

## CircleCi

The order of the run jobs:
- Setting Env Variables.
- Install NodeJS.
- Checkout Code & Cloning the Repo.
- Install AWS Elastic Beanstalk CLI.
- Install AWS CLI v2.
- Configure AWS AccessKeyID.
- Configure AWS Region.
- Frontend:
  - Install dependencies.
  - Build app.
  - Deploy the site to AWS S3.
- Backend:
  - Install dependencies.
  - Build the app .
  - Deploy the app to AWS Elastic Beanstalk.
