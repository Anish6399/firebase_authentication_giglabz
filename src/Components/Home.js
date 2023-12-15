import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { logoutInitiate } from '../Redux/action'
import { useNavigate } from 'react-router-dom'
import styled  from 'styled-components'



const Home = () => {



  const currentUser = useSelector((state)=>state)
  const userData = currentUser?.user?.CurrentUser
  const [state,setState] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()




  const handleAuth = () =>{
    if(userData){
      dispatch(logoutInitiate())
    }
  }






  useEffect(()=>{
   if(!userData){
     navigate('/login')
   }else if(userData !== null){
    setState(userData.displayName)
   }
  },[userData])

  console.log(userData,'bvgyhuij')

  return (<Wrapper>
     <div className='main'>

       

        <div className='logout' onClick={handleAuth}>
          <div >
          <h4>Logout</h4>
          </div>
       
          <div style={{alignSelf:'center'}}>
          <i class="fa fa-sign-out icon"  aria-hidden="true"></i>
          </div>
        </div>

      
        
    </div>

    <div className='sec' >
        <h3 style={{marginBottom:'10rem'}}>Welcome to Our site</h3>
        <h2>{state}</h2>
        </div>
  </Wrapper>   
  )
}

export default Home

const Wrapper = styled.section`
.main{
  display:flex;
  justify-content:center;
  align-items:centser
}

.logout{
  display:flex;
  justify-content:center;
  flex-direction:row;
  align-items:centser;
  text-align:center;
  position:fixed;
  right:15px ;
  top:20px;
  gap:10px;
  cursor:pointer;
  height:2rem;
}

.sec{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}


`