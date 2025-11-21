import React from 'react'
import SectionTitle from './SectionTitle'
import { testimonialsData } from '../data/testimonial'

// Import Swiper Slider React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';



const Testimonial = () => {
return (
<>
    <section className="ep-testimonial-section pt-120">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-6">
                    <div className="testimonial-info">

                        <SectionTitle SectionTitleClass="mb-20 text-start" title="Elevating Business with IT Excellence" subtitle="clients
                                testimonials"/>

                        <div className="short-info">
                            <p>Maintenance, ensuring that systems run smoothly and efficiently of computer Information
                                Technology
                                is a field that man encompasses the use development Information Technology</p>
                        </div>
                        <div className="call-us">
                            <a href="tel:(704)555-0127" className="call-us-btn style2 d-flex align-items-center gap-3">
                                <span className="icon d-flex justify-content-center
                       align-items-center">
                                    <i className="fa-solid fa-phone"></i>
                                </span>
                                <div className="info">
                                    <span className="title text-uppercase">CALL US ANYTIME</span>
                                    <h4 className="number">(704) 555-0127</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="testimonial-area testimonial-slider rounded-30">

                    {/* testimonial data loop start */}

                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            speed={1000}
                            modules={[Autoplay]}
                            navigation={false}
                        >
                                {
                                    testimonialsData.map((item) =>(
                                        <SwiperSlide key={item.id}>
                                            <div className="testimonial-item d-flex flex-column">
                                                <div className="rating">
                                                   {/* star */}

                                                   {[...Array(5)].map((_, index) => (
                                                        <i key={index} className={`fas fa-star ${index >= item.rating ? "no-rate" : ""}`}></i>
                                                   ))}

                                                </div>
                                                <div className="details">
                                                    <p>{item.details}</p>
                                                </div>
                                                <div className="user-info d-flex align-items-center justify-content-between gap-4">
                                                    <div className="user d-flex align-items-center">
                                                        <div className="img overflow-hidden rounded-pill flex-shrink-0">
                                                            <img src={item.image} alt="testimonial-img"
                                                                className="w-100 h-100 object-fit-cover" />
                                                        </div>
                                                        <div className="text">
                                                            <h4 className="name">{item.name}</h4>
                                                            <p className="designation">{item.designation}</p>
                                                        </div>
                                                    </div>
                                                    <div className="quote">
                                                        <img src={item.quote_icon} alt="quote-icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                        
                        </Swiper>

                    {/* testimonial data loop end */}

                    </div>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Testimonial