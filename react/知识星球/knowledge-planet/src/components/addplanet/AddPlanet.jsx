import React, { Component } from 'react';
import StorageUtils from '../../Utils/Storage';
import './addplanet.css'
import { withRouter } from 'react-router';
class AddPlanet extends Component {
    constructor(){
        super()
        // const ref = React.createRef();
    this.addinput=React.createRef();  
    this.btn=React.createRef();    

    }

    state = {  }
    onAdd(){
        if(this.addinput.current.value) {
            let itme={
                planetname:this.addinput.current.value,
                author:"七个",          
                }
            let  data=StorageUtils.getUser()
            let newdata=data+";"+`{planetname:'${this.addinput.current.value}',author:'七个'}`
            StorageUtils.saveUser(newdata)
        } 
        this.props.history.replace('/')
    }
    onback(){
        this.props.history.go(-1)
    }
    inputchange(){
        if(this.addinput.current.value){
            this.btn.current.disabled=false
            this.btn.current.style.backgroundColor="#15b897"
        }else{
            this.btn.current.disabled=true
            this.btn.current.style.backgroundColor="#e6f7f3"
        }
    }

    componentDidMount(){
        this.inputchange()
    }
    render() { 
        return ( 
            <div className="AddPlanet-wraper">
                <div className="head">
                    <div className="back" onClick={this.onback.bind(this)}>取消</div>
                    <div className="next" onClick={this.onAdd.bind(this)}>
                        {/* <span>添加</span>  */}
                        <button ref={this.btn} >添加</button> 

                    </div>
                </div>
                <div className="body">
                    <div className="body-img">
                        <div className="img">

                        </div>
                    </div>
                    <div className="input">
                        <input type="text" ref={this.addinput} onChange={this.inputchange.bind(this)}/>
                    </div>
                </div>
            </div>

         );
    }
}
 
export default withRouter(AddPlanet);