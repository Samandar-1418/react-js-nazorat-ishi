import React from 'react'
import './imdex.css'
import Slider from '../../slider'

export default function Home() {
  return (
    <div className='hero-container'>
     <div className="text-container">
     <h1 className='title'>We are changing the way people shop</h1>
      <p className='paragraf'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
      <button className='btn'>OUR PRODUCTS</button>
     </div>
     <div className='slider-container'>
       <Slider></Slider>
     </div>

    </div>
  )
}
