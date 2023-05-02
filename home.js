import React from 'react'
import Header  from '../component/Header'
import Jaddo from '../component/Jaddo'
import Category from '../component/Category'

const sectionStyle = {
    height:"100vh" ,
    backgroundImage: "url(./images/upperdecore.png)", 
    backgroundRepeat:"no-repeat",
    backgroundPosition:"right top",
    // border: "1px solid red" 

    
}

const HomePage= () => {
  return (
    <>
    <section className='' style={sectionStyle} >
        <Header />
        <Jaddo />
       
      </section>
      <section>
      <Category/>
      </section>
      </>
  )
}

export default HomePage