// import React, { PureComponent,memo } from 'react';
// import { connect } from 'react-redux';

// function Singer(props){
//     console.log(props);
//     const {recommendList}=props
//     return(
//         <>
//             Singer

//         </>
//     )
// }
// export default connect(mapStateTopProps,mapDispatchToProps)(memo( Singer));

import React, { Component,memo } from 'react'
import { connect } from 'react-redux'
import {NavContainer} from './singers.style.js'

import moduleName from '../../api/config'

const Singers = (props) => {
    console.log(props);
    // const {recommendList}=props

    const handleUpdateAlpha=()=>{

    }

    const handleUpdateCategory=()=>{
        
    }
    return (
        <NavContainer>
            {/* <Horizen title="分" />

            <Horizen title="首字母:"/> */}

            Singerf
        </NavContainer>
    )
}

const mapStateToProps = (state) => ({
    state,
})

const mapDispatchToProps = (dispatch)=>{
    
    return({
        dispatch
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Singers))
