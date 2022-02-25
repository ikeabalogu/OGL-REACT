import React from 'react';
import { Outlet,Link } from 'react-router-dom';


class App extends React.Component {
  render() {
      return (
        <div className="App">
        <p>Please choose a link from the list below.</p>
                   <ul>
                       <li><Link to="/products">view Products</Link></li>
                       <li><Link to="/customers">view Customers</Link></li>
                       <li><Link to="/customers/sortedbyname">view Customers  Sorted by Name</Link></li>
                       <li><Link to="/customers/sortedbypostcode">view Customers Sorted by Postcode</Link></li>
                   </ul>
                   <Outlet />
       </div>
      );
  }
}

// function App() {
//   return (
//     <div className="App">
//      <p>Please choose a link from the list below.</p>
//                 <ul>
//                     <li><Link to="/products">view Products</Link></li>
//                     <li><Link to="/customers">view Customers</Link></li>
//                 </ul>
//     </div>
//   );
// }

export default App;
