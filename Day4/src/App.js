import React from 'react'
import './App.css'


export default function App() {
  const Header = () => {
    return (
      <div className='header'>
        <div className='logo-container'>
          <img src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=2000" 
          alt="Hello" className='logo'/>
        </div>
        
        <div className='nav-items'>
          <ul  >
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      
        </div>
    )
  }

  const fooddata = [
    {
      restaurant:"Rathi Foods",
      img:"https://lh3.googleusercontent.com/lzCNB09jQm5M9kuj3-fueWAeVThLmrF8-TJKtVDaYS4NOU2C1qQnZ3tiJ4kA0czhGTWsCpkHd3lkeyFZtFh81Q=w640-h640-c-rw-v1-e365",
      cuisine:["Biriyani", "South Indian", "Asian"],
      reviews:"4.5 stars",
      duration:"40 minutes"
    },
    {
      restaurant:"Mathi Foods",
      img:"https://lh3.googleusercontent.com/lzCNB09jQm5M9kuj3-fueWAeVThLmrF8-TJKtVDaYS4NOU2C1qQnZ3tiJ4kA0czhGTWsCpkHd3lkeyFZtFh81Q=w640-h640-c-rw-v1-e365",
      cuisine:["Biriyani", "South Indian", "Asian"],
      reviews:"4.5 stars",
      duration:"40 minutes"
    }, 
    {
      restaurant:"Rathi Foods",
      img:"https://lh3.googleusercontent.com/lzCNB09jQm5M9kuj3-fueWAeVThLmrF8-TJKtVDaYS4NOU2C1qQnZ3tiJ4kA0czhGTWsCpkHd3lkeyFZtFh81Q=w640-h640-c-rw-v1-e365",
      cuisine:["Biriyani", "South Indian", "Asian"],
      reviews:"4.5 stars",
      duration:"40 minutes"
    },
    {
      restaurant:"Mathi Foods",
      img:"https://lh3.googleusercontent.com/lzCNB09jQm5M9kuj3-fueWAeVThLmrF8-TJKtVDaYS4NOU2C1qQnZ3tiJ4kA0czhGTWsCpkHd3lkeyFZtFh81Q=w640-h640-c-rw-v1-e365",
      cuisine:["Biriyani", "South Indian", "Asian"],
      reviews:"4.5 stars",
      duration:"40 minutes"
    }, 
    {
      restaurant:"Rathi Foods",
      img:"https://lh3.googleusercontent.com/lzCNB09jQm5M9kuj3-fueWAeVThLmrF8-TJKtVDaYS4NOU2C1qQnZ3tiJ4kA0czhGTWsCpkHd3lkeyFZtFh81Q=w640-h640-c-rw-v1-e365",
      cuisine:["Biriyani", "South Indian", "Asian"],
      reviews:"4.5 stars",
      duration:"40 minutes"
    },
    {
      restaurant:"Mathi Foods",
      img:"https://lh3.googleusercontent.com/lzCNB09jQm5M9kuj3-fueWAeVThLmrF8-TJKtVDaYS4NOU2C1qQnZ3tiJ4kA0czhGTWsCpkHd3lkeyFZtFh81Q=w640-h640-c-rw-v1-e365",
      cuisine:["Biriyani", "South Indian", "Asian"],
      reviews:"4.5 stars",
      duration:"40 minutes"
    }, 
    {
      restaurant:"Rathi Foods",
      img:"https://lh3.googleusercontent.com/lzCNB09jQm5M9kuj3-fueWAeVThLmrF8-TJKtVDaYS4NOU2C1qQnZ3tiJ4kA0czhGTWsCpkHd3lkeyFZtFh81Q=w640-h640-c-rw-v1-e365",
      cuisine:["Biriyani", "South Indian", "Asian"],
      reviews:"4.5 stars",
      duration:"40 minutes"
    },
    {
      restaurant:"Mathi Foods",
      img:"https://lh3.googleusercontent.com/lzCNB09jQm5M9kuj3-fueWAeVThLmrF8-TJKtVDaYS4NOU2C1qQnZ3tiJ4kA0czhGTWsCpkHd3lkeyFZtFh81Q=w640-h640-c-rw-v1-e365",
      cuisine:["Biriyani", "South Indian", "Asian"],
      reviews:"4.5 stars",
      duration:"40 minutes"
    }, 
    {
      restaurant:"Rathi Foods",
      img:"https://lh3.googleusercontent.com/lzCNB09jQm5M9kuj3-fueWAeVThLmrF8-TJKtVDaYS4NOU2C1qQnZ3tiJ4kA0czhGTWsCpkHd3lkeyFZtFh81Q=w640-h640-c-rw-v1-e365",
      cuisine:["Biriyani", "South Indian", "Asian"],
      reviews:"4.5 stars",
      duration:"40 minutes"
    },
    {
      restaurant:"Mathi Foods",
      img:"https://lh3.googleusercontent.com/lzCNB09jQm5M9kuj3-fueWAeVThLmrF8-TJKtVDaYS4NOU2C1qQnZ3tiJ4kA0czhGTWsCpkHd3lkeyFZtFh81Q=w640-h640-c-rw-v1-e365",
      cuisine:["Biriyani", "South Indian", "Asian"],
      reviews:"4.5 stars",
      duration:"40 minutes"
    }, 

  ]
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
  const Body = () => {
    return (
      <div className='body'>
        <div className='search'>Search</div>
        <div className='food-container'>
          {
            fooddata.map(food => <Foodcard resdata={food} />)
          }            
        </div>
      </div>
    )
  }
  return (
    <div className='app'>
    <Header />
    <Body />
    </div>
  )
}
