import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Nav extends Component{

    render(){
        return (
            <nav className="nav-wrapper teal lighten-2">
            <div className="container">
            <div className="left">
              <Link to="/" className="brand-logo">
                   JustDOit
              </Link>
              </div>
              <ul className="right hide-on-med-and-down">
              <li> <NavLink to='/signup'>SignUp</NavLink></li>
              <li> <NavLink to='/signin'>SignIn</NavLink></li>
              <li> <NavLink to='/addProduct'>Add Product</NavLink></li>
              <li> <NavLink to='/details' className="btn btn-floating  orange darken-3">You</NavLink></li>
              </ul>
              
            </div>
          </nav>
        )
    }
}

export default Nav;