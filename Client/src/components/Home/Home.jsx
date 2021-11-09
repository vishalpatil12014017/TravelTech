import React from 'react'
import Community from './Community'
import Footer from './Footer'
import FooterTop from './FooterTop'
import PlacesToVisit from './PlacesToVisit'
import Slider from './Slider'


function Home() {
    return (
        <div>
            <PlacesToVisit/>
            <Slider/>
            <Community/>
            <FooterTop/>
            <Footer/>
        </div>
    )
}

export default Home
