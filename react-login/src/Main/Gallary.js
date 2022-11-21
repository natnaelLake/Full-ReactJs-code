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



export class Gallary extends Component {
  render() {
    return (
        <div className='container'>
        <div class="row row-cols-1 row-cols-md-4  gy-4">
        <div class="col">
          <div class="card h-100">
            <img src={ImageOne} class="card-img-bottom"
              alt="The firs Image" />
              <a href={ImageOne} class = "btn btn-info stretched-link">See Image</a>   
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={ImageTwo} class="card-img-top"
              alt="The second Image" />
              <a href={ImageTwo} class = "btn btn-info stretched-link">See Image</a>                        
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={ImageThree} class="card-img-top"
            alt="The Third image" />
            <a href={ImageThree} class = "btn btn-info stretched-link">See Image</a>   
                        
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={ImageFour} class="card-img-top"
              alt="The fourth image" />
              <a href={ImageFour} class = "btn btn-info stretched-link">See Image</a>   
          </div>
                </div>
        <div class="col">
          <div class="card h-100">
            <img src={ImageFive} class="card-img-top"
              alt="The fifth image" />
              <a href={ImageFive} class = "btn btn-info stretched-link">See Image</a>   
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={ImageSix} class="card-img-top"
              alt="The sixth image" />
              <a href={ImageSix} class = "btn btn-info stretched-link">See Image</a>   
          </div>
         </div>     
         <div class="col">
         <div class="card h-100">
           <img src={ImageOne} class="card-img-bottom"
             alt="The firs Image" />
             <a href={ImageOne} class = "btn btn-info stretched-link">See Image</a>   
         </div>
       </div>
       <div class="col">
         <div class="card h-100">
           <img src={ImageTwo} class="card-img-top"
             alt="The second Image" />
             <a href={ImageTwo} class = "btn btn-info stretched-link">See Image</a>                        
         </div>
       </div>
       <div class="col">
         <div class="card h-100">
           <img src={ImageThree} class="card-img-top"
           alt="The Third image" />
           <a href={ImageThree} class = "btn btn-info stretched-link">See Image</a>   
                       
         </div>
       </div>
       <div class="col">
         <div class="card h-100">
           <img src={ImageFour} class="card-img-top"
             alt="The fourth image" />
             <a href={ImageFour} class = "btn btn-info stretched-link">See Image</a>   
         </div>
               </div>
       <div class="col">
         <div class="card h-100">
           <img src={ImageFive} class="card-img-top"
             alt="The fifth image" />
             <a href={ImageFive} class = "btn btn-info stretched-link">See Image</a>   
         </div>
       </div>
       <div class="col">
         <div class="card h-100">
           <img src={ImageSix} class="card-img-top"
             alt="The sixth image" />
             <a href={ImageSix} class = "btn btn-info stretched-link">See Image</a>   
         </div>
       </div>            
      </div>
    </div>
    )
  }
}

export default Gallary