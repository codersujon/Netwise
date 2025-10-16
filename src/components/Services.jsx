import React from 'react'
import SectionTitle from './SectionTitle'
import { servicesData } from '../data/services'


const Services = () => {
  return (
    <section className="ep-services-section py-120">
      <div className="container">
        <div className="row mb-60">
            <div className="col-lg-6">
                <SectionTitle SectionTitleClass="mb-0" title="Smart Solutions for a Digital World" subtitle="Our Services"/>
            </div>
            <div className="col-lg-6 align-self-end">
                <div className="services_arrow d-flex gap-4 align-items-center justify-content-end">
                    <div className="arrow arrow-prev">
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className="arrow arrow-next">
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            {
                servicesData.map((service)=>(
                    <div className="col-lg-4" key={service.id}>
                        <div className="service-item rounded-20">
                        <a href="service-details.html" className="d-block w-100">
                            <div className={`icon-box rounded-20 ${service.className} d-flex justify-content-center align-items-center`}>
                            <img src={service.icon} alt="service-icon" />
                            </div>
                            <div className="text">
                            <h4 className="service-title">{service.title}</h4>
                            <p>{service.description}</p>
                            </div>
                        </a>
                        </div>
                    </div>
                ))
            }
          
        </div>
      </div>
    </section>
  )
}

export default Services
