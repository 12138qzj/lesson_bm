import React, { Component } from 'react'

class Commnet extends Component{
    render(){
        console.log(this.props)
        let {comment}=this.props;
        return(
           <div className="data-werper">
               {/* {comment.username}:{comment.content}            */}
               <div className="top">
                   <span className="Specialization">专栏</span><span>{comment.username}</span><span>{comment.username}</span><span>{comment.username}</span>
               </div>
               <div className="center commondiv">
                   <span>Demo正式发布，彻底弄明白和node的区别</span>
               </div>
               <div className="bottom commondiv">
                    <ul>
                        <li>
                            <a href="javascript:;">
                                <img  src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" class="icon"/>
                                <span>点赞</span>
                            </a>
                        </li>
                        <li> 
                            <a href="javascript:;">
                                <img data-v-ecbf465a="" src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg" class="icon"/>
                                <span>评论</span>
                            </a>
                        </li>
                           <li></li>
                    </ul>
                  
                   
            </div>
                
           </div>     
        )
    }
}
export default Commnet;