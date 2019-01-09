import React,{Fragment} from 'react';

import LogContainer from '../containers/LoginSignUp';



const Welcome = ({fetchUser, createUser}) => {

  return (
    <Fragment>

      <h2> SkypeWannaBe </h2>
        <LogContainer fetchUser={fetchUser} createUser={createUser}/>
    </Fragment>
  )

}

export default Welcome
