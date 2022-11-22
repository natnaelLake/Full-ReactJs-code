import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export class Copies extends Component {
  render() {
    return (
      <div>
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
     
     
     
     
      <div class="d-flex align-items-center">
      <div className='container-fluid'>
          <form className='d-flex input-group w-auto'>
          <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              />
              <button className="btn btn-outline-dark border-1" id="search-addon">
              Search
          </button>
          </form>
      </div>            
  </div>

     
     
     
     
                <ul className='navbar-nav'>
          <li className='nav-item active'>
                <Link  to  ="/">Home</Link>
          </li>
          <li className='nav-item'>
                <Link  to  ="/login">Login</Link> 
          </li>
          <li className='nav-item'>
                <Link  to  ="/gallery">Gallery</Link>
          </li>
      </ul>
</nav>
      </div>
    )
  }
}

export default Copies
