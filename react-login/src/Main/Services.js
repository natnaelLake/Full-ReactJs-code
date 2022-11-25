import React, { Component } from 'react'
import Header from './Header'
import ImageOne from '../Image/127911302_3527796550636600_4247854037889096430_n.jpg'
import ImageTwo from '../Image/first.jpg'
import ImageThree from '../Image/second.jpg'
import ImageFour from '../Image/third.jpg'
import ImageFive from '../Image/fourth.jpg'
import ImageSix from '../Image/fifth.jpg'
import './Style.css'



export class Services extends Component {
  render() {
    return (
        <div>
        <Header />
        <div className='container '>
          <div  className=" cardHover border-0 shadow card mb-5 w-50 rounded-5" >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={ImageSix}
                alt="Trendy Pants and Shoes"
                className="img-fluid w-100"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="text-center card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </p>
                <button className="btn btn-outline-danger">
                  View More
                </button>
              </div>
            </div>
          </div>
      </div>
      
      <div  className=" cardHover mt-0 border-0 shadow card mb-5 w-50 rounded-5" id = 'card-two' >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={ImageSix}
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </p>
                <button className="btn btn-outline-danger">
                  View More
                </button>
              </div>
            </div>
            </div>
          </div>
          
          <div  className="cardHover border-0 shadow card mb-5 w-50 rounded-5" id = 'card-two' >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={ImageSix}
                alt="Trendy Pants and Shoes"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </p>
                <button className="btn btn-outline-danger">
                  View More
                </button>
              </div>
            </div>
            </div>
        </div>

          
        <div  className=" cardHover mt-5 border-0 shadow card mb-3 w-50 rounded-5" >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={ImageSix}
              alt="Trendy Pants and Shoes"
              className="img-fluid w-100"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="text-center card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
              <button className="btn btn-outline-danger">
                View More
              </button>
            </div>
          </div>
        </div>
    </div>   
          
        </div>
      </div>
    )
  }
}

export default Services
