import React ,{ Component }from 'react';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import './Recommend.styl'; //webpack 在工作解析
class Recommend extends Component{
    constructor(){
        super();
        this.state={
            sliderList: [{
                id: 1,
                picUrl: 'https://mat1.gtimg.com/rain/bailing20/4333e6a9ac25.uzi.png',
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
    render(){
        return (
            <div className="music-recommend">
              <div className="slider-container">
                <div className="swiper-wrapper">
                  {
                    this.state.sliderList.map(slider => {
                      return (
                        <div className="swiper-slide" key={slider.id}>
                          <a href={slider.linkUrl} className="slider-nav">
                            <img src={slider.picUrl} alt="" width="100%" height="100%"/>
                          </a>
                        </div>
                      );
                    })
                  }
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          )
        }
      }
export default Recommend;

