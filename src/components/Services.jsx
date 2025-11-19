import React from 'react'
import SectionTitle from './SectionTitle'
import { servicesData } from '../data/services'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';


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

        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            modules={[Autoplay, Navigation]}
            navigation={{ prevEl:".arrow-prev",  nextEl:".arrow-next"}}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
                {
                    servicesData.map((service)=>(
                        <SwiperSlide key={service.id}>
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
                        </SwiperSlide>
                    ))
                }
           
        </Swiper>

            
      </div>
    </section>
  )
}

export default Services
