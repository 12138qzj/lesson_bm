import React ,{Component } from 'react';
import PropTypes from 'prop-types';


class Couter extends Component {
    render(){
        const { value, onIncrement, onDecrement }=this.props;
        return(
            <div>
                {value}
                <button onClick={onIncrement}>加</button>
                <button onClick={onDecrement}>减</button>
            </div>
        )
    }
}
Couter.Prototype={
    value:PropTypes.number.isRequired,
    onIncrement:PropTypes.func.isrequired,
    onDecrement:PropTypes.func.isRequired,
}
export default Couter;