import React from 'react'



const SignUp = ({ createUser }) => {
  return (
    <form onSubmit={(event) => createUser(event)}>
            <input type="text" name="name" placeholder="First Name" />
            <input type="text" name="email" placeholder="E-mail address" />
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" value="Sign Up" />
    </form>
  )
}

export default SignUp;
