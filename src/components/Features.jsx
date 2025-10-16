import React from 'react'
import featureImg1 from '../assets/img/features/feature-img-1.png'
import featureImg2 from '../assets/img/features/feature-img-1.png'
import featureIcon1 from '../assets/img/icons/feature-icon-1.svg'
import featureIcon2 from '../assets/img/icons/feature-icon-2.svg'
import featureIcon3 from '../assets/img/icons/feature-icon-3.svg'

const Features = () => {
  return (
     <section className="ep-features-section pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="feature-image position-relative">
              <div className="img-one overflow-hidden rounded-20 position-relative reveal left">
                <img src={featureImg1} alt="about-img" className="img-fluid w-100 rounded-20" />
              </div>
              <div className="img-two overflow-hidden position-absolute">
                <img src={featureImg2} alt="about-img" className="img-fluid w-100 rounded-20" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-text">
              <div className="section-title-block">
                <h6 className="section-sub-title position-relative d-inline-block text-uppercase">Our features</h6>
                <h2 className="section-title split-text right">Connecting the Dots of Innovation</h2>
              </div>
              <div className="feature-item d-flex align-items-center">
                <div className="icon-box rounded-20 icon-box-primary d-flex justify-content-center align-items-center">
                  <img src={featureIcon1} alt="feature-icon" />
                </div>
                <div className="info">
                  <h4 className="feature-title">Tech Vista Solutions</h4>
                  <p>Our mission is there are many variations of passages Lorem Ipsum available</p>
                </div>
              </div>
              <div className="feature-item d-flex align-items-center">
                <div className="icon-box rounded-20 icon-box-secondary d-flex justify-content-center align-items-center">
                  <img src={featureIcon2} alt="feature-icon" />
                </div>
                <div className="info">
                  <h4 className="feature-title">Pro Guard IT Services</h4>
                  <p>Our mission is there are many variations of passages Lorem Ipsum available</p>
                </div>
              </div>
              <div className="feature-item d-flex align-items-center">
                <div className="icon-box rounded-20 icon-box-tertiary d-flex justify-content-center align-items-center">
                  <img src={featureIcon3} alt="feature-icon" />
                </div>
                <div className="info">
                  <h4 className="feature-title">Cyber Shield Experts</h4>
                  <p>Our mission is there are many variations of passages Lorem Ipsum available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
