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
import { useState } from 'react'
function Home({vehicles,places}) {
    const [formdata, setFormdata] = useState({
        EndingDate: "",
        EndingPoing: "",
        StartingDate: "",
        StartingPoing: "",

    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formdata,
            [name]: value,
        })
    };
   

        return (
            <div>
                <Experiance handleChange={handleChange}/>
                <Payoptions />
                <Aazadi />
                <Carousel vehicles={vehicles} />
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
