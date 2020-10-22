import React from 'react';
import NavBar from './../components/nav-bar';



class Home extends React.Component {
  
  
  render(){
    const linkItems = [
      {id:1, label: "Home", loc: "/"},
      {id:2, label: "Contact", loc: "/contact"},
      {id:3, label: "Sign In", loc: "/sign-in"}
    ];
    
    return (
      <div>
        <NavBar links={linkItems}/>
        <h1>Welcome</h1>
      </div>
    )
  }
}

export default Home;

