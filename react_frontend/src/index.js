import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import CustomerDetails from './customerdetails';
import ProductDetails from './productdetails';
import Products from './products';
import Customers from './customers';
import AddCustomer from './addcustomer';
import UpdateCustomer from './updatecustomer';
import AddProduct from './addproduct';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="customers" element={<Customers />} >
        <Route path=":sorttype" element={<Customers />} />
        </Route>
      <Route path="products" element={<Products />} />
      <Route path="customerdetails" element={<CustomerDetails />}>
        <Route path=":id" element={<CustomerDetails />} />
        </Route>
      <Route path="productdetails" element={<ProductDetails />}>
        <Route path=":id" element={<ProductDetails />} />
      </Route>
      <Route path="addproduct" element={<AddProduct />} />
      <Route path="addcustomer" element={<AddCustomer />} />
      <Route path="updatecustomer/:id/:name/:street/:city/:county/:postcode" element={<UpdateCustomer />} />
      <Route
      path="*"
      element={<main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
