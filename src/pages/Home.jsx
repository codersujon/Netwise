import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Features from '../components/Features'
import Services from '../components/Services'
import Counter from '../components/Counter'
import Team from '../components/Team'
import Messages from '../components/Messages'
import CallToAction from '../components/Call_to_Action'
import Testimonial from '../components/Testimonial'

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <Services />
      <Counter />
      <Team />
      <Messages />
      <CallToAction />
      <Testimonial />
    </>
  )
}

export default Home
