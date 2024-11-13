import Product from "./product";
import products from "../data/products.json";

import React from 'react'

const Products = () => {
    return (
      <div className="products">
          {products.map((item) => (
            <Product
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              discount={item.discount}
              rate={item.rate}
            />
          ))}
        </div>
    );
  };
  
  export default Products;