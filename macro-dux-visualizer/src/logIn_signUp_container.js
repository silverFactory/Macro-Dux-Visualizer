import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from './actions/signUp'
import { logIn } from './actions/logIn'
import UserLogIn from './user_log_in_form'
import UserSignUp from './user_sign_up_bootstrap'

class LogInSignUpContainer extends Component{
  render(){
    return(
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md">
            <UserLogIn
              currentUser={this.props.currentUser}
              logIn={this.props.logIn}/>
          </div>
          <div class="col-md">
            <UserSignUp
              currentUser={this.props.currentUser}
              signUp={this.props.signUp}/>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return{
    currentUser: state.users.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (user) => dispatch(signUp(user)),
    logIn: (user) => dispatch(logIn(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInSignUpContainer)
