import React from 'react';

export const AppContext = React.createContext();




class AppProvider extends React.Component {
  
 constructor(props){
   super(props);
   this.state = {
     contacts: [],
     newContact: {},
     mode: 'light',
     changeMode: this.changeMode.bind(this),
     createContact: this.createContact.bind(this),
     updateContact: this.updateContact.bind(this)
   };
   
 }
  
  componentDidMount(){
    fetch('https://5f217bf8daa42f0016665c89.mockapi.io/api/v1/contacts')
    .then((res) => res.json())
    .then((data) => this.setState({contacts: data}));
  }
  
  changeMode(){
    this.setState(state => {
      const newMode = state.mode === 'light' ? 'dark' : 'light';
      return {
        mode: newMode
      };
    });
  }

  createContact(event){
    event.preventDefault();
   fetch('https://5f217bf8daa42f0016665c89.mockapi.io/api/v1/contacts',  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state.newContact)
  })
  .then(resp => resp.json())
  .then(data => {
     debugger;
    const newContacts = [...this.state.contacts, this.state.newContact];
    this.setState({newContact:{}, contacts: newContacts});
     
   })

  }
  
  updateContact(event){
    const newContact = this.state.contacts[0];
    newContact.name = "Luke";
    

   fetch(`https://5f217bf8daa42f0016665c89.mockapi.io/api/v1/contacts/2`,  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newContact)
  })
  .then(resp => resp.json())
  .then(data => {
     debugger;
    
    //this.setState({newContact:{}, contacts: newContacts});
     
   })

  }
  
  
  render(){
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}


export default AppProvider;
