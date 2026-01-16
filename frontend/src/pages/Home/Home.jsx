import React, { useEffect } from 'react'
import About from '../../sections/About/About'
import Projects from '../../sections/Projects/Projects'
import Contact from '../../sections/Contact/Contact'
import Hero from '../../sections/Hero/Hero'
import useAxios from '../../hooks/useAxios'

const Home = () => {

    return (
        <div>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home