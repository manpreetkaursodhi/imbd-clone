import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Home from '../../pages/home/Home';

function SignIn() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("sanskarPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
  <>
    
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3 style={{padding:'20px',marginLeft:'40px', fontFamily:'cursive', color:'white'}}>LogIn</h3>
          <div className="form-group" style={{display:'inline-grid'}}>
            {/* <label>Email</label> */}
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group" style={{display:'inline-grid'}}>
            {/* <label>Password</label> */}
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block" style={{backgroundColor:'rgb(239, 195, 19);', height:'2rem', width:'6rem', marginLeft:'80px', marginTop:'20px'}}>
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Please sign up first!
            </Alert>
          )}
        </form>
      ) 
      : (
       <Home />
      )}
    </div>
    </>
  );
}

export default SignIn;