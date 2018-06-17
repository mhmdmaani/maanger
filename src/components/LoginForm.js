import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Card,CardSection,Input,Button} from './common';
import {connect } from 'react-redux';
import {emailchanged , passwordchanged ,LoginUser} from '../actions';
export  class LoginForm extends Component {
  onEmailChange(text){
    this.props.emailchanged(text);    //emailchanged is the connected action
  }
  onPasswordChange(text){
    this.props.passwordchanged(text); // passwordchanged is the connected action
  }

  onButtonPress(){
    const {email,password}=this.props;
    this.props.LoginUser({email,password});
  }
  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="example@email.com"
            onTextChange ={this.onEmailChange.bind(this)}
             value={this.props.email}/>
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="password"
            onTextChange={this.onPasswordChange.bind(this)}
            placeholder="Password"
            value = {this.props.password} />
        </CardSection>

        <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}
mapStateToProps = state=>{
  return {
    email : state.auth.email,
    password: state.auth.password
  }
}
export default connect(mapStateToProps,{emailchanged , passwordchanged , LoginUser})(LoginForm);
