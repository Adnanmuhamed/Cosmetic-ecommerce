import React from "react"

import { Link } from "react-router-dom"


const Search = ({ CartItem }) => {
  
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            
            <h1 >COSMETIC</h1>
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Try "Lip Balm"' />
            <span style={{marginTop:'-13px'}}>Search</span>
          </div>

          <div className='icon f_flex width'>
           
            <div className='Login'>
              <Link to='/Login'>
              
              <i className="fa fa-user icon-circle  "></i>
              </Link>

            </div>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
