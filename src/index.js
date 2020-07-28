import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App';
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';

import './assets/styles/style.sass';
import './assets/styles/style.css';

import configureStore from './store'
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});
const store = configureStore();

client.query({
  query: gql`
    query {
      user(id: "Atul") {
        id
        name
        email
        webId
        verified
      }
    }
  `,
})
.then(data => console.log(data))
.catch(error => console.error(error));

const renderApp = () =>
  render(
    <ApolloProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProvider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App', renderApp)
}
renderApp();