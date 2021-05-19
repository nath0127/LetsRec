import React from 'react';
import axios from 'axios';
import Account from './Account.jsx';
import Sport from './Sport.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      sports: []
    }
    this.handlePage = this.handlePage.bind(this);
    this.getSports = this.getSports.bind(this);
  }

  componentDidMount() {
    this.getSports();
  }

  getSports() {
    axios.get('/sports')
    .then((res) => {
      this.setState({
        sports: [res.data]
      })
    })
    .catch((err) => console.error(err))
  }

  handlePage() {
    this.setState({
      page: this.state.page + 1
    })
  }

  render() {
    if (this.state.page === 0) {
      return (
        <div className="account">
          <Account page={this.handlePage}/>
        </div>
      )
    } else if (this.state.page === 1) {
      return (
        <div className="sport">
          <Sport sports={this.state.sports} page={this.handlePage}/>
        </div>
      )
    }
  }
}

export default App;