# graphql-postgres-server
### Description
- Establish connection between database (PostgreSQL) and backend API (Express, GraphQL)
- Feature CRUD operation

## Getting started
1. Navigate to the directory (graphql-postgres-server) on cmd
2. Install relevant modules
```
npm i
```
3. Open pgAdmin and run the students_table.sql (/graphql-postgres-server/db/) in QueryTool
4. Create an .env file in the /graphql-postgres-server folder. Fill in the settings based on your set-up
![env](/docs-image/env.PNG)
5. For testing
```
node test.js
```
6. Start the server
```
node app.js
```
## Locate server port to change
### Line 23 in app.js (GraphQL server)
![line23](/docs-image/line23.png)

## How it works
![How it works](/docs-image/graphql-postgres.gif)

## CRUD operation
### Adding student details
```
mutation {
  addStudent(firstname : "test", lastname : "test", phonenumber : "test") {
    number
    firstname
    lastname
    phonenumber
    recorded_datetime
  }
}
```
### Read student details
```
{
  student(number:1 ) {
    number
    firstname
    lastname
    phonenumber
    recorded_datetime
  }
}
```
### Updating student details
```
mutation {
  updateStudent(number : 1 , firstname : "test", lastname : "test", phonenumber : "test") {
    number
    firstname
    lastname
    phonenumber
    recorded_datetime
  }
}
```
### Delete student details
```
mutation {
  deleteStudent(number : 1) {number}
}
```


