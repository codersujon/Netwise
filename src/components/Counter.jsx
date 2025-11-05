import React from 'react'
import counterImage from '../assets/img/images/counter-image.png'
import OdometerCounter from './OdometerCounter'

const Counter = () => {
  return (
    <>
      <section className="ep-counter-section pt-120">
      <div className="container">
        <div className="section-title-block mb-40">
          <div className="row">
            <div className="col-lg-10">
              <h2 className="heading-style1 split-text right">Connecting the Dots of Digital Innovation Worldwide!</h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="counter-text">
              <p>The IT industry offers diverse career opportunities, from network administration to software
                development. As technology continues to evolve, the importance of IT in shaping the future of
                businesses
              </p>
              <div className="counter-wrapper">
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="counter-item text-center rounded-20">
                      <div className="number">
                        <OdometerCounter value={30} />+
                      </div>
                      <span className="short-info">Winning Award</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item text-center rounded-20">
                      <div className="number">
                        <OdometerCounter value={180} />+
                      </div>
                      <span className="short-info">Active Members</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item text-center rounded-20">
                      <div className="number">
                        <OdometerCounter value={1152} />+
                      </div>
                      <span className="short-info">Satishfied Client</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item text-center rounded-20">
                      <div className="number">
                        <OdometerCounter value={250} />+
                      </div>
                      <span className="short-info">Clients Comment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="counter-image rounded-20 overflow-hidden ms-lg-auto">
              <div className="reveal right">
                <img src={counterImage} alt="counter-image" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Counter
