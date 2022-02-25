import React, { useState } from 'react';

const AddProduct = () => {
    
        const [product, setProduct] = useState({sku: '', price: '', description: ''});

       const handleChange = (e) => {
            setProduct (product => ({ ...product,
                [e.target.name]: e.target.value.trim()
            }))
          }

        const handleSubmit = (e) => {
            e.preventDefault()
    
            console.log(product);
            fetch("http://localhost:8080/product", {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' ,
                    'Access-Control-Allow-Origin': '*'
                     },
                body: JSON.stringify(product)
            }).then(function(response) {
                setProduct ({sku: '', price: '', description: ''});
                console.log(response);
                return response.json();
              });     
          }
   
            return (
                <div>
                    <form onSubmit={handleSubmit}>
                    <label>
                    SKU: 
                     <input type="text" name="sku" value={product.sku} onChange={handleChange} />
                    </label>
                    <br />  <br />
                    <label>
                    Description: 
                     <input type="text" name="description" value={product.description} onChange={handleChange} />
                    </label>
                    <br />  <br />
                    <label>
                    Price: 
                    <input type="text"  name="price" value={product.price} onChange={handleChange} />
                    </label>
                    <br /> <br />
                   
                    <input type="submit" value="Add product" />
                </form>

            </div>
            );
        
    }

export default AddProduct;