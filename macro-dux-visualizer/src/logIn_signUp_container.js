import React from 'react'
import UserLogInBootstrap from './user_log_in_bootstrap'
import UserSignUpBootstrap from './user_sign_up_bootstrap'

export default function LogInSignUpContainer(){
  return(
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md">
          <UserLogInBootstrap />
        </div>
        <div class="col-md">
          <UserSignUpBootstrap />
        </div>
      </div>
    </div>
  )
}
