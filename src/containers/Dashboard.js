import React from 'react';
import {AppContext} from './../store/AppContext';
import NavBar from './../components/nav-bar';
import Jumbotron from './../components/jumbotron';
import ListContacts from './../components/list-contacts';



class Dashboard extends React.Component {
  
  
  constructor(props){
    super(props);
    this.state = {
      mode: null,
      intro: {
        header: "Dashboard",
        sub: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or in"
      },
    }
    
    this.modeChange = this.modeChange.bind(this);
  }
  
  componentDidMount(){
    // api call to get the Content for dashboard
  }
  
  modeChange(event){
    if(event.target.id === "Edit"){
      this.setState({mode: "edit"})
    }
    
  }
  
  render(){
    const linkItems = [
      {id:1, label: "Home", loc: "/"},
      {id:2, label: "Dashboard", loc: "/dashboard"}
    ];
    return (
      <div>
        <NavBar links={linkItems}/>
        <Jumbotron intro={this.state.intro} count={this.context.contacts.length} page={'Contacts'}/>
        <div className="container">
          
          <h2>Add New Contact</h2>
          
          <form class="mb-3" onSubmit={this.context.createContact}>
            <div className="form-group">
              <input type="text" onChange={this.context.updateNewContact} className="form-control" id="inputName" placeholder="Enter Name" />
            </div>
            <div className="form-group">
              <input type="text" onChange={this.context.updateNewContact} className="form-control" id="inputTitle" placeholder="Enter Title"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="inputDescription" placeholder="Enter Description"/>
            </div>
            
            <button type="submit" className="btn btn-block btn-primary">Create New Contact</button>
          </form>
          
          <ListContacts contacts={this.context.contacts} modeChange={this.modeChange}/>
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


