const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLScalarType} = graphql;

const StudentsType = new GraphQLObjectType({
  name: "students",
  type: "Query",
  fields: {
    number: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    phonenumber: { type: GraphQLString },
    recorded_datetime: { type: new GraphQLScalarType({
      name: 'Date',
      parseValue(value) {
        return new Date(value);
      },
      serialize(value) {
        return value.toISOString();
      },
    }) }
  }
});

exports.StudentsType = StudentsType;