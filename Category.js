import React from 'react'


const cardData = [
  {
    img_path: "./images/sitelite.png",
    header_text: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it."
  },
  {
    img_path: "./images/airplane.png",
    header_text: "Engrossed listening",
    description: "Park gate sell they west hard for the."
  },
  {
    img_path: "./images/mic.png",
    header_text: "Local Events",
    description: "Barton vanity itself do in it. Preferd to men it engrossed listening." 
  },
  {
    img_path: "./images/bolt.png",
    header_text: "Customization",
    description: "We deliver outsourced aviation services for military customers"
  }
]

const Category = () => {
  const categoryStyle={
    margin: "80px 8%",
    textAlign:"center"
    
  }
  return (
    <section style={categoryStyle}> 
    <p>CATEGORY</p>
    <h2>We Offer Best Services</h2>
    <div style={{display:"flex", justifyContent:"space-between", marginTop:"50px",boxShadow:"5px 5px 15px",}}>
      {
      cardData.map((card) => {
        return (
          <Card img_path={card.img_path} header_text={card.header_text} description={card.description}/>
          
        )
      })
      }
      </div>
    </section>
  )
}

export default Category



export const Card = ({img_path,header_text,description}) => {
  const cardStyle={
    textAlign:"center",
    border:"1px solid black",
    width:"300px",
    height:"300px",
    padding:"40px 20px"
  }
  return (
    <div style={cardStyle}>
      <img src={img_path} alt='' />
      <h2 style={{margin: "10px 0"}}>{header_text}</h2>
      <p>{description}</p>
    </div>
  )
}
