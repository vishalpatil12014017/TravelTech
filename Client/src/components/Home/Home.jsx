import React from 'react'
import Community from './Community'
import Footer from './Footer'
import FooterTop from './FooterTop'
import PlacesToVisit from './PlacesToVisit'
import Slider from './Slider'
import Navbar from './Navbar'


function Home() {
    return (
        <div>
            <Navbar/>
            <PlacesToVisit/>
            <Slider/>
            <Community/>
            <FooterTop/>
            <Footer/>
        </div>
    )
}

export default Home
