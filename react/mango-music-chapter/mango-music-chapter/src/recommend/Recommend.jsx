import React ,{ Component }from 'react';
import Lazyload , { forceCheck }from 'react-lazyload';//延迟加载
// import {BrowserRouter, Route,Link} from 'react-router-dom';
import {getNewAlbum }from '../api/recommend.js';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import './Recommend.styl'; //webpack 在工作解析
import Loading from '../common/loading/Loading';

import Scroll from '@/common/scroll/Scroll';
class Recommend extends Component{
    constructor(){
        super();
        this.state={
          Loading:true,
          newAlbums:[],

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


    
   
    componentDidMount(){//组件渲染之后执行此函数


      // setTimeout(() => {
      //   this.setState({
      //     Loading:false
      //   })
      // }, 3000)


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
      
      getNewAlbum()//feach请求的封装
      .then((res)=>{
        console.log("获取最新专辑...",res);
        this.setState({
          Loading:false,
          newAlbums:res.albumlib.data.list
        })
          
            
        console.log("获取最新专辑...",res);
        console.log("获取最新专辑...111",this.state.newAlbums);
      })

      
    }
    refresh() {
      if (this.bScroll) {
        this.bScroll.refresh();
      }
    }
    render(){
      let albums = this.state.newAlbums.map(item => (
        <div className="album-wrapper" key={item.album_id}>
          <div className="left">
            <Lazyload height={60}>

          
              <img src={item.img} alt={item.name} width="100%" height="100%"/>
            </Lazyload>
          </div>
          <div className="right">
            <div className="album-name">
              {item.album_name}
            </div>
            <div className="singer-name">
              {item.singers[0].singer_name}
            </div>
            <div className="public-time">
              {item.public_time}
            </div>
          </div>
        </div>
      ));

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
             
                <Scroll refresh={this.state.refreshScroll}
                  onScroll={(e) => {
                    console.log("滚动事件",e);
                    forceCheck();
                  }}>
                <div className="album-container">
                  <h1 className="title">最新专辑</h1>
                  <div className="album-list">
                    {albums}
                  </div>
                </div>
              </Scroll>
              <Loading show={this.state.Loading} title="正在加载..."/>
            </div>
          )
        }
      }
export default Recommend;

