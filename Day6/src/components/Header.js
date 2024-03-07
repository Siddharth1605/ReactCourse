import React from 'react'

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

export default Header