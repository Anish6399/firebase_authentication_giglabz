import React ,{useEffect}from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { auth } from './firebase'
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from './Redux/action';




const App = () => {
const dispatch = useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        dispatch(setUser(user))
      }else{
        dispatch(setUser(null))
      }
    })
  },[dispatch])

  return (
    <Router>
<div>
<Routes>
  <Route exact path='/' Component={Home}></Route>
  <Route exact path='/login' Component={Login}></Route>
  <Route exact path='/register' Component={Register}></Route>
</Routes>
</div>
</Router >
  );
};

export default App;

