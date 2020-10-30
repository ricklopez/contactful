import React from 'react';
import NavBar from './../components/nav-bar';
import Jumbotron from './../components/jumbotron';



class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      intro: {
        header: "Hola, Contactful",
        sub: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or in"
      },
    }
  }
  
  
  
  render(){
    const linkItems = [
      {id:1, label: "Home", loc: "/"},
      {id:2, label: "Contact", loc: "/contact"},
      {id:3, label: "Dashboard", loc: "/app"}
    ];
    
    return (
      <div>
        <NavBar links={linkItems}/>
        <Jumbotron intro={this.state.intro}/>
  
      </div>
    )
  }
}

export default Home;

