import * as types from './actionType'
import { auth ,googleAuthProvider } from '../firebase'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword ,signOut,updateProfile,signInWithPopup} from 'firebase/auth'

const registerStart = () =>({
    type:types.REGISTER_START
})

const registerSuccess = (user) => ({
    type:types.REGISTER_SUCCESS,
    payload:user
})

const registerFail = (error) => ({
    type:types.REGISTER_FAIL,
    payload:error
})


const loginStart = () =>({
    type:types.LOGIN_START
})

const loginSuccess = (user) => ({
    type:types.LOGIN_SUCCESS,
    payload:user
})

const loginFail = (error) => ({
    type:types.LOGIN_FAIL,
    payload:error
})

const logoutStart = () =>({
    type:types.LOGOUT_START
})

const logoutSuccess = () => ({
    type:types.LOGOUT_SUCCESS,
})

const logoutFail = (error) => ({
    type:types.LOGOUT_FAIL,
    payload:error
})


const GoogleSignInStart = () =>({
    type:types.GOOGLE_SIGN_IN_START
})

const GoogleSignInSuccess = (user) => ({
    type:types.GOOGLE_SIGN_IN_SUCCESS,
    payload:user
})

const GoogleSignInFail = (error) => ({
    type:types.GOOGLE_SIGN_IN_FAIL,
    payload:error
})



export const  setUser = (user) =>({
   type:types.SET_USER ,
   payload:user
})
   

 export const registerInitiate = (email,password,displayName) =>{
   return function(dispatch){
    dispatch(registerStart())
      createUserWithEmailAndPassword(auth,email,password)
      .then(({user})=>{
                   console.log(user)
                   updateProfile(user, { displayName:displayName })
                 dispatch(registerSuccess(user)) 
                }).catch((error)=>{
                 dispatch(registerFail(error.message))
                   console.log(error)
               })
    }
}

export const loginInitiate = (email,password) =>{
    return function(dispatch){
        dispatch(loginStart())
        signInWithEmailAndPassword(auth,email,password).then(({user})=>{
         dispatch({type:'LOGIN_SUCCESS',payload:user})
        }).catch((error)=>dispatch(loginFail(error.message)))
    }
}

export const googleSignInInitiate = () =>{
    return function(dispatch){
        dispatch(GoogleSignInStart())
        signInWithPopup(auth,googleAuthProvider)
        .then(({user})=>{
         dispatch(GoogleSignInSuccess)
        })
        .catch((error)=>dispatch(GoogleSignInFail(error.message)))
    }
}

export const logoutInitiate = () =>{
    console.log('called')
    return function(dispatch){
        dispatch({type:"LOGIN_START"})
          signOut(auth)
          .then((res)=>{
            console.log(res,'acion')
         dispatch(logoutSuccess())
        }).catch((error)=>dispatch(logoutFail(error.message)))
    }
}

