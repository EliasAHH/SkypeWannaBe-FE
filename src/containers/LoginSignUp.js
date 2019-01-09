import React, {Component, Fragment} from 'react';
import Login from '../components/welcome/Login'
import SignUp from '../components/welcome/Signup'

class LogInSignUp extends Component {
  state = {
    login:true
  }

  changeLogin = turnary => {
    if(this.state.login !== turnary){
      this.setState({
        login: turnary
      })
    }
  }


  render() {
    const { login } = this.state;
    const { fetchUser, createUser } = this.props

    return (
      <div>
              <button type="button" onClick={() => this.changeLogin(true)} >
                Log In
              </button>

              <button type="button" onClick={() => this.changeLogin(false)} >
                Sign Up
              </button>

              {login?
                <Fragment>
                  <h2>Log-in to your account</h2>
                  <Login fetchUser={fetchUser}/>
                </Fragment>
          :
                <Fragment>
                  <h2>Sign up for an account </h2>
                    <SignUp createUser={createUser}/>
                </Fragment>
              }
          </div>
        )
    }
}

export default LogInSignUp
