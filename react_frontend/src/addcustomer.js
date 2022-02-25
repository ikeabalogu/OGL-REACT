import React, { useState } from 'react';

//validate postcode

const AddCustomer = () => {

        const [customer, setCustomer] = useState({name: '', street: '', city: '', county: '', postcode: ''});

       const handleChange = (e) => {
            setCustomer (customer => ({ ...customer,
                [e.target.name]: e.target.value.trim()
            }))
          }

        const handleSubmit = (e) => {
            e.preventDefault()
    
            console.log(customer);
            fetch("http://localhost:8080/customer", {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' ,
                    'Access-Control-Allow-Origin': '*'
                     },
                body: JSON.stringify(customer)
            }).then(function(response) {
                setCustomer ({name: '', street: '', city: '', county: '', postcode: ''});
                console.log(response);
                return response.json();
              });     
          }
   
            return (
                <div>
                    <form onSubmit={handleSubmit}>
                    <label>
                    Customer Name: 
                     <input type="text" name="name" value={customer.name} onChange={handleChange} />
                    </label>
                    <br />  <br />
                    <label>
                    Street: 
                     <input type="text" name="street" value={customer.street} onChange={handleChange} />
                    </label>
                    <br />  <br />
                    <label>
                    City: 
                    <input type="text"  name="city" value={customer.city} onChange={handleChange} />
                    </label>
                    <br /> <br />
                    <label>
                    County: 
                    <input type="text"  name="county" value={customer.county} onChange={handleChange} />
                    </label>
                    <br /> <br />
                    <label>
                    Postcode: 
                    <input type="text"  name="postcode" value={customer.postcode} onChange={handleChange} />
                    </label>
                    <br /> <br />
                    <input type="submit" value="Add Customer" />
                </form>

            </div>
            );
        
    }

export default AddCustomer;