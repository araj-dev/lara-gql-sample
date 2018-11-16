import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {ApolloClient} from 'apollo-boost';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}>

    <App/>
  </ApolloProvider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
