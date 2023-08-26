import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='header container-fluid m-3 p-3'>
      <div className="container d-flex subcont">
        <div className="imageconainer">
          <img className='logo' src='https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png' alt="evangadi logo" />
        </div>

        <div className="linkcontainer ">
          <ul className='d-flex gap-5'>
            <li>home</li>
            <li>how it work</li>
            <li><Link to='/signin' className='btn btn-primary'>Signin</Link></li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header