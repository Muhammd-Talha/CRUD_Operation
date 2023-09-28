import React, { useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { BsPersonCircle, BsFillFileLockFill } from "react-icons/bs";

import './Componentone.css'


const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    // console.log({ name, password });
    fetch('http://localhost:3000/login?q=')
      .then((data) => {
        data.json().then((resp) => {
          // console.log('resp', resp);
          if (name === resp[0].email && password === resp[0].password) {
            localStorage.setItem('login', JSON.stringify(resp))
            window.location = '/';
          }
          else {
            // alert('Wrong username and password');
          }
        });
      })
  };

  return (
    <div>
      <h1 className=' text-center mt-5 mb-5'>Member Login</h1>
      <div className='edit m-auto'>
        <InputGroup className="mb-3  ">
          <InputGroup.Text id="basic-addon1"> < BsPersonCircle /> </InputGroup.Text>

          <Form.Control className='edit'
            onChange={(e) => setName(e.target.value)}
            placeholder="User Email"

            value={name}
          />
        </InputGroup>
      </div>
      <div className='edit m-auto'>
        <InputGroup className="mb-3  ">
          <InputGroup.Text id="basic-addon1">< BsFillFileLockFill /> </InputGroup.Text>

          <Form.Control className='edit'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </InputGroup>
      </div>
      <div className='wid-th text-center'>
        <button onClick={login}>Login</button>

      </div>
    </div>
  );
};

export default Login;
