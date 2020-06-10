import React ,{ Component }from 'react';
// import {BrowserRouter, Route,Link} from 'react-router-dom';
import LazyLoad ,{forceCheck}from 'react-lazyload';
// import Loading from '../common/loading';
//alias路径短连接 相对连接
//包含@ 则直接定位在src目录下 @路径别名
import Loading from '@/common/loading/Loading';
//将要请求的数据封装  分离到api目录下

//getRangkingList 名字设计为动作+方法
import { getRangkingList , getRankingInfo } from '@/api/rangking';
// import getRanking from '@/api/rangking';

//排行榜页面制作
import './Ranking.styl'; //webpack 在工作解析
import Scroll from '../common/scroll/Scroll';
class Ranking extends Component{
    constructor(){
    super();
        this.state={
            loading:true,
            rankingList: []       
        }
    }
    componentDidMount(){
        getRangkingList().then((res)=>{
            console.log(res);
            console.log(res.data.topList);
            this.setState({
                rankingList:res.data.topList,
                loading: false
                // rankingList: res.data.topList
            })
        })
    }
    // refresh() {
    //   if (this.bScroll) {
    //     this.bScroll.refresh();
    //   }
    // }
    render(){
        return  (
            <div className="music-ranking"> 
            <Scroll
            //this.state.refreshScroll 在Scroll组件中默认了refresh的值
            refresh={this.state.refreshScroll}
            onScroll={(e) => {
              console.log("滚动事件",e);
              forceCheck();
            }}>
                        
              <div className="ranking-list">
                {
                  this.state.rankingList.map(ranking => {
                    return (
                      <div className="ranking-wrapper" key={ranking.id}>
                        <div className="left">
                          <LazyLoad height={100}>
                            <img src={ranking.picUrl} alt={ranking.title}/>
                          </LazyLoad>
                        </div>
                        

                          <div className="right">
                            <h1 className="ranking-title">
                              {ranking.title}
                            </h1>
                            {
                              ranking.songList.map((song, index) => {
                                return (
                                  <div className="top-song" key={index}>
                                    <span className="index">{index + 1}</span>
                                    <span>{song.songname}</span>
                                    &nbsp;-&nbsp;
                                    <span className="song">{song.singername}</span>
                                  </div>
                                )
                              })
                            }
                          </div>
                      

                      </div>
                    )
                  })
                }
              </div>
              <Loading show={this.state.loading} title="正在加载排行榜..." />
              </Scroll>
            
            </div>
            
        )
    }
}
export default Ranking;

