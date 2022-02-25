import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


const CustomerDetails = () => {
    let params = useParams() ;
        const [customer, setCustomer] = useState([]);
        useEffect(() => {
            fetch("http://localhost:8080/customer/"+params.id)
                .then(res => res.json())
                .then(
                    (data) => {
                       // setIsLoaded(true);
                        setCustomer(data);
                        console.log(data);
                    },
                )
          }, [])
   
            return (
                <div>
                <h1>{customer.name}</h1>
                <ul>
                     <li key = {customer.id} >
                          |  {customer.address}
                    </li>
                   
                </ul>

            <Link to={`/updatecustomer/${customer.id}/${customer.name}/${customer.street}/${customer.city}/${customer.county}/${customer.postcode}`} > Update Customer</Link>
                </div>
            );
        
    }

export default CustomerDetails;