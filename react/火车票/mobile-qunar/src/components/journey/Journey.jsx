import React, { Component } from 'react';

import switchSVG from '../../resources/image/switch.svg';
import PropTypes from 'prop-types';
export default function Journey(props){
    const {from , to,exchangeFromto}=props;
    // exchangeFromto()
    console.log("props",props);

    console.log("props",);
    // props.exchangeFromto(from,to)

    // console.log("props",props.exchangeFromto(to,from));

    return (
        <div>
            {/* {from}==={to} */}
            {/*.journey>(.journey-station>input.journey-input)+(.journey-switch>img)+  */}
            <div className="journey">
                <div className="journey-station">
                    <input type="text" className="journey-input"
                    readOnly
                    value={from}
                     name="from"/>
                </div>

                <div className="journey-switch" onClick={()=>exchangeFromto()}>
                    <img src={switchSVG} alt=""/>
                </div>
                <div className="journey-station">
                    <input type="text" className="journey-input"
                    readOnly
                    value={to}
                     name="to"/>
                </div>
            </div>
        </div>
    )
}