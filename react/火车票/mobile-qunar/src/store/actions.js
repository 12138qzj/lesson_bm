export const ACTION_SET_FROM = "SET_FROM"
export const ACTION_SET_TO = "SET_TO"

export const setFrom = (from) => {
    return {
        type: ACTION_SET_FROM,
        payload: from
    }
}

export function setTo(to) {
    return {
        type: ACTION_SET_TO,
        payload: to
    }
}
export const exchangeFromto = () => {
    //getState 在store中 全局函数  不需要使用 store.getState()
    return (dispatch, getState) => {
        //直接去仓库（store）拿 不需要外部给仓库值(仓库的state)
        // subscribe(() => {
        //     console.log("getState--subscribe", getState);
        // })
        console.log("getState()-------", getState());
        const { from, to } = getState();
        dispatch(setFrom(to))
        dispatch(setTo(from))
    }

}