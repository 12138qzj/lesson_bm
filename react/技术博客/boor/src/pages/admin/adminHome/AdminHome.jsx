import React, { Component } from 'react';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import './AdminHome.less';

class AdminHome extends Component {
    state = {
        sliderList: [{
            id: 1,
            picUrl: 'https://www.12306.cn/index/images/pic/banner0619.jpg',
            linkUrl: 'https://https://xw.qq.com/m/sports'
          }, {
            id: 2,
            picUrl: 'https://inews.gtimg.com/newsapp_ls/0/11885314858_640330/0',
            linkUrl: 'https://https://xw.qq.com/m/sports'
          }, {
            id: 3,
            picUrl: 'https://inews.gtimg.com/newsapp_ls/0/11884276052_640330/0',
            linkUrl: 'https://https://xw.qq.com/m/sports'
          }] // 幻灯片  没有必要去redux 
    }


    componentDidMount(){
        new Swiper(".slider-container", {
            loop: true,
            autoplay: {
              delay: 1000,
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
            }
          })
    }
  

    render() {
        return (
            // <div className="waper">
            //     <div className="slider-container">
            //         <div className="swiper-wrapper">
            //             {
            //                 this.state.sliderList.map(slider => {
            //                     return (
            //                         <div className="swiper-slide" key={slider.id}>
            //                             <a href={slider.linkUrl} className="slider-nav">
            //                                 <img src={slider.picUrl} alt="" width="100%" height="100%" />
            //                             </a>
            //                         </div>
            //                     );
            //                 })
            //             }
            //         </div>
            //         <div className="swiper-pagination"></div>
            //     </div>
            // </div>
            <div className="contentAdminhome">
                欢迎使用车票管理系统
            </div>
        );
    }
}

export default AdminHome;