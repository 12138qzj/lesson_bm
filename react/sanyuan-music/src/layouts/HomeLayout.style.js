import styled from 'styled-components';

// 切页面组件化
export const Top = styled.div `
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    padding : 5px 10px;
    background : #d44439;
    &>span{
        line-height: 40px;
        color: #f1f1f1;
        font-size: 20px;
        &.iconfont {
          font-size: 25px;
        }
    }  
`;
export const Tab = styled.div `
    height: 44px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    background:#d44439;
    a{
      flex:1;
      padding:2px 0;
      color:yellow;
      &.selected{
          border-bottom: 2px solid #f1f1f1;
          padding:3px 0;
          font-weight:700;
          color:blue;
      }  
    }
`;
export const TabItem = styled.div `
    height:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    /* color:pink; */
`;