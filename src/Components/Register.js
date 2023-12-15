import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { registerInitiate } from '../Redux/action'

const Register = () => {
  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    conformPassword: ''
  })

  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state)
  const userData = currentUser?.user?.CurrentUser
  const navigate = useNavigate()

  useEffect(() => {
    if (userData) {
      navigate('/')
    }
  }, [currentUser, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== password) {
      return;
    }

    dispatch(registerInitiate(email, password, displayName, conformPassword))
    setTimeout(() => {
      navigate('/login');
    }, 5000);
    setState({ email: '', password: '', displayName: '', conformPassword: '' })
  }



  const handleChange = (e) => {
    let { name, value } = e.target
    setState((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const { email, password, conformPassword, displayName } = state
  return (<Wrapper>
    <div className='main'>
      <div className='formdiv' >
        <form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: 'center' }}>
            Sign up
          </h1>



          <div className='inp'>

            <input
              type='text'
              placeholder='Enter Full Name'
              name='displayName'
              onChange={handleChange}
              value={displayName}
              required
            />

            <input
              type='email'
              placeholder='Email Address'
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

            <input
              type='password'
              placeholder='Repeat password'
              name='conformPassword'
              onChange={handleChange}
              value={conformPassword}
              required
            />

          </div>
          <hr />

          <div className='newlogin'>

            <div>

              <button style={{ background: 'rgb(84,127,212)', borderStyle: 'none', color: 'white' }}>
                <i className='fas fa-user-plus'></i> Register
              </button>


            </div>

            <div style={{ marginTop: '.5rem' }}>
              <NavLink to='/login' style={{ textDecoration: 'none' }}>
                <p><space>{`<`}</space>back</p>
              </NavLink>
            </div>


          </div>

        </form>
      </div>
    </div>
  </Wrapper>
  )
}

export default Register


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
