import React from 'react'

const Login = ({ fetchUser }) => {

  return (

        <form onSubmit={(event) => fetchUser(event)}>
          <input type="text" name="email" placeholder="E-mail address" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit"  value="Login" />

        </form>


  )
}

export default Login;
