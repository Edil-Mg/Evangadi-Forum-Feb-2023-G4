import React from 'react'
import { Link } from 'react-router-dom';
import './signup.css'

const Signup = () => {
   return (
    <div className="container-fluid sign_page">
      <div className="container d-md-flex mx-auto py-5 align-items-center">
        <div className="form_wrapper col-12 col-md-6 me-md-2 p-5 d-flex flex-column">
          <p className="p11">Join the network</p>
          <p className="p22 lorem">
            Already have an account?
            <Link to="/login" className="a11">
              Sign in
            </Link>
          </p>
           <form
            //  onSubmit={handleSubmit}
           >
            <input
              className="in11 mr-1"
              name="email"
              // onChange={handleChange}
              type="email"
              placeholder="Email"
            />
            <div className="FLname d-flex">
              <input
                className="in11 me-1"
                name="firstName"
                // onChange={handleChange}
                type="text"
                placeholder="First Name"
              />

              <input
                className="in11 ms-1"
                name="lastName"
                // onChange={handleChange}
                type="text"
                placeholder="Last Name"
              />
            </div>

            <input
              className="in11"
              name="userName"
              // onChange={handleChange}
              type="text"
              placeholder="User Name"
            />

            <input
              className="in11"
              // onChange={handleChange}
              name="password"
              // type={type}
              placeholder="Password"
            />
            <span className="showHide">
              {/* <Icon icon={icon} size={20} onClick={HandleIconChange} /> */}
            </span>
            <button className="btnSign">Agree and Join</button>
          </form>
          <p className="mt-md-5 mt-sm-5 text-center texttag">
            I agree to the
            <Link to="" className="a22">
              privacy policy
            </Link>
            and
            <Link to="" className="a22">
              terms of serivice.
            </Link>
          </p>

          <Link to="/login" className="a33 text-center">
            Already have an account?
          </Link>
        </div>
        <div className="SignupNote container col-12 col-md-6 ms-md-2  mt-sm-5">
          <p className="forTitle">About</p>
          <h1>Evangadi Networks Q&A</h1>
          <p className="lorem">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor
            odio harum sunt, quaerat, molestias fuga expedita ad excepturi
            officiis aliquam aut nemo ratione culpa id laborum ipsum porro
            tempore?
          </p>
          <button className="btn1">HOW IT WORKS</button>
        </div>
      </div>
    </div>
  );
}

export default Signup