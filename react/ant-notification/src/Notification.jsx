import React from 'react';
import ReactDOM from 'react-dom';
class Notification extends React.Component{

    constructor(){
        super();
        this.state={
            visiable: true,
            title:"null"

        }
    }
    open=(title)=>{
        console.log(title)
        this.setState({
            visiable: true,
             title:title.title
        })
    }
    close=()=>{
        this.setState({
            visiable: false,
            // title
        })
    }
    
    render(){
        const { visiable,title } = this.state;
        // const {children }=this.props;
        return (
            <div className={visiable ? 'show': 'hidden'}>
                {title}
            </div>
        );
    }
}
function CreateNotification(){
    const div=document.createElement('div');
    const ref=React.createRef();
    //ref={ref} 拿到Notification类的实例
    //通过实例去调用 类的方法。--改变this.state的状态
    //ref.current=new Notification();
    //

    ReactDOM.render(<Notification ref={ref}/>,div)
 
    document.body.appendChild(div);
    //ref.current=new Notification();
    return{
        open:ref.current.open,
        close:ref.current.close
    }
}
let notification=null;
if(!notification){
   let  { open,close }=CreateNotification();
   notification={
       open,
       close
   }
}
export default notification;