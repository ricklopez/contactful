import React from 'react';
import {AppContext} from './../store/AppContext';
import NavBar from './../components/nav-bar';



class Dashboard extends React.Component {
  
  
  render(){
    const linkItems = [
      {id:1, label: "Contacts", loc: "/contacts"},
      {id:2, label: "Dashboard", loc: "/dashboard"}
    ];
    return (
      <div>
        <NavBar links={linkItems}/>
        <h1>Hello, {this.context.contacts.length}</h1>
        <button className="btn btn-primary" onClick={this.context.updateContact}>Test Method</button>
        <p>{this.context.mode}</p>
        
      </div>
    )
  }
}

Dashboard.contextType = AppContext;
export default Dashboard;


