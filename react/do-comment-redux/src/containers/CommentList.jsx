import React from 'react';
import {connect} from 'react-redux';
import CommentList from '../components/CommentList';

class CommentListContainer extends React.Component{
    render(){
        // console.log(this.props.comments)
        return(
            
            <CommentList 
                comments={this.props.comments}
            />
        )
    }
}
    const mapStateTopProps=(state)=>{
        return{
            comments:state.comments
        }
    }
    

export default connect(//connect 会生成一个函数
    mapStateTopProps
)(CommentListContainer);