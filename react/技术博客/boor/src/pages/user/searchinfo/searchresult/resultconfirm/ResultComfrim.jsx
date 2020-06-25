import React, { Component } from 'react';
import { Modal, Button } from 'antd';


class ResultComfrim extends Component {
    constructor(){
        super();
        this.state = {
            loading: false,
            visible: false,
            record: {},
        };
        // this.init();
    }
    
    // this.state = {
    //     loading: this.props.loadingComfrim,
    //     visible: this.props.visibleComfrim,
    //     record: Object.keys(this.props.record).length <= 0 ? {}: this.props.record,

    // };

    init(){
        // console.log("this.props",this.props); 

        const {loadingComfrim,visibleComfrim,recordp}=this.props;
        this.setState({
            loading: loadingComfrim,
            visible: visibleComfrim,
            record: recordp,
        })
    }


    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };


    componentDidMount(){
        this.setState({
            loading: this.props.loadingComfrim,
            visible: this.props.visibleComfrim,
            record: this.props.recordp,
        })
    }

    render() {
        // this.init();
        console.log("this.props",this.props); 
        console.log("this.props",this); 
        

        const { visible, loading ,record} = this.state;
        
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal with customized footer
                </Button>
                <Modal
                    visible={visible}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            Return
                        </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            Submit
                        </Button>,
                    ]}
                >
                    {
                         Object.keys(record).length > 0?
                         <div>
                            { 
                                Object.keys(record).map(item=>{
                                    return (
                                            <p>{record[item]}...</p>                          
                                    );
                                })
                            }
                         </div>
                         :<p>数据错误！</p>
                    }
                   
                </Modal>
            </div>
        );
    }
}

export default ResultComfrim;