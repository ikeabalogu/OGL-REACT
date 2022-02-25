import React, { useState } from 'react';
import { useParams } from 'react-router-dom';




const UpdateCustomer = () => {
    let params = useParams() ;          
        const [customer, setCustomer] = useState({});
        let name,city,county,street,postcode = React.createRef();

        const onSubmitForm = (e) => {
            e.preventDefault();
            console.log('in submit form');
            setCustomer ({ 
                        id: params.id,
                        name: e.name,
                        street: e.street,
                        city: e.city,
                        county: e.county,
                        postcode: e.postcode
                        })
                            
       
            return console.log(customer);
    
          }
          
   
            return (
                <div>

                    <form onSubmit={onSubmitForm.bind()}>
                    <label>
                    Customer Name: 
                     <input type="text" name="name" defaultValue={params.name} ref={name} />
                    </label>
                    <br />  <br />
                    <label>
                    Street: 
                     <input type="text" name="street" defaultValue={params.street} ref={street} />
                    </label>
                    <br />  <br />
                    <label>
                    City: 
                    <input type="text"  name="city" defaultValue={params.city} ref={city} />
                    </label>
                    <br /> <br />
                    <label>
                    County: 
                    <input type="text"  name="county" defaultValue={params.county} ref={county} />
                    </label>
                    <br /> <br />
                    <label>
                    Postcode: 
                    <input type="text" name="postcode" defaultValue={params.postcode} ref={postcode} />
                    </label>
                    <br /> <br />
                    <input type="submit" value="Update" />
                </form>
            </div>
            );
 
    }

export default UpdateCustomer;