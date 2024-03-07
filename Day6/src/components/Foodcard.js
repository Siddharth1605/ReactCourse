import React from 'react'

const Foodcard = ({resdata}) => {
    //image, name of restaurant, start rating, noame of dish, cuisine, delivery time

    const {img, restaurant, cuisine, reviews, duration} = resdata

    return (
      <div className='food-card'>
        <img src={img} alt='food'
          className='food-img'/>
        <h3>{restaurant}</h3>
        <h4>{cuisine.join(", ")}</h4>
        <h4>{reviews}</h4>
        <h4>{duration}</h4>
      </div>
    )
  }

  export default Foodcard