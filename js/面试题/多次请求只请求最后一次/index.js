/**
 * 
 * @param {*} requestFunc
 * 
 * 多次请求只返回最后一次请求
 *  
 * 弊端 请求已经发出去了 
 * @returns 
 * 
 */

function onlyLastRequest(requestFunc) {
    let lastRequestId = 0;
  
    return function (...args) {
      return new Promise((resolve, reject) => {
        const currentRequestId = ++lastRequestId;
  
        requestFunc(...args)
          .then((result) => {
            if (currentRequestId === lastRequestId) {
              resolve(result);
            }
          })
          .catch((error) => {
            if (currentRequestId === lastRequestId) {
              reject(error);
            }
          });
      });
    };
  }