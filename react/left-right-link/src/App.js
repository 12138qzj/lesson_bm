import React, { useState, useEffect,useRef } from 'react';
import logo from './logo.svg';
import './App.css';

const data = {
  tab1: [
    { c: "1-1" },
    { c: "1-2" },
    { c: "1-3" },
    { c: "1-4" },
    { c: "1-5" },
    { c: "1-6" }
  ],
  tab2: [
    { c: "2-1" },
    { c: "2-2" },
    { c: "2-3" },
    { c: "2-4" },
    { c: "2-5" },
    { c: "2-6" }
  ],
  tab3: [
    { c: "3-1" },
    { c: "3-2" },
    { c: "3-3" },
    { c: "3-4" },
    { c: "3-5" },
    { c: "3-6" },
    { c: "3-7" }
  ],
  tab4: [
    { c: "4-1" },
    { c: "4-2" },
    { c: "4-3" },
    { c: "4-4" },
    { c: "4-5" },
    { c: "4-6" },
    { c: "4-7" }
  ]
};
function App() {

  const [activeIndex,setActiveIndex]=useState(0)

  // const tabDetail =document.querySelector('.tab-detail')
  const handleTabClick=(e)=>{

    console.log(e);
    console.log(e.target);
    console.log(e.target.getAttribute("data-ltab"));

    const  activeIndex=e.target.getAttribute("data-index")
    setActiveIndex(parseInt(activeIndex))
    const ltab=e.target.getAttribute("data-ltab")

    const rtab=document.querySelector(`[data-rtab="${ltab}"]`)
    
    rtab.scrollIntoView({
      behavior:'smooth'
    })


  }
  const navs=Object.keys(data)

  // const ref=React.createRef();
  let ranges=[];
  const ref=useRef();
  let base=0;

  console.log(ref.current);

  //effect 将在每轮渲染结束后执行
  useEffect(()=>{

    const tabDetail=ref.current;
    const tabs=tabDetail.querySelectorAll(`[data-rtab]`)
    for(let tab of tabs){
      let h=tab.getBoundingClientRect().height;
      let newH=base+h;
      ranges.push([base,newH])
      base=newH;
    }
    console.log(ranges);

  function onScroll(e){
    const scrollTop=tabDetail.scrollTop;
    const index = ranges.findIndex(range=>scrollTop>=range[0]&&scrollTop<range[1])
    setActiveIndex(index)

  }
  tabDetail.addEventListener('touchstart',()=>{
    tabDetail.addEventListener('touchmove',onScroll)

  })

  tabDetail.addEventListener('touchend',()=>{
    tabDetail.removeEventListener('touchmove',onScroll);

  })
  },[1])



  return (

    <div className="App">
      <nav>
        {
          navs.map((item,index)=>{
            return (<div key={index}
              data-index={index}
              data-ltab={item}
              onClick={handleTabClick}
              className={activeIndex===index?"active":""}
            >{item}</div>)
          })
        }
      </nav>
      <div className="tab-detail" ref={ref}>
        {
          navs.map((nav,index)=>{
            return(
              <dl key={index}
              data-rtab={nav}
              >
                <dt>{nav}</dt>
                {
                  data[nav].map((con,i)=>{
                    return (
                      <dd key={i}>
                        {con.c}
                      </dd>
                    )
                  })
                }

              </dl>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
