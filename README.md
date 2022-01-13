# graphql-postgres-server
### Description
- Establish connection between database (PostgreSQL) and backend API (Express, GraphQL)
- Feature CRUD operation

## Getting started
1. git clone project
2. Navigate to the directory (graphql-postgres-server) on cmd
3. Install relevant modules
```
npm i
```
4. Open pgAdmin and run the students_table.sql (/graphql-postgres-server/db/) in QueryTool
5. Create an ".env" file in the /graphql-postgres-server folder. Fill in the settings based on your set-up
![env](/docs-image/env.PNG)

6. For testing
```
node test.js
```
7. Start the server
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


