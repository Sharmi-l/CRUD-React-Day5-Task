import React, { useRef, useEffect } from 'react'
import Base from './Base'
import Lottie from 'lottie-web';


// Function for Welcome Page:

const Welcompage = () => {

  //for Lottie animation :

const container = useRef(null)

 useEffect(() => {
  Lottie.loadAnimation({
    container: container.current,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: require('./office.json')

  })

}, [])


  return (
    
    <Base 
    heading = "CRUD APPLICATION"
    description = " 😍🤝Welcome..! to Employees Database 🤝😍"
    
    >

     {/* Lottie animation */}
      <div className='container' ref={container}>   </div>

    </Base>
  )
}

export default Welcompage


