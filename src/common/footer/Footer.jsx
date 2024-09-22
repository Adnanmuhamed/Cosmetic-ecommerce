import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
    
      
    
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>COSMETIC</h1>
            <p>Embrace your beauty with cosmetic Glow, where innovation meets nature. Our products are crafted with carefully sourced ingredients to enhance your natural features while nurturing your skin. From vibrant lip colors to luxurious skincare, each item is designed to empower self-expression and confidence. Discover your glow and celebrate every shade of you!</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Bellandur Station Road, Kadubeesanahalli ,Bengaluru,Karnatak-560103</li>
              <li>Email: support@cosmetic.com</li>
              <li>Phone: +91 8747629871</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
