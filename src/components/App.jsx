import React, { Component } from 'react';
import Form from './form';
import List from './list';

class App extends Component {
    render() {
        return (
            <div className="App">
            <header className="header">
              <h1 className="title">Welcome DID APP</h1>
              <p className="sub-title">
                Add candidates and verify their skills.
              </p>
            </header>
            <div className="form">
              <Form></Form>
            </div>
            <div className='list'>
              <List></List>
            </div>
          </div>
        );
    }
} 

export default App;
