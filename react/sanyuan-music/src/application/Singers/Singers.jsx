import React, { memo ,useRef,useEffect} from 'react'
import { connect } from 'react-redux'
import { 
    NavContainer,
    ListContainer,
    List,
    ListItem,
    EnterLoading
  } from "./singers.style.js";
// import {NavContainer} from './singers.style.js'
import { categoryTypes, alphaTypes } from '../../api/config';
import Horizen from '../../baseUI/horizen-item/index'
import { getSingerList, changeCategory, changeAlpha, getHotSingerList, changeListOffset, refreshMoreSingerList, changePullUpLoading,changePullDownLoading, refreshMoreHotSingerList } from './store/actionCreators';

import Scroll from "../../baseUI/scroll/index";
import  LazyLoad, {forceCheck} from 'react-lazyload';
import Loading from '../../baseUI/loading/index';
// import { renderRoutes } from 'react-router-config';

// import moduleName from '../../api/config'

const Singers = (props) => {


    // const {category,alpha}=props;
    const scrollRef = useRef(null);

    const { singerList, category, alpha, pageCount, songsCount, pullUpLoading, pullDownLoading, enterLoading } = props;
  
    const { getHotSinger, updateCategory, updateAlpha, pullUpRefresh, pullDownRefresh } = props;
    console.log(props);
    // const {recommendList}=props

    const handleUpdateAlpha=()=>{

    }

    const handleUpdateCategory=()=>{
        
    }

    useEffect(() => {
        if(!singerList.length && !category && !alpha) {
          getHotSinger();
        }
        // eslint-disable-next-line
      }, []);
    
      const enterDetail = (id)  => {
        props.history.push(`/singers/${id}`);
      };
    
      const handlePullUp = () => {
        pullUpRefresh(category === '', pageCount);
      };
    
      const handlePullDown = () => {
        pullDownRefresh(category, pageCount);
      };
    
    //   const handleUpdateCategory = (newVal) => {
    //     if(category === newVal) return;
    //     updateCategory(newVal);
    //     scrollRef.current.refresh();
    //   };
    
    //   const handleUpdateAlpha = (newVal) => {
    //     if(alpha === newVal) return;
    //     updateAlpha(newVal);
    //     scrollRef.current.refresh();
    //   };
    const renderSingerList = () => {
        const {singerList} = props;
    
        return (
          <List>
            {
              singerList.map((item, index) => {
                return (
                  <ListItem key={item.accountId+""+index} onClick={() => enterDetail(item.id)}>
                    <div className="img_wrapper">
                        {/* src={require('./singer.png')} */}
                      <LazyLoad placeholder={<img width="100%" height="100%" src={require('./singer.png')} alt="music"/>}>
                        <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music"/>
                      </LazyLoad>
                    </div>
                    <span className="name">{item.name}</span>
                  </ListItem>
                )
              })
            }
          </List>
        )
      };
    return (
        <div>

            <NavContainer>
                <Horizen title={"分类(默认热门):"} list={ categoryTypes } handleClick={(v) => handleUpdateCategory(v)} oldValue={category}></Horizen>
                <Horizen title={"首字母:"} list={ alphaTypes } handleClick={(v) => handleUpdateAlpha(v)} oldValue={alpha}></Horizen>
        

            </NavContainer>
            <ListContainer play={songsCount}>
            <Scroll 
                // onScroll = {forceCheck} 
                pullUp={ handlePullUp }
                pullDown = { handlePullDown }
                ref={ scrollRef }
                pullUpLoading = { pullUpLoading }
                pullDownLoading = { pullDownLoading }
            >
            { renderSingerList() }
            </Scroll>
        </ListContainer>
        {/* 入场加载动画 */}
        { enterLoading ? <EnterLoading><Loading></Loading></EnterLoading> : null}
      </div>

    )
}

const mapStateToProps = (state) => ({
    alpha: state.singers.alpha,
    category: state.singers.category,
   
    singerList: state.singers.singerList,
    enterLoading: state.singers.enterLoading,
    pullUpLoading: state.singers.pullUpLoading,
    pullDownLoading: state.singers.pullDownLoading,
    pageCount: state.singers.pageCount,
    // songsCount: state.player.playList.size
    // singerList: statesingers.singerList,
})

// const mapDispatchToProps = (dispatch)=>{
    
//     return({
//         dispatch
//     })
// }

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Singers))
const mapDispatchToProps = (dispatch) => {
    return {
      getHotSinger() {
        dispatch(getHotSingerList());
      },
      updateCategory(newVal) {
        dispatch(changeCategory(newVal));
        dispatch(getSingerList());
      },
      updateAlpha(newVal) {
        dispatch(changeAlpha(newVal));
        dispatch(getSingerList());
      },
      // 滑到最底部刷新部分的处理
      pullUpRefresh(hot, count) {
        dispatch(changePullUpLoading(true));
        if(hot){
          dispatch(refreshMoreHotSingerList());
        } else {
          dispatch(refreshMoreSingerList());
        }
      },
      //顶部下拉刷新
      pullDownRefresh(category, alpha) {
        dispatch(changePullDownLoading(true));
        dispatch(changeListOffset(0));
        if(category === '' && alpha === ''){
          dispatch(getHotSingerList());
        } else {
          dispatch(getSingerList());
        }
      }
    }
  };   
  
  export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers));
