 import React, { useState, useEffect } from 'react';
 import { Link } from 'react-router-dom';


const Products = () => {
        const [products, setProducts] = useState([]);
        useEffect(() => {
            fetch("http://localhost:8080/product")
                .then(res => res.json())
                .then(
                    (data) => {
                       setProducts(data);
                    },
                )
          }, [])
   
            return (
                <div>
               <h1>PRODUCTS</h1>
               <ul>
             {products.map(product => (
             <Link
             to={`/productdetails/${product.id}`}
             key={product.id}
             >
                    <li key = {product.id} >
                        {product.sku}  |  {product.description}  |  {product.price}
                    </li>
                    </Link>
                    ))}
                   
                 </ul>

                 <Link to="/addproduct">Add new Product</Link>
            </div>
            );
        
    }

export default Products;