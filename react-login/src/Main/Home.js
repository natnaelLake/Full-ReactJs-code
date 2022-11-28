import React, { Component } from 'react'
import Header from './Header'
import ImageOne from '../Image/127911302_3527796550636600_4247854037889096430_n.jpg'
import ImageTwo from '../Image/first.jpg'
import ImageThree from '../Image/second.jpg'
import ImageFour from '../Image/third.jpg'
import ImageFive from '../Image/fourth.jpg'
import ImageSix from '../Image/fifth.jpg'
import ImageSeven from '../Image/sixth.jpg'
import { Carousel } from 'bootstrap'
import './Style.css';




// import ImageEight from '../Image/seventh.jpg'

export class Home extends Component {

  
  
  render() {
    return (
      <div>
        <Header />
              
        <div className=''>
          
        <div className='mx-auto bg-image text-center p-s  shadow-1-strong rounded mb-5 text-white m-5'
        style={{
          backgroundImage: `url(${ImageSix})`,
          backgroundRepeat: 'no-repeat',
          width: '500px',
          height:'500px'
                              }}>
            
          <h1 class="mb-3 h2 p-5">Jumbotron</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus praesentium
            labore accusamus sequi, voluptate debitis tenetur in deleniti possimus modi voluptatum
            neque maiores dolorem unde? Aut dolorum quod excepturi fugit.
          </p>

          </div>
          
          <div className='flip-card rounded-5'>
            <div className="flip-card-inner m-5 mt-0 rounded-5 float-right" >
             <div className="flip-card-front">
                <img className = 'rounded-5' src={ImageSix} alt="Welcome to the home page." />
      
             </div>
             <div className="flip-card-back rounded-5">
              <h1>welcome to the back</h1>
              <p>this is the back part of the card. fell free there is no anything scarer.</p>
              <button className = 'btn btn-outline-info'>View</button>
             </div>
        </div>
      </div>

      <div className='flip-card rounded-5'>
          <div className="flip-card-inner m-5 rounded-5">
              <div className="flip-card-front">
                  <img className = 'rounded-5' src={ImageSix} alt="Welcome to the home page." />
        
              </div>
              <div className="flip-card-back rounded-5">
                <h1>welcome to the back</h1>
                <p>this is the back part of the card. fell free there is no anything scarer.</p>
                <button className = 'btn btn-outline-info'>View</button>
              </div>
        </div>
      </div>

       <div className='flip-card '>
          <div className="flip-card-inner m-5 mb-3 rounded-5">
              <div className="flip-card-front">
                  <img className = 'rounded-5 mb-3' src={ImageSix} alt="Welcome to the home page." />
        
              </div>
              <div className="flip-card-back rounded-5">
                <h1>welcome to the back</h1>
                <p>this is the back part of the card. fell free there is no anything scarer.</p>
                <button className = 'btn btn-outline-info'>View</button>
              </div>
        </div>
      </div>
      
  </div>
 </div>

    )
  }
}

export default Home
