const graphql = require("graphql");
const db = require("../pgAdaptor").db;
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = graphql;
const { StudentsType } = require("./types");
const pool = require("../db/config");
// const { v4: uuidv4 } = require("uuid");


const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  type: "Mutation",
  fields: {
    addStudent: {
      type: StudentsType,
      args: {
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        phonenumber: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        const query = `INSERT INTO students(firstname, lastname, phonenumber, recorded_datetime) VALUES ($1, $2, $3, $4) RETURNING *`;
        const values = [
          args.firstname,
          args.lastname,
          args.phonenumber,
          new Date()
        ];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    updateStudent: {
      type: StudentsType,
      args: {
        number : { type : GraphQLID },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        phonenumber: { type: GraphQLString }
      },
      async resolve(parentValue, args) {
        const student = await pool.query(`SELECT * FROM students WHERE number = '${args.number}'`);
        if (student.rowCount == 0)
        throw new Error(`Student with the number ${args.number} does not exist`);


        const query = `UPDATE students set firstname = $1, lastname = $2, phonenumber = $3, recorded_datetime = $4 where number = $5 RETURNING *`;
        const values = [
          args.firstname,
          args.lastname,
          args.phonenumber,
          new Date(),
          args.number
        ];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    deleteStudent: {
      type: StudentsType,
      args: {
        number : { type : GraphQLID },
      },
      async resolve(parentValue, args) {
        const student = await pool.query(`SELECT * FROM students WHERE number = '${args.number}'`);
        if (student.rowCount == 0)
        throw new Error(`Student with the number ${args.number} does not exist`);

        const query = `DELETE from students where number = $1 RETURNING number`;
        const values = [
          args.number
        ];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.mutation = RootMutation;