/**数据选择框 显示 */

export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = "ACTION_SET_IS_CITY_SELECTOR_VISIBLE";

/**数据加载显示 */

export const ACTION_SET_IS_LOADING_CITY_DATA = "ACTION_SET_IS_LOADING_CITY_DATA";

/**请求数据 */
export const ACTION_SET_CITY_DATA = "ACTION_SET_CITY_DATA"

export function showCitySelector(isCitySelectorVisible) {
    return {
        type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
        payload: !isCitySelectorVisible,
    }
}

export function showLoadingCityData(isLoadingCityData) {
    return {
        type: ACTION_SET_IS_LOADING_CITY_DATA,
        payload: !isLoadingCityData,
    }
}


export function setCityData(cityData) {
    return {
        type: ACTION_SET_CITY_DATA,
        payload: cityData
    }
}

export function fetchCityData() {
    console.log("进入");
    return (dispatch, getState) => {

        // const { isLoadingCityData, isCitySelectorVisible } = getState();
        //开启弹出框
        // dispatch(showCitySelector(isCitySelectorVisible));
        //开启加载
        // dispatch(showLoadingCityData(isLoadingCityData));
        fetch('http://localhost:80/rest/cities')
            .then(res => res.json())
            .then(cityData => {
                console.log("cityDatafghjklkjhgfds-------", cityData);
                dispatch(setCityData(cityData));
                //数据加载完成 Loading关闭
                // dispatch(showLoadingCityData(!isLoadingCityData));
            })
    }
}