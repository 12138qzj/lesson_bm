/**
 * 
 * @param {*} state 
 * @param {*} action 
 * action 为js纯对象
 */

let action1 = {
    type: "INCREMENT"
}
let action2 = {
    type: "DECREMENT"
}


function reducer(state = 1, action) {
    if (action.type === "INCREMENT") {
        return state + 1;
    } else if (action.type === "DECREMENT") {
        return state - 1;
    } else {
        return state;
    }
}

function createStore(reducer) {
    let state = undefined;

    function dispatch(action) {
        state = reducer(state, action);
    }
    //定义的时候已经执行了 dispatch

    //将state 为reducer中的默认值 初始state的值
    dispatch({ type: "" })

    function getState() {
        return state;
    }
    return { dispatch, getState }
}


let store = createStore(reducer);
store.dispatch(action1);
console.log(store.getState())
store.dispatch(action2);
console.log(store.getState())