import React from 'react';
import {
  Link
} from "react-router-dom";

class NavBar extends React.Component {
 
  
  render(){
    const linkList = this.props.links.map((l) => {
       return(
        <li className="nav-item" key={l.id}>
          <Link to={l.loc}>{l.label}</Link>
        </li>
       );
    });
    return (  
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">Contactful</a>
          <ul className="navbar-nav">
            {linkList}
          </ul>
        </nav>
      </div>   
    )
  }
}

export default NavBar;

         