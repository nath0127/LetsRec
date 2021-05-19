import React from 'react';
import axios from 'axios';

class Sport extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: [],
      value: 'basketball',
      sports: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      sports: this.props.sports
    })
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      selected: [...e.target.value]
    })
  }

  render() {
    if (this.state.sports.length === 0) {
      return (
        null
      )
    } else {
      return (
        <form>
          <label>Select Your Sport(s)
            <select>
              <option value={this.state.sports[0]}>{this.state.sports[0]}</option>
              <option value={this.state.sports[0]}>{this.state.sports[1]}</option>
              <option value={this.state.sports[0]}>{this.state.sports[2]}</option>
              <option value={this.state.sports[0]}>{this.state.sports[3]}</option>
              <option value={this.state.sports[0]}>{this.state.sports[4]}</option>
            </select>
          </label>
        </form>
      )
    }
  }
}

export default Sport;