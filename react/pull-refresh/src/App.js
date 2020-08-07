import React ,{useRef,useEffect,useState}from 'react';
import pullToRefresh from './pullDown'
import styled , { css }from 'styled-components'
import logo from './logo.svg';
import './App.css';

const Button = styled.a `
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
  `}
`

const {init }=pullToRefresh();


function App() {


  const [isPrimary,setisPrimary]=useState(false)
  const contentRef=useRef();
  const ptrRef=useRef();
  const bodyRef=useRef();


  useEffect(()=>{
    init({
      contentEl:contentRef.current,
      ptrEl:ptrRef.current,
      bodyEl:bodyRef.current,
      loadingFunction:()=>new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve()
        },3000)
      })

    })
  },[])
  return (
    <div className="body-wrap" ref={bodyRef}>
      {/* ptr-wrap 负责移动
        transfrom:translateY()
        transfrom:rotate()
      */}
      <div ref={ptrRef} className="ptr-wrap">
      {/* loading 负责加载动画 */}
        <div className="loading">

        </div>
      </div>
      
      <header  ref={contentRef}>

      <Button primary={isPrimary}
      onClick={()=>{
        setisPrimary(!isPrimary)
      }}
      >按钮</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
