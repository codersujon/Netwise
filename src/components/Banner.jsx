import React, {useState} from 'react'
import BannerImage from '../assets/img/banner/banner-img-1.png'
import Bannner_Shape1 from '../assets/img/shape/banner-shape-1.svg'
import Bannner_Shape2 from '../assets/img/shape/banner-shape-2.png'

const Banner = () => {

    const [videoActive, setVideoActive] = useState(false);

  return (
    <section className="ep-banner-section position-relative overflow-hidden custom-wrapper-hover">
        <div className="banner-shape position-absolute top-50 translate-middle-y z-0">
            <img src={Bannner_Shape2} alt="banner-shape"/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 align-self-center">
                    <div className="banner-text position-relative z-2">
                    <img src={Bannner_Shape1} alt="banner-shape"
                        className="position-absolute banner-title-shape"/>
                    <h1 className="banner-title heading-style1 split-text right">Technology That Powers the Future</h1>
                    <p>lorem ipsum dolor sit amet consectetur. Facilisi cursus vulputate vestibulum etiam rhoncus </p>
                    <div className="banner-buttons">
                        <a href="about.html" className="theme-btn position-relative d-inline-flex align-items-center">
                        Read More
                        <span className="arrow">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_4443_62)">
                                <path
                                d="M13.4317 12.5381C13.4967 12.4215 13.535 12.2898 13.5367 12.1506L13.5733 7.95396C13.5758 7.60896 13.2992 7.32646 12.9483 7.32312C12.6058 7.32312 12.3258 7.59896 12.3233 7.94229L12.2975 10.8665L7.48917 6.05813C7.245 5.81396 6.84917 5.81396 6.605 6.05813C6.36083 6.30229 6.36083 6.69812 6.605 6.94229L11.4158 11.7531L8.59083 11.7831C8.245 11.7873 7.96833 12.0698 7.9725 12.4148C7.97583 12.7581 8.255 13.0331 8.60417 13.0331C8.60417 13.0331 12.6783 12.989 12.685 12.989C12.9967 12.9856 13.2842 12.8023 13.4325 12.539L13.4317 12.5381Z"
                                fill="white" />
                                <path
                                d="M9.99984 19.2219C9.29484 19.2219 8.59818 19.2094 7.91151 19.1853C4.06734 19.0503 0.949844 15.9328 0.81401 12.0869C0.789844 11.3994 0.777344 10.7036 0.777344 9.99859C0.777344 9.29359 0.789844 8.59776 0.81401 7.91026C0.949844 4.06609 4.06734 0.948594 7.91151 0.813594C9.28651 0.76526 10.7148 0.76526 12.0882 0.813594C15.9323 0.948594 19.0498 4.06609 19.1857 7.91193C19.2098 8.59859 19.2223 9.29526 19.2223 10.0003C19.2223 10.7053 19.2098 11.4011 19.1857 12.0886C19.0498 15.9336 15.9323 19.0511 12.0882 19.1869C11.4015 19.2111 10.7048 19.2236 9.99984 19.2236V19.2219ZM9.99984 2.02609C9.31068 2.02609 8.62818 2.03859 7.95568 2.06276C4.76401 2.17443 2.17568 4.76276 2.06318 7.95443C2.03984 8.62776 2.02734 9.30859 2.02734 9.99859C2.02734 10.6886 2.03984 11.3703 2.06318 12.0428C2.17568 15.2344 4.76401 17.8236 7.95568 17.9344C9.30151 17.9836 10.699 17.9836 12.044 17.9344C15.2365 17.8228 17.8248 15.2344 17.9365 12.0428C17.9598 11.3694 17.9723 10.6886 17.9723 9.99859C17.9723 9.30859 17.9598 8.62693 17.9365 7.95443C17.824 4.76276 15.2357 2.17359 12.044 2.06276C11.3707 2.03859 10.689 2.02609 9.99984 2.02609Z"
                                fill="white" />
                            </g>
                            </svg>
                        </span>
                        </a>
                        <button onClick={() => setVideoActive(true)} href="https://www.youtube.com/watch?v=PkkV1vLHUvQ"
                        className="vidplay border-0 bg-transparent play-now-btn d-inline-flex align-items-center">
                            <span className="icon d-flex align-items-center justify-content-center rounded-pill"><i
                                className="fas fa-play"></i></span>
                            <span className="text">Play Now</span>
                        </button>
                    </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-10 mx-auto ps-xl-0">
                    <div className="banner-image custom-inner-hover">
                    <img src={BannerImage} alt="banner-img" className="img-fluid w-100"/>
                    </div>
                </div>
            </div>
        </div>
        <span className="custom-shadown position-absolute rounded-pill"></span>

        {/* iframe popup */}
        <div className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"} onClick={() => setVideoActive(false)}>
            <div className="video-inner">
                <div className="video-container" onClick={(e) => e.stopPropagation()}>
                    {videoActive &&
                        <iframe className='video' src="https://www.youtube.com/embed/i2CqOZNnFkA" title="তিতির পাখির ৩টি উপদেশ শুনে ধনী হতে পারেন! Professor Mokhter Ahmad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    }
                    <button aria-label="close video popup" className="close-video-popup" onClick={() => setVideoActive(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Banner
