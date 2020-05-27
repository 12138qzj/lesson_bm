import React,{Component} from 'react';
import CommentList from './CommentList';

export default class CommmentApp extends Component{
    render(){
        return (
            <div className="wrapper">
                CommmentApp
                <CommentList/>,
            </div>
        )
    }
}