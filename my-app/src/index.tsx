import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:9022/graphql'
});


ReactDOM.render(
  <ApolloProvider client={client}>

    <App/>
  </ApolloProvider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
