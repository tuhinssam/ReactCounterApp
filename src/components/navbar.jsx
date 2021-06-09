import React, { Component } from 'react';

//when there is a single function, use stateless functional component like below
const NavBar = (props) => {
    console.log('NavBar rendered')
    return ( <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
              Navbar{" "}
              <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
          </a>
        </div>
      </nav> );
};

//alternatively we can have a class

// class NavBar extends Component {
//     render() { 
//         return ( <nav class="navbar navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//               Navbar <span>&nbsp;</span>
//               <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
//           </a>
//         </div>
//       </nav> );
//     }
// }
 
export default NavBar;