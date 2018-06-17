import {EMAIL_CHANGED ,PASSWORD_CHANGED, USER_LOGIN_SUCCESS} from './types.js';
import firebase from 'firebase';
export const emailchanged = (text)=>{
  return{
    type:'EMAIL_CHANGED',
    payload: text
  };
};
export const passwordchanged = (text)=>{
  return{
    type:'PASSWORD_CHANGED',
    payload:text
  };
};
export const LoginUser = ({email,password})=>{
  return (dispatch)=>{
      firebase.auth().signInWithEmailAndPassword(email,password)
              .then(user=>{
                dispatch({type:USER_LOGIN_SUCCESS,payload:user})
              }).catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(user=>{
                  dispatch({type:USER_LOGIN_SUCCESS,payload:user})
                });
              });
  };
};
