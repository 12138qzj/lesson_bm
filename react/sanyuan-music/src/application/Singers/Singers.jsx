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
import { categoryTypes, alphaTypes } from '../../api/config';
import Horizen from '../../baseUI/horizen-item/index'

// import moduleName from '../../api/config'

const Singers = (props) => {


    const {category,alpha}=props;
    console.log(props);
    // const {recommendList}=props

    const handleUpdateAlpha=()=>{

    }

    const handleUpdateCategory=()=>{
        
    }
    return (
        <NavContainer>
            <Horizen title={"分类(默认热门):"} list={ categoryTypes } handleClick={(v) => handleUpdateCategory(v)} oldValue={category}></Horizen>
            <Horizen title={"首字母:"} list={ alphaTypes } handleClick={(v) => handleUpdateAlpha(v)} oldValue={alpha}></Horizen>
     

        </NavContainer>
    )
}

const mapStateToProps = (state) => ({
    alpha: state.singers.alpha,
    category: state.singers.category,
    // singerList: statesingers.singerList,
})

const mapDispatchToProps = (dispatch)=>{
    
    return({
        dispatch
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Singers))
