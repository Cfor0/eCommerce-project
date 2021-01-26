import React from 'react'
import NavBar from './NavBar';
import SlideShow from './SlideShow';
import Footer from './Footer'
function Home() {
    return (
        <div className='body'>
            <NavBar />
            <div className='content'>
                <SlideShow />
            </div>
            <Footer />
        </div>
    )
}

export default Home;