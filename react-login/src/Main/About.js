import React, { Component } from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageOne from '../Image/127911302_3527796550636600_4247854037889096430_n.jpg'
import ImageTwo from '../Image/first.jpg'
import ImageThree from '../Image/second.jpg'
import ImageFour from '../Image/third.jpg'
import ImageFive from '../Image/fourth.jpg'
import ImageSix from '../Image/fifth.jpg'
import { Link } from 'react-bootstrap-icons';
import Login from './Login';
import './about.css';



export class About extends Component {
  render() {
    return (
        <div>
            <Header />
        <div className='container-fluid mt-3 row row-cols-1 row-cols-md-3 gy-3'>
        <div className='col'>
        <div className='card shadow-lg rounded-4 border-0 bg-dark h-100'>
                <img  id = 'images' className='hover-zoom d-flex justify-content-center card-img-top w-25 float-right rounded-circle shadow-4-strong' src={ImageOne} alt="" />
          <div className="card body">
            <h4 className="card-title text-center text-success">
              Card Title One
            </h4>
            <p className="card-text text-sm-center text-dark">
                Lorem ipsum dolor
                sit amet consectetur
                adipisicing elit. Quia
                cum veniam iste molestias
                aliquid quasi adipisci saepe,
                culpa repellendus eaque placeat
                qui! Similique, at. Praesentium,
                molestiae? Dolorem nobis eaque
                aliquam!
            </p>
          </div>
        </div>
    </div>
          
          <div className='col'>
          <div className='card shadow-lg rounded-4 border-0 bg-dark h-100'>

              <img id = 'images' className='d-flex justify-content-center card-img-top w-25  ml-lg-4 float-left rounded-circle ' src={ImageFive} alt="" />

            <div className="card body">
              <h4 className="card-title text-center text-success">
                Card Title One
              </h4>
              <p className="card-text text-sm-center text-dark">
                  Lorem ipsum dolor
                  sit amet consectetur
                  adipisicing elit. Quia
                  cum veniam iste molestias
                  aliquid quasi adipisci saepe,
                  culpa repellendus eaque placeat
                  qui! Similique, at. Praesentium,
                  molestiae? Dolorem nobis eaque
                  aliquam!
              </p>
            </div>
          </div>
      </div>
          
          <div className='col'>
          <div className='card shadow-lg rounded-4 border-0 bg-dark h-100'>
              <img  id = 'images' className='d-flex justify-content-center card-img-top w-25 float-right rounded-circle shadow-4-strong' src={ImageThree} alt="" />

            <div className="card body">
              <h4 className="card-title text-center text-success">
                Card Title One
              </h4>
              <p className="card-text text-sm-center text-dark">
                  Lorem ipsum dolor
                  sit amet consectetur
                  adipisicing elit. Quia
                  cum veniam iste molestias
                  aliquid quasi adipisci saepe,
                  culpa repellendus eaque placeat
                  qui! Similique, at. Praesentium,
                  molestiae? Dolorem nobis eaque
                  aliquam!
              </p>
            </div>
          </div>
      </div>
          
          <div className='col'>
            <div className='card shadow-lg rounded-4 border-0 bg-dark h-100'>

                <img id = 'images'  className='d-flex justify-content-center card-img-top w-25 float-right rounded-circle shadow-4-strong' src={ImageSix} alt="" />

              <div className="card body">
                <h4 className="card-title text-center text-success">
                  Card Title One
                </h4>
                <p className="card-text text-sm-center text-dark">
                    Lorem ipsum dolor
                    sit amet consectetur
                    adipisicing elit. Quia
                    cum veniam iste molestias
                    aliquid quasi adipisci saepe,
                    culpa repellendus eaque placeat
                    qui! Similique, at. Praesentium,
                    molestiae? Dolorem nobis eaque
                    aliquam!
                </p>
              </div>
            </div>
          </div>
          
          <div className='col'>
          <div className='card shadow-lg rounded-4 border-0 bg-dark h-100'>
  
          <img  id = 'images' className='hover-zoom d-flex justify-content-center card-img-top w-25 float-right rounded-circle shadow-4-strong' src={ImageFour} alt="" />

            <div className="card body">
              <h4 className="card-title text-center text-success">
                Card Title One
              </h4>
              <p className="card-text text-sm-center text-dark">
                  Lorem ipsum dolor
                  sit amet consectetur
                  adipisicing elit. Quia
                  cum veniam iste molestias
                  aliquid quasi adipisci saepe,
                  culpa repellendus eaque placeat
                  qui! Similique, at. Praesentium,
                  molestiae? Dolorem nobis eaque
                  aliquam!
              </p>
            </div>
          </div>
          </div>
          
          <div className='col'>
          <div className='card shadow-lg rounded-4 border-0 bg-dark h-100'>
              <img  id = 'images' className='card-img-top w-25 float-right rounded-circle shadow-4-strong' src={ImageTwo} alt="" />

            <div className="card body">
              <h4 className="card-title text-center text-success">
                Card Title One
              </h4>
              <p className="card-text text-sm-center text-dark">
                  Lorem ipsum dolor
                  sit amet consectetur
                  adipisicing elit. Quia
                  cum veniam iste molestias
                  aliquid quasi adipisci saepe,
                  culpa repellendus eaque placeat
                  qui! Similique, at. Praesentium,
                  molestiae? Dolorem nobis eaque
                  aliquam!
              </p>
            </div>
          </div>
          </div>
          

        </div>
      </div>
    )
  }
}

export default About
