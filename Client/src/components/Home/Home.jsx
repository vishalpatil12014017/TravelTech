import React from 'react'
import Community from './Community'
import Footer from './Footer'
import FooterTop from './FooterTop'
import PlacesToVisit from './PlacesToVisit'
import Slider from './Slider'
import Navbar from './Navbar'
import Experiance from './Experiance'
import Payoptions from './Payoptions'
import Aazadi from './Aazadi'
import Carousel from './Carousel'
import Travel from './Travel'
function Home({vehicles,places}) {
        return (
            <div>
                <Navbar />
                <Experiance />
                <Payoptions />
                <Aazadi />
                <Carousel vehicles={vehicles}/>
                <Travel/>
                <PlacesToVisit data={places}/>
                <Slider />
                <Community />
                <FooterTop />
                <Footer />
            </div>
        )
    }

    export default Home
