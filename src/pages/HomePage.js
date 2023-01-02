import React from 'react'
import Navbar from '../components/navbar/Navbar'
import bVideo from '../assets/video/pexels-cottonbro-9695191.mp4'
import Sidebar from '../components/sidebar/Sidebar'
import Main from '../components/main/Main'
function HomePage() {
    const width = window.screen.width
   
    return (
        <>
            <video autoPlay loop muted playsInline style={{ position: 'absolute', right: 0, bottom: 0, zIndex: -1, width: width < 386 ? 'auto' : '100%' }}>
                <source src={bVideo} type='video/mp4' />
            </video>
            <Main />
        </>
    )
}

export default HomePage