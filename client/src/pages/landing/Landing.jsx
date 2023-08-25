import React from 'react'
import './landing.css'
// components
import Signin from '../../components/signIn/Signin'
import Signup from '../../components/signup/Signup'
import Forget_password from '../../components/forget_password/Forget_password'
import Home from '../home/Home'
const Landing = () => {
  return (
    <div className='Landing'>
      <Signin />
      <Signup />
      <Home />
    </div>
  )
}

export default Landing