import React, { Component } from 'react';
import Welcome from './pages/Welcome'
import ConversationsList from './components/ConversationsList';
import { API_ROOT } from './constants';

class App extends Component {
  state ={
      currentUser: {}
    }

    fetchUser = event => {
    event.preventDefault()

    let email = event.target.email.value;
    let password = event.target.password.value;

    let body = {
      email,
      password
    }
    fetch(API_ROOT+'/auth', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(res => this.handleLogin(res))
  }

  createUser = event => {
    event.preventDefault()
    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    let body = {
      user : {
        name,
        email,
        password
      }
    }
    fetch(API_ROOT+'/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(res => this.handleLogin(res))
  }

  handleLogin = res => {
    localStorage.setItem("jwt", res.jwt)
      this.setState({
      currentUser: res.current_user.user
    })
  }


  render() {
    return (
      <div >
        {this.state.currentUser.name ?
          <ConversationsList user={this.state.currentUser}/>
          : <Welcome fetchUser={this.fetchUser} createUser={this.createUser}/>}
      </div>
    );
  }
}

export default App;
