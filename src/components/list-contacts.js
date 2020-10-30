import React from 'react';
import {
  Link
} from "react-router-dom";

class ListContacts extends React.Component {
 
  
  render(){
    const contactsList = this.props.contacts.map((c) => {
       return(
         <tr  key={c.id}>
              <th scope="row">{c.id}</th>
              <td>{c.name}</td>
              <td>{c.title}</td>
              <td>{c.description}</td>
            </tr>
       );
    });
   
    return (    
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {contactsList}
          </tbody>
        </table>
         
    )
  }
}

export default ListContacts;

         