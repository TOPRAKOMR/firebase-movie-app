import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signIn } from '../auth/firebase';

const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventdefault()
    console.log(email,password)
    signIn(email,password,navigate)

  }

  return (
    <div className="d-flex justify-conent-center">
      <div className="form-image">
        <img src={"https:/picsum.photos/800/800"} alt="seo" />
      </div>
      <div className="register-from">
        <h1 className="form-title display-3">Login</h1>
        <form id="register" onSubmit={handleSubmit}>
          
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
              type="text"
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
          value="Login"
          // onClick={handleSubmit}
          
          />
        </form>
        <button className='btn btn-primary form-control'>
          Contiune with Google

        </button>
      </div>
    </div>
  )
}

export default Login