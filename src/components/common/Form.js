import React from 'react';
import {View,TextInput} from 'react-native';
import Frame from './Frame';
import Button from './Button';
import Header from './Header';
import Input from './Input';

import Container from './Container';
export default class Form extends React.Component {
  state = {email:'',
           password:''
         };
  login = ()=>{
    email = this.state.email;
    password  = this.state.password;
    firebase.auth().logInWithEmailAndPassword(email,password);
  };
  render(){
    return (
      <Container>
          <Header>Authentication</Header>
          <Frame>
            <Input label      ="Email"
                   placeholder='JohnDou@Example.com'
                   onTextChange ={()=>{
                     this.setState(Email);
                   }}
                   value= {this.state.email}  />
                   <Input label      ="Password"
                          placeholder='Password'
                          onTextChange ={()=>{
                            this.setState(password);
                          }}
                          value= {this.state.password}
                        secureTextEntry={true}  />
          </Frame>
          <Frame>
              <Button onPress={this.login}>Login</Button>
          </Frame>
      </Container>
    )
  }
}
