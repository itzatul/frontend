import React, { Component } from 'react';
import { getProfile } from '../actions/user'
import { connect } from "react-redux";
import { useQuery, gql } from '@apollo/client';

class List extends Component {
    constructor(props) {
      super(props);
        this.state = { users: [] }
        this.props.data 
    }
    handleClick(id) {
        this.props.getProfile(id);
    }
  
    render() {
      return (
        <ul>
            {this.state.users.map(item => (
                <li key={item.id}>
                <label>{item.name}</label>
                <label>{item.email}</label>
                <label>{item.keyId}</label>
                <label>{item.verified}</label>
                    <button type="button" onClick={() => handleClick(item.id)}>
                    access verifiable
                </button>
                </li>
            ))}
        </ul>
      );
    }
  }


  export default connect(
    null,
    { getProfile }
  )(List);