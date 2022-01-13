const { db } = require("../pgAdaptor");
const { GraphQLObjectType, GraphQLID } = require("graphql");
const { StudentsType } = require("./types");
const pool = require("../db/config");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
    student: {
      type: StudentsType,
      args: { number: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM students WHERE number=$1`;
        const values = [args.number];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    students: {
      type: StudentsType,
      async resolve() {
        const data = await pool.query("SELECT * FROM students ORDER BY number asc");
        return data;
      }
    }
  }
});

exports.query = RootQuery;