import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
 import { Link } from 'react-router-dom';

const Customers = () => {
    let params = useParams() ;
    var url = "";
    if (params.sorttype){
        url = "/"+params.sorttype
    }

        const [customers, setCustomers] = useState([]);
        useEffect(() => {
            fetch("http://localhost:8080/customer"+url)
                .then(res => res.json())
                .then(
                    (data) => {
                        setCustomers(data);
                        //console.log(data);
                    },
                )
          }, [])
   
            return (
                <div>
                <h1>CUSTOMERS</h1>
               <ul>
             {customers.map(customer => (
            <Link
            to={`/customerdetails/${customer.id}`}
            key={customer.id}
            >
                   <li key = {customer.id} >
                       {customer.name}  |  {customer.address}
                   </li>
                   </Link>
                   ))}
                  
                </ul>
                   
                <Link to="/addcustomer">Add new Customer</Link>

            </div>
            );
        
    }

export default Customers;