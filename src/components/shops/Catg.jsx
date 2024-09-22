import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Lakme",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Mayelline",
    },
    {
      cateImg: "./images/category/cat-5.png",
      cateName: "Mac Cosmetic",
    },
    {
      cateImg: "./images/category/cat-6.png",
      cateName: "Urban Decay",
    },
    {
      cateImg: "./images/category/cat-5.png",
      cateName: "Revlon",
    },
    {
      cateImg: "./images/category/cat-6.png",
      cateName: "Fenty Beauty",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands</h1>
          
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
