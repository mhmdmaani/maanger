import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore , applyMiddleware} from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
export default class App extends React.Component {
 componentWillMount(){
   /*connectiong with firebase configuration*/
   const config = {
   apiKey: 'AIzaSyCyUTSHUuiG9L6kyq8u74tUik60Sucrdog',
   authDomain: 'manager-be00a.firebaseapp.com',
   databaseURL: 'https://manager-be00a.firebaseio.com',
   projectId: 'manager-be00a',
   storageBucket: 'manager-be00a.appspot.com',
   messagingSenderId: '285537158820'
 };
 firebase.initializeApp(config);
 /*End firebase Configuration */
 }
  render() {
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
          <LoginForm/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
