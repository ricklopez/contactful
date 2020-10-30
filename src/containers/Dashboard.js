import React from 'react';
import {AppContext} from './../store/AppContext';
import NavBar from './../components/nav-bar';
import Jumbotron from './../components/jumbotron';
import ListContacts from './../components/list-contacts';



class Dashboard extends React.Component {
  
  
  constructor(props){
    super(props);
    this.state = {
      intro: {
        header: "Hola, Contactful",
        sub: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or in"
      },
    }
  }
  
  componentDidMount(){
    // api call to get the Content for dashboard
  }
  
  
  render(){
    const linkItems = [
      {id:1, label: "Contacts", loc: "/contacts"},
      {id:2, label: "Dashboard", loc: "/dashboard"}
    ];
    return (
      <div>
        <NavBar links={linkItems}/>
        <Jumbotron intro={this.state.intro}/>
        <div className="container">
          <h2>{this.context.contacts.length}</h2>
          <form className="form-inline" onSubmit={this.context.createContact}>
            <div className="form-group mb-2">
              <label for="staticEmail2" className="sr-only">Email</label>
              <input type="text" className="form-control-plaintext" id="staticEmail2" value="email@example.com"/>
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <label for="inputPassword2" className="sr-only">Password</label>
              <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Create Contact</button>
          </form>
          <ListContacts contacts={this.context.contacts}/>
        </div>
        <hr/>
        <div className="container">
          <button className="btn btn-primary" onClick={this.context.updateContact}>Test Method</button>
          <p>{this.context.mode}</p>
        </div>
      </div>
    )
  }
}

Dashboard.contextType = AppContext;
export default Dashboard;


