import React, { Component ,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Style.css';
import Login from './Login';
import Display from './Display';
import { Link,Outlet } from 'react-router-dom';
import Header from './Header';



export function SignUp() {
  const [fname,setFname] = useState('')
  const [lname,setLname] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [phoneNumber,setphoneNumber] = useState('')
  const history = useNavigate()


  const handleSubmit = e =>{
    e.preventDefault();
    console.log(fname,lname,email,password,phoneNumber)
    fetch('http://localhost:4043/reactReg',
      {
        method:'POST',
        crossDomain:true,
        headers:{
          'Content-Type':'application/json',
          Accept:'application/json',
          'Access-Control-Allow-Origin':'"'
        },
        body:JSON.stringify({
          fname:fname,
          lname:lname,
          email:email,
          password:password,
          phoneNumber:phoneNumber
        }),
      }).then(res => res.json())
      .then(data => {
          console.log(data);
          history('/display',{replace : true})      
      })
        
  }
    return (
      <div> 
        <Header /> 
      <div className='container' >
      <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card shadow-lg p-1 bg-info rounded card-signin my-5">
          <div class="card-body">
          <h5 class="card-title text-center">Sign Up</h5>
         <form className='form-signin' onSubmit={handleSubmit}>
          <div className='form-floating form-label-group' id='first'>
                <input 
                  type="text" 
                  className='form-control rounded-4' 
                  id='floatForm' 
                  name="fname" 
                  placeholder='User Name' 
                  required 
                  autoFocus
                  onChange={e=>setFname(e.target.value)}
                  />
                <label htmlFor="floatForm">First Name</label>
          </div> 
          <br></br>         
            <div className='form-floating form-label-group'>
                <input 
                  type="text" 
                  className='form-control rounded-4' 
                  id='floatForm' 
                  name="lname" 
                  placeholder='User Name' 
                  required autoFocus
                  onChange={e=>setLname(e.target.value)}
                  />
                <label htmlFor="floatForm">Last Name</label>
          </div> 
          <br></br>
          <div className='form-floating form-label-group'>

                 <input 
                  type="email" 
                  className='form-control rounded-4' 
                  id='floatForm' 
                  name="email" 
                  placeholder='User Name' 
                  required autoFocus
                  onChange={e=>setEmail(e.target.value)}
                  />
                 <label htmlFor="floatForm">Email</label>
          </div>
                                <br></br> 
            <div className='form-floating form-label-group'>
                <input 
                  type="password" 
                  className='form-control rounded-4' 
                  id='floatForm' 
                  name="passwrod" 
                  placeholder='User Name' 
                  max={10} 
                  required autoFocus
                  onChange={e=>setPassword(e.target.value)}
                  />
                <label htmlFor="floatForm">Pass Word</label>
             </div> 
                                <br />
           <div className='form-floating form-label-group'>
               <input 
                type="tel" 
                className='form-control rounded-4' 
                id='floatForm' 
                name="phoneNumber" 
                placeholder='User Name' 
                max={10} 
                required autoFocus
                onChange={e=>setphoneNumber(e.target.value)}
                />
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
export default SignUp
