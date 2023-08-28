import React, { useEffect, useState } from 'react';
import './profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStateValue } from '../../utility/stateprovider';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const id = { id: user.user.id };
    const fetchData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(
          'http://localhost:4500/api/users/userinfo',
          id,
          {
            headers: {
              'x-auth-token': user.token
            }
          }
        );
        const data = response.data.data;
        setUserData(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="profile-picture">
            <img
              width="300px"
              src="https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Profile Picture"
            />
          </div>
        </div>
        <div className="col-md-9">
          <div className="profile-info">
            <div className="row">
              {Object.keys(userData).map(key => (
                <div className="col-md-4" key={key}>
                  <strong>{key}</strong>
                  <p>{userData[key]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;