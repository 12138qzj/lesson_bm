import React from "react";
import Beer from './Beer';
// StatefullComponent  StatelessComponent

class Results extends React.Component {
  render() {
    if(this.props.loading){
        return(
          <div>
            Loading...
          </div>
        )
      }
      console.log(this.props.beers);
    return (
      <div className="results">
          <div className="beers">
              {this.props.beers.map((details,i)=><Beer details={details} key={details.id}/>)}
          </div>
      </div>
    )
  }
}

export default Results;