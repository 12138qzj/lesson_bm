import React, { useEffect,useState ,memo} from 'react';
import {connect} from 'react-redux';
// class Recomment extends Component {
//     state = {  }
//     render() { 
//         return ( 
//             <div>
//                 Recomment
//             </div>
//          );
//     }
// }
 
// export default Recomment;
function Recomment(props){
    console.log(props);
    const {recommendList}=props
    return(
        <>
            Recomment
            {recommendList}

        </>
    )
}


const mapStateToProps=(state)=>({
    recommendList:state.recommend.recommendList
})
const mapDispatchToProps=(dispatch)=>{
    return{

    }

}

export default  connect(mapStateToProps,mapDispatchToProps)(memo(Recomment,[]))