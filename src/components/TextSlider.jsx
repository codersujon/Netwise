import React from 'react'
import { textSliders } from '../data/textSliders'

const TextSlider = () => {
return (
<>
    <section className="ep-text-slider-section pt-120">
        <div className="slider-main d-flex align-items-center">
            <div className="slider-item d-flex align-items-center">
                {
                    textSliders.map((slideItem)=>(
                            <h2 key={slideItem.id} className="title">
                                <img src={slideItem.icon} alt="globe-icon"/>
                                {slideItem.title}
                            </h2>
                    ))
                }
            </div>
            <div className="slider-item d-flex align-items-center">
                {
                    textSliders.map((slideItem)=>(
                            <h2 key={slideItem.id} className="title">
                                <img src={slideItem.icon} alt="globe-icon"/>
                                {slideItem.title}
                            </h2>
                    ))
                }
            </div>
        </div>
    </section>
</>
)
}

export default TextSlider