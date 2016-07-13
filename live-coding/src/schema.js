import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';
import axios from 'axios';

const BASE_URL = 'http://localhost:1337';

function getPersonByURL(relativeURL) {
  console.log(`GET ${BASE_URL}${relativeURL}`);

  return axios.get(`${BASE_URL}${relativeURL}`)
              .then(res => res.data[0] );
}

const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: 'This is a Person',

  fields: () => ({
    firstName: {
      type: GraphQLString,
      resolve: (person) => person.first_name
    },
    lastName: {
      type: GraphQLString,
      resolve: (person) => person.last_name
    },
    email: {
      type: GraphQLString
    },
    id: {
      type: GraphQLString
    },
    friends: {
      type: new GraphQLList(PersonType),
      resolve: (person) =>
        person.friends.map(getPersonByURL)
    }
  })
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',

  fields: () => ({
    person: {
      type: PersonType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (root, args) =>
        getPersonByURL(`/api/persons/${args.id}`)
    }
  })
});

export default new GraphQLSchema({
  query: QueryType
});
