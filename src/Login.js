import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Login extends Component {
  constructor(){
    super();
    this.responseFacebook = this.responseFacebook.bind(this);
  }
  responseFacebook(response){
    this.props.isLoggedIn(response);
  }
  componentClicked(e){
    console.log(e);
  }
  render(){
    return(
      <FacebookLogin
        appId="1667381400148239"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook}
      />
    )
  }
}
export default Login
