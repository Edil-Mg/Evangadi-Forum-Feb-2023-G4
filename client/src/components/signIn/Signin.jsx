import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useStateValue} from '../../utility/stateprovider'
import './signin.css'
import axios from 'axios';

const Signin = () => {
  const [{user }, dispatch] = useStateValue();
  const [form, setForm] = useState({});
  const [errors, setError] = useState({});
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

   const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (errors[field]) {
      setError({
        ...errors,
        [field]: null,
      });
    }
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
        if (1) {
    // if (validateForm()) {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(`http://localhost:4500/api/users/login`,form);
        const data = response.data;
       

        // console.log(data.token);
        // console.log(data.user['id']);
        // console.log(data.user['userName']);

          if (data) {
            dispatch({
              type: "SET_USER",
              user: {
                token: data.token,
                user: {
                  id: data.user['id'],
                  username: data.user['userName'],
                }

              },
            });
          }
        
          console.log(user);
        
     
        
      } catch (error) {
        alert("Error authenticating user");
      console.log('Error authenticating user:', error.message);
      setError({
        ...errors,
        pass: 'Network Error: Unable to reach the server',
      });
      }
    }
  };



  
  return (
    <div className="container-fluid login_page">
      <div className="container py-5 d-md-flex justify-content-between login_container">
        <div className="main col-12 col-md-6 me-md-2 p-5 d-flex flex-column justify-content-center">
          <p className="p1">Login to your account</p>
          <p className="p2 text-center">
            Don't have an account?
            <Link to="/signup" className="a3">
              Create a new account
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="in1"
              type="email"
              name="email"
              onChange={(e) => setField('email', e.target.value)}
              placeholder="Your Email"
            />
            <input
              className="in1"
              name="password"
              type="password"
              onChange={(e) => setField('password', e.target.value)}
              placeholder="Your Password"
            />
            <span  className="showHide2">
             
            </span>
            <button className="btn1">submit</button>
          </form>
          <Link to="/signup" className="a3 a1">
            Create an account?
          </Link>
        </div>
        <div className="sideNote2 container col-12 col-md-6 ms-md-2  mt-sm-5">
          <p className="forTitle">About</p>
          <h1>Evangadi Networks Q&A</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            voluptate officiis beatae nobis pariatur omnis facere accusamus
            laboriosam hic, adipisci vero reiciendis, recusandae sit ad, eum
            quisquam! Molestias, ut commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            voluptate officiis beatae nobis pariatur omnis facere accusamus
            laboriosam hic, adipisci vero reiciendis, recusandae sit ad, eum
            quisquam! Molestias, ut commodi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            ipsum, provident minus laudantium esse soluta maiores nostrum nisi
            sunt perferendis dolorum. Praesentium necessitatibus quia
            consectetur sunt tempora possimus eveniet voluptates?
          </p>
          <button className="btn1">HOW IT WORKS</button>
        </div>
      </div>
    </div>
  );

}

export default Signin