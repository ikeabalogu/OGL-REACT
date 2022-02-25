import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

const ProductDetails = () => {
    let params = useParams() ;
    //const [error, setError] = useState(null);
        //const [isLoaded, setIsLoaded] = useState(false);
        const [product, setProduct] = useState([]);
        useEffect(() => {
            fetch("http://localhost:8080/product/"+params.id)
                .then(res => res.json())
                .then(
                    (data) => {
                       // setIsLoaded(true);
                        setProduct(data);
                    },
                )
          }, [])
   
            return (
                <div>
                <h1>{product.sku}</h1>
                <ul>
                     <li key = {product.id} >
                        {product.description}  |  {product.price}
                    </li>
                   
                </ul>
                </div>
            );
        
    }

export default ProductDetails;