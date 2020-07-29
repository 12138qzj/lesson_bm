import { axiosInstance } from './ajax';


const data = {
    data: [{
        id: 1,
        title: "aaa"
    }]
}

//推荐列表
export const getRecommendListRequest = () => {
    return axiosInstance.get("/personalized");
}


//reducer 数据设计 init={singerList: [] . offset:0}
//useEFFect ->dispatch->getHotSingerList->getHotSingerListRequest API 请求

//.then((获取数据))-> changeSingerList(修改数据reducer<list，offset>)/-> 


//前后端交互，接口文档
// 交互要素 

// 1. 接口地址，
// url /top/artists 请求 restful 资源暴露
// 2. 传参 


//better-scroll 上拉加载更多 下拉加载刷新


export const getHotSingerListRequest = (count) => {
    return axiosInstance.get(`/top/artists?ofset=${count}`)
}



export const getBannersRequest = () => {

    return axiosInstance.get('/banner')
}

export const getBanners = () => {
    return axiosInstance.get('/banner')
}
export const getBannerRequest = () => {
    return axiosInstance.get("/banner");
};

// export const getRecommendListRequest = () => {
//     return axiosInstance.get("/personalized");
// };

// export const getHotSingerListRequest = count => {
//     return axiosInstance.get(`/top/artists?offset=${count}`);
// };

export const getSingerListRequest = (category, alpha, count) => {
    return axiosInstance.get(
        `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`
    );
};

export const getRankListRequest = () => {
    return axiosInstance.get(`/toplist/detail`);
};

export const getAlbumDetailRequest = id => {
    return axiosInstance.get(`/playlist/detail?id=${id}`);
};

export const getSingerInfoRequest = id => {
    return axiosInstance.get(`/artists?id=${id}`);
};

export const getHotKeyWordsRequest = () => {
    return axiosInstance.get(`/search/hot`);
};

export const getSuggestListRequest = query => {
    return axiosInstance.get(`/search/suggest?keywords=${query}`);
};

export const getResultSongsListRequest = query => {
    return axiosInstance.get(`/search?keywords=${query}`);
};

export const getSongDetailRequest = id => {
    return axiosInstance.get(`/song/detail?ids=${id}`);
};

export const getLyricRequest = id => {
    return axiosInstance.get(`/lyric?id=${id}`);
};

export const loginByPhoneRequest = (phone, password) => {
    return axiosInstance.get(
        `/login/cellphone?phone=${phone}&password=${password}`
    );
};

export const sentVcodeRequest = phone => {
    return axiosInstance.get(`/captcha/sent?phone=${phone}`);
};

export const loginByVcodeRequest = (phone, vcode) => {
    return axiosInstance.get(`/captcha/verify?phone=${phone}&captcha=${vcode}`);
};