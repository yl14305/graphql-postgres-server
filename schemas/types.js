const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const StudentsType = new GraphQLObjectType({
  name: "students",
  type: "Query",
  fields: {
    number: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    phonenumber: { type: GraphQLString },
    recorded_datetime: { type: GraphQLString }
  }
});

exports.StudentsType = StudentsType;