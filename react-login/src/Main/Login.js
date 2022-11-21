import React, { Component } from 'react'
import './Style.css';
import SignUp from './SignUp';
import { Link,Outlet } from 'react-router-dom';


export class Login extends Component {
  render() {
    return (
      <div className='container' >
      <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card shadow-lg p-1 bg-info rounded card-signin my-5">
          <div class="card-body">
          <h5 class="card-title text-center">Sign In</h5>
         <form className='form-signin'>
          <div className='form-floating form-label-group' id='first'>
                <input type="email" className='form-control rounded-4' id='floatForm' name="email" placeholder='User Name' required autoFocus/>
                <label htmlFor="floatForm">User Name</label>
          </div>          
            <br></br>
          <div className='form-floating form-label-group'>

                 <input type="password" className='form-control rounded-4' id='floatForm' name="email" placeholder='User Name' required autoFocus/>
                 <label htmlFor="floatForm">Pass Word</label>
             </div> 
                  <br />
                  <hr />
                    <Link to='/signup'> Create Account?</Link>
                  <br />
                  <br />
                  <div className='text-center'>
                    <button type = "submit" className='btn btn-success '>Login</button>
                  </div>
          </form>
        </div>  
        </div>
          </div>
        </div>
        </div>
    )
  }
}

export default Login
