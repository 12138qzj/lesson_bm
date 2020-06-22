import React, { Component } from 'react';
import { DatePicker,Input,Button } from 'antd';
import moment from 'moment';
import './SearchHeader.less';

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


class SearchHeader extends Component {
    constructor(porps){
        super(porps);
        //非绑定组件
        this.starttime = React.createRef();

        this.startpalce = React.createRef();

        this.endpalce = React.createRef();


    }
    state = { 
      data:""  
    };
    
    Search(){
        let endpalce=this.endpalce.current.state.value;
        let starttime=this.starttime.current.props.defaultValue._i;
        let startpalce=this.startpalce.current.state.value;
        // console.log("object",);
        this.props.Change(startpalce,endpalce);
        console.log(endpalce,startpalce,starttime);
        // console.log("点击",this.myRef.current.value);
    }
    inputChange(e){
        console.log("value",e);
    }
    render() { 
        return ( 
            <div className="SearchHeader">
                <div className="warp">


                    <span className="span-style">出发日期：</span>
                    <DatePicker className="datainput-style" defaultValue={moment('2020/01/01', dateFormat)} format={dateFormat} 
                    ref={this.starttime} />
                    <span className="span-style">出发地：</span>
                    <Input placeholder="Basic usage" className="input-style"
                    ref={this.startpalce} />
                    <span className="span-style">目的地：</span>
                    <Input placeholder="Basic usage" className="input-style" 
                    ref={this.endpalce} />

                    <Button type="primary" onClick={this.Search.bind(this)} className="btn">
                        Search
                    </Button>
                </div>

            </div>

        );
    }
}
 
export default SearchHeader;