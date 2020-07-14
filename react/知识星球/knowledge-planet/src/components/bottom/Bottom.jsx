import React, { Component } from 'react';
import './bottom.css';
class Bottom extends Component {
    state = {}
    render() {
        return (
            <div className="Botton_warper">
                <div className="icon planet">
                    <span>
                        星球
                    </span>
                </div>
                <div className="icon planet">
                    <span>
                        动态 
                    </span>
                </div>
                <div className="icon planet">
                    <span>
                        发现
                    </span>
                </div>
                <div className="icon planet">
                    <span>
                        我
                    </span>
                </div>
                {/* <div className="icon dynamic">

                </div>
                <div className="icon find">

                </div>
                <div className="icon my">

                </div> */}
            </div>
        );
    }
}

export default Bottom;