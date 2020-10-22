import React from 'react';
import NavBar from './../components/nav-bar';



class Contacts extends React.Component {
  
  
  render(){
    const linkItems = [
      {id:1, label: "Contacts", loc: "/contacts"},
      {id:2, label: "Dashboard", loc: "/dashboard"}
    ];
    
    return (
      <div>
        <NavBar links={linkItems}/>
        <h1>Contacts</h1>
      </div>
    )
  }
}

export default Contacts;

