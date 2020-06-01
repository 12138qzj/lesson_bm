import React from "react";
import { Link } from "react-router-dom";


class Beer extends React.Component {
  render() {
    const { name, labels, id } = this.props.details;
    
    return (
      <div className="beer">
        <Link to={`/beer/${id}/${name}`}>
          <h2>{name}</h2>
           <img src={labels?labels.medium:'null.jpg'} alt=""/> 
        </Link>
      </div>
    )
  }
}


export default Beer;