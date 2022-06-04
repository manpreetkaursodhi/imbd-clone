import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import SignIn from './SignIn';

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <>

        <div className='page'>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3 style={{padding:'20px', fontFamily:'cursive', color:'white'}}>Sign Up</h3>

              <div className="form-group" style={{display:'inline-grid'}}>
                {/* <label>Name</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group" style={{display:'inline-grid'}}>
                {/* <label>Email</label> */}
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group" style={{display:'inline-grid'}}>
                {/* <label>Password</label> */}
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block" style={{backgroundColor:'rgb(239, 195, 19);', height:'2rem', width:'6rem', marginLeft:'80px', marginTop:'20px'}}>
                Register
              </button>
              <p onClick={handleClick} className="forgot-password text-right" style={{marginRight:'555px'}}>
                Already registered{" "}log in?
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  All fields are important!
                </Alert>
              )}
            </form>
          ) : (
            <SignIn />
          )}
        </div>
    
    </>
  );
}

export default Registration;