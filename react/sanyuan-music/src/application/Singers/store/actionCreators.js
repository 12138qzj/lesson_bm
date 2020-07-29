// export const changeCategory = (data) => ({
//     type: CHANGE_CATOGORY,
//     data
// });
import {
    getHotSingerListRequest,
    getSingerListRequest
} from "../../../api/request/index";
import {
    CHANGE_SINGER_LIST,
    CHANGE_CATOGORY,
    CHANGE_ALPHA,
    CHANGE_LIST_OFFSET,
    CHANGE_PULLUP_LOADING,
    CHANGE_PULLDOWN_LOADING,
    CHANGE_ENTER_LOADING
} from './constants';

export const changeCategory = (data) => ({
    type: CHANGE_CATOGORY,
    data
});

export const changeAlpha = (data) => ({
    type: CHANGE_ALPHA,
    data
});

const changeSingerList = (data) => ({
    type: CHANGE_SINGER_LIST,
    data: data
});

export const changeListOffset = (data) => ({
    type: CHANGE_LIST_OFFSET,
    data
});

//进场loading
export const changeEnterLoading = (data) => ({
    type: CHANGE_ENTER_LOADING,
    data
});

//滑动最底部loading
export const changePullUpLoading = (data) => ({
    type: CHANGE_PULLUP_LOADING,
    data
});

//顶部下拉刷新loading
export const changePullDownLoading = (data) => ({
    type: CHANGE_PULLDOWN_LOADING,
    data
});

export const getHotSingerList = () => {
    return (dispatch) => {
        getHotSingerListRequest(0).then(res => {
            const data = res.artists;
            console.log("数据在这", data)
            dispatch(changeSingerList(data));
            dispatch(changeEnterLoading(false));
            dispatch(changePullDownLoading(false));
            dispatch(changeListOffset(data.length));
        }).catch((e) => {
            console.log("错误", e)
            console.log('热门歌手数据获取失败');
        })
    }
};

export const refreshMoreHotSingerList = () => {
    return (dispatch, getState) => {
        const offset = getState().singers.listOffset;
        const singerList = getState().singers.singerList;
        getHotSingerListRequest(offset).then(res => {
            const data = [...singerList, ...res.artists];
            dispatch(changeSingerList(data));
            dispatch(changePullUpLoading(false));
            dispatch(changeListOffset(data.length));
        }).catch(() => {
            console.log('热门歌手数据获取失败');
        });
    }
};





export const getSingerList = () => {
    return (dispatch, getState) => {
        const offset = getState().singers.listOffset;
        const category = getState().singers.category;
        const alpha = getState().singers.alpha;
        getSingerListRequest(category, alpha, offset).then(res => {
            const data = res.artists;
            dispatch(changeSingerList(data));
            dispatch(changeEnterLoading(false));
            dispatch(changePullDownLoading(false));
            dispatch(changeListOffset(data.length));
        }).catch(() => {
            console.log('歌手数据获取失败');
        });
    }
};

export const refreshMoreSingerList = () => {
    return (dispatch, getState) => {
        const category = getState().singers.category;
        const alpha = getState().singers.alpha;
        const offset = getState().singers.listOffset;
        const singerList = getState().singers.singerList;
        getSingerListRequest(category, alpha, offset).then(res => {
            const data = [...singerList, ...res.artists];
            dispatch(changeSingerList(data));
            dispatch(changePullUpLoading(false));
            dispatch(changeListOffset(data.length));
        }).catch(() => {
            console.log('歌手数据获取失败');
        });
    }
};