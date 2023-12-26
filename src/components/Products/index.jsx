
import React, { useState, useEffect } from 'react'
import Input from './Input'
import './index.css'
import Select from './select';
export default function Products() {
  const data = {
    all: 'all',
    Tables: 'Tables',
    Chairs: 'Chairs',
    Kids:'Kids',
    Sofas:'Sofas',
    Beds:'Beds',
    Modenza:'Modenza',
    Luxora:'Luxora',
    Artifex :'Artifex',
    Comfora:'Comfora',
    Homestead:'Homestead',
    Search:'a-z',
    Paradox:'z-a',
    Hign:'hign',
    Low:'low'
  };
  
  const [featuredProducts, setFeaturedProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://strapi-store-server.onrender.com/api/products');
        const result = await response.json();
        setFeaturedProducts(result.data); 
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
        <div className="filter-container">
         <Input></Input>
         
         <Select data={data}></Select>
        </div>
        <div className='card-wrapper card-wrapper-product'>
          {Array.isArray(featuredProducts) && featuredProducts.map((product, index) => {
            let price = product.attributes.price.toString();
            price = price.slice(0, -2) + '.' + price.slice(-2);
            price = parseFloat(price);
            return (
              <div className="card card-product" key={index}>
                <img src={product.attributes.image} alt={product.attributes.name} />
                <h3>{product.attributes.title}</h3>

                <p>{'$' + price}</p>


              </div>
            )
          })}
        </div>
    </div>
  )
}
