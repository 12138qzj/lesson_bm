import React, { Component } from 'react';
import { is } from 'immutable';
class ImmutableComponent extends Component {
    
    // shallowEqual(objA, objB) {
    //     //判断1
    //     if (typeof objA !== 'object' ||
    //     typeof objB !== 'object') {
    //       return false;
    //     }
    //     //获取数据里面的value值
    //     const keysA = Object.keys(objA);
    //     const keysB = Object.keys(objB);
    //     //比较长度
    //     if (keysA.length !== keysB.length) return false;
    //     // 第一层的比较
    //     for (let key of keysA) {
    //       if (objA[key] !== objB[key]) {
    //         return false;
    //       }
    //     }
    //     return true;
    //   }




    shouldComponentUpdate(nextProps, nextState) {
      console.log("this",this,nextProps,nextState);
      const thisProps = this.props || {};
      const thisState = this.state || {};
      nextProps = nextProps || {};
      nextState = nextState || {};
      if (Object.keys(thisProps).length !== Object.keys(nextProps).length
      || Object.keys(thisState).length !== Object.keys(nextState).length) {
        return true;
      }
      console.log("nextProps",nextProps);
      for (let propKey of Object.keys(thisProps)) {
      console.log("propKey",propKey);

        if (!is(thisProps[propKey], nextProps[propKey])) {
          return true;
        }
      }
      for (let stateKey of Object.keys(thisState)) {
        if (!is(thisState[stateKey], nextState[stateKey])) {
          return true;
        }
      }
      return false;
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     const thisProps = this.props || {};
    //     const thisState = this.state || {};
    //     nextProps = nextProps || {};
    //     nextState = nextState || {};
    //     if (Object.keys(thisProps).length !== Object.keys(nextProps).length
    //     || Object.keys(thisState).length !== Object.keys(nextState).length) {
    //       return true;
    //     }
    //     for (let propKey of nextProps) {
    //       if (!is(thisProps[propKey], nextProps[propKey])) {
    //         return true;
    //       }
    //     }
    //     for (let stateKey of nextState) {
    //       if (!is(thisState[stateKey], nextState[stateKey])) {
    //         return true;
    //       }
    //     }
    //     return false;
    //   }
    
}
 
export default ImmutableComponent;