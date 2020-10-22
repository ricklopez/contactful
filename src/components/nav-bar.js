import React from 'react';
import {
  Link
} from "react-router-dom";

class NavBar extends React.Component {
 
  
  render(){
    const linkList = this.props.links.map((l) => {
       return(
        <li key={l.id}>
          <Link to={l.loc}>{l.label}</Link>
        </li>
       );
    });
    return (    
        <nav>
          <ul>
           
            {linkList}
          </ul>
        </nav>
    )
  }
}

export default NavBar;

         