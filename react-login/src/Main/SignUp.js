import React, { Component } from 'react'
import './Style.css';
import Login from './Login';
import { Link,Outlet } from 'react-router-dom';
import Home from './Home';



export class SignUp extends Component {
  render() {
    return (
      <div> 
        <Home /> 
      <div className='container' >
      <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card shadow-lg p-1 bg-info rounded card-signin my-5">
          <div class="card-body">
          <h5 class="card-title text-center">Sign Up</h5>
         <form className='form-signin'>
          <div className='form-floating form-label-group' id='first'>
                <input type="text" className='form-control rounded-4' id='floatForm' name="email" placeholder='User Name' required autoFocus/>
                <label htmlFor="floatForm">User Name</label>
          </div>          
            <br></br>
          <div className='form-floating form-label-group'>

                 <input type="email" className='form-control rounded-4' id='floatForm' name="email" placeholder='User Name' required autoFocus/>
                 <label htmlFor="floatForm">Email</label>
          </div>
                                <br></br> 
            <div className='form-floating form-label-group'>
                <input type="password" className='form-control rounded-4' id='floatForm' name="paskey" placeholder='User Name' max={10} required autoFocus/>
                <label htmlFor="floatForm">Pass Word</label>
             </div> 
                                <br />
           <div className='form-floating form-label-group'>
               <input type="tel" className='form-control rounded-4' id='floatForm' name="email" placeholder='User Name' max={10} required autoFocus/>
               <label htmlFor="floatForm">Phone Number</label>
            </div>          
                            <br></br>                               
                  <br />
                  <hr />
                    <Link to='/login'> Have Account?</Link>
                  <br />
                  <br />
                  <div className='text-center'>
                    <button type = "submit" className='btn btn-success '>Sign Up</button>
                  </div>
          </form>
        </div>  
        </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default SignUp
