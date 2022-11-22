import React, { Component } from 'react'
import ImageOne from '../Image/127911302_3527796550636600_4247854037889096430_n.jpg'
import ImageTwo from '../Image/first.jpg'
import ImageThree from '../Image/second.jpg'
import ImageFour from '../Image/third.jpg'
import ImageFive from '../Image/fourth.jpg'
import ImageSix from '../Image/fifth.jpg'
import ImageSeven from '../Image/sixth.jpg'
// import ImageEight from '../Image/seventh.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'


export class Gallary extends Component {
  render() {
    return (
      <div>
        <Home /> 
      <div className='container'>
      <div className="row row-cols-1 row-cols-md-4  gy-4">
      <div className="col">
        <div className="card h-100 ">
          <img src={ImageOne} className="card-img-bottom"
            alt="The first Image" />  
        </div>
      </div>
      <div className="col">
        <div className="card h-100 rounded-5">
          <img src={ImageTwo} className="card-img-top"
            alt="The second Image" />                       
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={ImageThree} className="card-img-top "
          alt="The Third image" />   
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={ImageFour} className="card-img-top"
            alt="The fourth image" />   
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={ImageFive} className="card-img-top"
            alt="The fifth image" />  
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={ImageSix} className="card-img-top"
            alt="The sixth image" />  
        </div>
       </div>     
       <div className="col">
        <div className="card h-100 ">
          <img src={ImageOne} className="card-img-bottom"
            alt="The first Image" />  
        </div>
      </div>
      <div className="col">
        <div className="card h-100 rounded-5">
          <img src={ImageTwo} className="card-img-top"
            alt="The second Image" />                       
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={ImageThree} className="card-img-top "
          alt="The Third image" />   
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={ImageFour} className="card-img-top"
            alt="The fourth image" />   
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={ImageFive} className="card-img-top"
            alt="The fifth image" />  
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src={ImageSix} className="card-img-top"
            alt="The sixth image" />  
        </div>
       </div> 
    </div>
  </div>
      </div>
    )
  }
}

export default Gallary