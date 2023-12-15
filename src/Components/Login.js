import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {useNavigate,NavLink} from 'react-router-dom'
import styled from 'styled-components'
import { googleSignInInitiate, loginInitiate } from '../Redux/action'

const Login = () => {
const [state,setState] = useState({
    email:'',
    password:''
})

const dispatch = useDispatch()

const currentUser = useSelector((state)=>state)
const userData = currentUser?.user?.CurrentUser
const navigate = useNavigate()




useEffect(()=>{
  if(userData){
     navigate('/')
  }
},[currentUser,navigate])

const handleGoogleSignIn = () =>{
  dispatch(googleSignInInitiate())
}
const handleFacebookSignIn = () =>{}

const handleSubmit = (e) =>{
  e.preventDefault()
  if(!email || !password){
    return
  }

  dispatch(loginInitiate(email,password))
  setState({email:'',password:''})
}


const handleChange = (e) =>{
  let {name,value} = e.target
  setState({...state,[name]:value})
}


const {email,password} = state
  return (<Wrapper>
    <div className='main'>
        <div className='formdiv' >
       <form onSubmit={handleSubmit}>
          <h1 style={{textAlign:'center'}}>
            Login 
          </h1>

          <button style={{background:"rgb(247,69,74)",color:'white'}} className='btn1' type='button' onClick={handleGoogleSignIn}>
                <span><i className='fab fa-google-plus-g'> </i>Sign in with Googlle+</span>
            </button>

         <div className='btn google-btn'>
         

            <button style={{marginLeft:'2px',background:'rgb(10,137,240)',color:'white'}} className='btn1' type='button' onClick={handleFacebookSignIn}>
                <span ><i className='fab fa-facebook-f'> </i>Sign in with Facebook</span>
            </button>
         </div>
    <p style={{textAlign:'center'}}>OR</p>


<div className='inp'>
  <input
     type='email'
    placeholder='Eamil Address'
    name='email'
    onChange={handleChange}
    value={email}
     required
  />
<input
    type='password'
    placeholder='password'
    name='password'
    onChange={handleChange}
    value={password}
    required
  />
   <button type='submit'>Login</button>
   </div>
   <hr/>

   <div className='newlogin'>

    <div>
    <p>Don't have an account</p>
    </div>

<div>
<NavLink to='/register'>
  <button style={{background:'rgb(84,127,212)',borderStyle:'none',color:'white'}}>
    <i className='fas fa-user-plus'></i> Sign up Now
  </button>
   </NavLink>
</div>
 
   </div>

       </form>
       </div>
    </div>
    </Wrapper>
  )
}

export default Login


const Wrapper = styled.section`

.main{
    display:flex;
    justify-content:center;
    align-items:center;
   
}

.btn{
    display:flex;
    padding:1rem 2rem;
}

.btn1{
    border-style:none;
    background-color:rgb(241,243,244);
    border-radius:5px;
    padding:1rem 1rem
}

.inp{
  display:flex;
  justify-content:center;
  flex-direction:column;
  gap:10px
}

.newlogin{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
}

.formdiv{
background-color:rgb(237,237,237);
margin-top:2rem;
padding:1rem 2rem;
border-radius:10px
}

`
