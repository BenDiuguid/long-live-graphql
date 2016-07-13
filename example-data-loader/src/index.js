import express from 'express';
import graphQLHTTP from 'express-graphql';
import DataLoader from 'dataloader';
import axios from 'axios';

import schema from './schema';

const BASE_URL = 'http://localhost:1337';

function getPersonByURL(relativeURL) {
  console.log(`GET ${BASE_URL}${relativeURL}`)

  return axios.get(`${BASE_URL}${relativeURL}`)
       .then(res => res.data[0]);
}

const app = express();

app.use(graphQLHTTP( req => {
  const personLoader = new DataLoader(
    keys => Promise.all(keys.map(getPersonByURL))
  )
  const loaders = {
    person: personLoader
  }
  return {
    schema,
    context: { loaders },
    graphiql: true
  };
}))

app.listen(5000);
