import React, { Component } from 'react';
import { addUser } from '../actions/user';
import { connect } from "react-redux";

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
          name: '',
          email: '',
          webId: '',
          verified: 'false' 
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        console.log(event.target.name);
        const key = event.target.name;
      this.setState({ [key] : event.target.value});
    }
  
    handleSubmit(event) {
        this.props.addUser(this.state);
        debugger;
        this.setState({ name: "", email: "", webId: "" });
    }
  
    render() {
      return (
        <form className="from" onSubmit={this.handleSubmit}>
          <label className="field">
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label className="field">
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label className="field">
            WebId:
            <input type="text" name="webId" value={this.state.webId} onChange={this.handleChange} />
          </label>
            <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  export default connect(
    null,
    { addUser }
  )(Form);