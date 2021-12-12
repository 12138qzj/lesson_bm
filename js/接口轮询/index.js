  // 签约接口信息轮询
  const polling = (delay = 1000) => {
    return new Promise((resolve) => {
      getSignTaskStatus().then((res) => {
        const {
          errno,
          data: { redisState, status },
        } = res;
        if (errno * 1 === 0 && redisState * 1 === 3 && status * 1 === 3) {
          // redisState/status 3-签约结果还没返回，继续进行轮询接口
          setTimeout(() => {
            resolve(polling(delay));
          }, delay);
        } else if (
          errno * 1 === 0 &&
          (status * 1 === 5 || redisState * 1 === 0)
        ) {
          // redisState === 0 -是签约失败， status === 5-是签约成功 都将结果返回
          resolve(res);
        } else {
          // redisState 没有值 或者接口报错了（errno不为0）返回结果
          resolve(res);
        }
      });
    });
  };