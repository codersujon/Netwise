import React from 'react'
import SectionTitle from './SectionTitle';

import faqImg1 from '../assets/img/faq/faq-img-1.png'
import faqImg2 from '../assets/img/faq/faq-img-2.png'
import groupPersonIcon from '../assets/img/icons/group-person-icon.svg'
import OdometerCounter from './OdometerCounter'
import { faqs } from '../data/faqs';

const Faq = () => {
    return (
        <>
            <section className="ep-faq-section pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">

                            <SectionTitle 
                                title="Empowering Progress Through Technology" 
                                subtitle="Ask Question" 
                                SectionTitleClass = "mb-30 text-start"
                                titleClass="split-text right"
                            />

                            <div className="faq-body">
                                <div className="accordion" id="accordionExample">
                                    {
                                        faqs.map((item, index)=>(
                                            <div key={item.id} className="accordion-item">
                                                <div className="accordion-header" id="headingOne">
                                                    <button className={`accordion-button ${index === 0 ? 'collapsed' : ""}`} type="button" data-bs-toggle="collapse"
                                                        data-bs-target={`#collapse${item.id}`} aria-expanded={index === 0 ? "true" : "false"} aria-controls={`collapse${item.id}`}>
                                                        { item.id }.&nbsp;{ item.question }
                                                    </button>
                                                    <div id={`collapse${item.id}`} className={`"accordion-collapse collapse ${index === 0 ? "show" : ""}"`}
                                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p>{ item.answer }</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-images">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="single-img reveal left rounded-20 overflow-hidden">
                                            <img src={faqImg1} alt="faq-img" className="img-fluid w-100" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single-img reveal right rounded-20 overflow-hidden">
                                            <img src={faqImg2} alt="faq-img" className="img-fluid w-100" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div
                                            className="clients rounded-20 text-center d-flex align-items-center justify-content-center flex-column">
                                            <img src={groupPersonIcon} alt="group-person-icon" />
                                            <div className="client-number d-flex align-items-center justify-content-center">
                                                <OdometerCounter value={7} /> k+
                                            </div>
                                            <h5 className="trust">Trusted Clients</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq