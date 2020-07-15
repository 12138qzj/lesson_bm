import React, { Component } from 'react';

import PropTypes from 'prop-types';
export default function Journey(props){
    const {from , to}=props;
    return (
        <div>
            {from }==={to}
        </div>
    )
}