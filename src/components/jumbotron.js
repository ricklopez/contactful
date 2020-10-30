import React from 'react';
import {
  Link
} from "react-router-dom";

class Jumbotron extends React.Component {
 
  
  render(){
   
    return (    
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">{this.props.intro.header}</h1>
            {this.props.count && 
              <p className="lead text-muted">Total {this.props.page}: {this.props.count}</p>
            }
            <p className="lead">{this.props.intro.sub}</p>
          </div>
        </div>
         
    )
  }
}

export default Jumbotron;

         