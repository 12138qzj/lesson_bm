import React, { Fragment, useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
const context = createContext();   // 特殊（跨层级）的 state
// connect
{/* <Provider store={store}/> */}
const { Provider, Consumer } = context;

/**
 * Provider 存数据
 * Consumer在这个组件中取出Provider存的数据
 * 在Provider内部使用Consumer才是合法的 才能提取数据
 */
// stateFul => class state
// stateLess => function  react16(hook 一系列 api, useXXXX) state
function Login() {
  return (
      <div>
        Login
        <Consumer>
          {
            //取出Provider 中的数据
            (obj) => {
              console.log("obj",obj);
              return (
                <span>span</span>
              )
            }
          }
        </Consumer>
      </div>
  )
}
function Header(props) {
  // class this.props
  // FC
  const { theme } = props;
  return (
    <div style={{ color: theme }}>
      Header
      {/* <Login theme={theme}/> */}
      <Login />

      {/* Login 还有其他组件  <Avatar theme={theme}> */}
    </div>
  )
}
function Footer() {
  return 'footer';
}
function App() {
  // this.state = {}
  // let res = [ { theme: 'res' }, function setTheme() {}]
  // let [s, set] = res;
  // Provider 提供，
  // Consumer 消费
  const [ state, setTheme ] = useState({ theme: 'red' });
  console.log("useState",state);
  return (
    //值一定要存在value上(规定)  才能被Consumer组件获取
    //value 一定要存放js的对象
    <Provider value={{
      state,
      setTheme
      }}>     
      <Fragment>
        <Header theme={state.theme}/>
        <Footer />
      </Fragment>
    </Provider>
  );
}

export default App;