import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  
  const [Makeup, setMakeup] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
           
          </div>

          <div className='navlink'>
            <ul className={Makeup ? "nav-links-Makeup" : "link f_flex capitalize"} onClick={() => setMakeup(false)}>
             
              <li>
                <Link to='/'>HOME</Link>
              </li>
              <li>
                <Link to='/face'>FACE</Link>
              </li>
              <li>
                <Link to='/nails'>NAILS</Link>
              </li>
              <li>
                <Link to='/skincare'>SKINCARE</Link>
              </li>
              <li>
                <Link to='/accesories'>ACCESORIES</Link>
              </li>
              <li>
                <Link to='/lips'>LIPS</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMakeup(!Makeup)}>
              {Makeup ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
