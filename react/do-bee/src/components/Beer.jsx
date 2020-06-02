import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//每一个啤酒的的框（组件）
class Beer extends React.Component {
  static propTypes = {
    details: PropTypes.object.isRequired
  }

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
