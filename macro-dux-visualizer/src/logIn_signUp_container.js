import React from 'react'
import UserLogIn from './user_log_in_form'
import UserSignUp from './user_sign_up_bootstrap'

export default function LogInSignUpContainer(){
  return(
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md">
          <UserLogIn />
        </div>
        {/*}<div class="col-md">
          <UserSignUp />
        </div>*/}
      </div>
    </div>
  )
}
