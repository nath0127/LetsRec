import React from 'react';
import axios from 'axios';

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('/accounts', {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      location: this.state.location
    })
    .catch((err) => console.log(err));
    this.props.page();
  }

  render() {
    return (
      <form>
        <label for="username">Username</label>
        <input type="text" name="username" onChange={this.handleInput}></input>
        <label for="password">Password</label>
        <input type="password" name="password" onChange={this.handleInput}></input>
        <label for="email">Email Address</label>
        <input type="text" name="email" onChange={this.handleInput}></input>
        <label for="location">Location (city, state)</label>
        <input type="text" name="location" onChange={this.handleInput}></input>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default Account;