import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, Button } from 'antd';
import './Header.less';
import StorageUtils from '../../utils/storageUtis/StorageUtils';
import formateDate from '../../utils/timeUtils/TimeUtils';
import { changeConfirmLocale } from 'antd/lib/modal/locale';

class Header extends Component {
    state = {
        time: formateDate(),
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    };


    showModal = () => {
        //this.
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        StorageUtils.removeUser();
        console.log("StorageUtils.removeUser();",this.props);
        // .history.replace 
        if(!StorageUtils.getUser()){
           
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }
        this.props.history.replace('/login')
        // return;
      
        // setTimeout(() => {
           
        // }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };

    componentDidMount(){
        this.gettime();
    }

    gettime() {
        let time1 = new Date();
        console.log(time1);
        setInterval(() => {
            this.setState({
                time: formateDate()
            })
        }, 1000)
    }
    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎 {this.props.username}  </span>
                    <a href="#"onClick={this.showModal}>退出</a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">
                        首页
                    </div>
                    <div className="header-bottom-right">
                        <span>{ this.state.time }</span>
                        <img src="" alt=""/>
                        <span>天气</span>
                    </div>
                </div>

                <div>
                    {/* <Button type="primary" onClick={this.showModal}>
                        Open Modal with async logic
                    </Button> */}
                    <Modal
                        title="Title"
                        visible={visible}
                        onOk={this.handleOk.bind(this)}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}>
                        <p>{ModalText}</p>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);