import React from "react";
import { useState } from "react";
import { createUser } from "../auth/firebase";
import {useNavigate} from "react-router-dom"

const Register = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const nagivate =useNavigate();
  const handleSubmit=(e)=>{
    e.preventdefault()
    console.log(firstName,lastName)
    createUser(email,password,nagivate)
  
  };


  return (
    <div className="d-flex justify-conent-center">
      <div className="form-image">
        <img src={"https:/picsum.photos/800/800"} alt="seo" />
      </div>
      <div className="register-from">
        <h1 className="form-title display-3">Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              placeholder="Enter your First Name"
              onChange={(e)=>setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              placeholder="Enter your Last Name"
              onChange={(e)=>setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your Email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your Pasword"
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>
          <input
          type="submit"
          className="btn btn-primary form-control"
          value="Register"
          // onClick={handleSubmit}
          
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
