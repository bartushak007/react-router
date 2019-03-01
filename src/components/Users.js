import React, { Component } from 'react';
import SelectUsers from './SelectUsers';
import UserInformation from './UserInformation';
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {curent: {}};
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
    .then((response) => {
      return response.json();
    })
    .then((obj) => {
      this.setState(obj);     
    })
  }

  changeState(value) {
    this.setState(value);
  }
  
  render() {
    const {results, curent} = this.state;
    return (
      <div className="users">
        <SelectUsers usersList={results} changeState={this.changeState}/>
        <UserInformation information = {curent} usersList={results}/>
      </div>
    );
  }
}

export default Users