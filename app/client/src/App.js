import React from 'react';
import Launches from './components/Launches';
import ApolloClient from 'apollo-boost';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Launch from './components/Launch';
import logo from './logo.jpg';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img src={logo} alt="SpaceX" style={{ display: 'block', margin: 'auto' }} />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
