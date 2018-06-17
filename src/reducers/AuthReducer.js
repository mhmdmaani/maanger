import {EMAIL_CHANGED,
        PASSWORD_CHANGED,
        USER_LOGIN_SUCCESS } from '../actions/types';
const INITIAL_AUTH={'email':'',
                    'password':''};
export default (state = INITIAL_AUTH,action)=>{
  console.log(action);
  switch(action.type){
    /*when email changed*/
    case EMAIL_CHANGED :
      return {...state , email:action.payload};
      /*when password changed*/
    case PASSWORD_CHANGED:
      return {...state,password:action.payload};
      case USER_LOGIN_SUCCESS:
      return{...state ,user:action.payload};
    default:
      return state;
  }
}
