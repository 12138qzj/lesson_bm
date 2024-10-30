
// const download = (url) => {
//     return new Promise(resolve=>{
//     setTimeout(() => resolve({ url: data }), 500);
//     });
//     };
//     const batchDownload = (urls, limit) => {
    
//     urls.map(url=> ()=> download(url))
//     }
    
    
//     batchDownload([
//     'url1',
//     'url1',
//     'url1',
//     'url1',
//     'url1',
//     ], 2).then(console.log)
    

const download = (url) => {
    return () => new Promise(resolve=>{
    setTimeout(() => resolve({ url: data }), 500);
    });
    };
    const batchDownload = (urls, limit) => {
        // const res = []
        const mapUrls=  urls?.map((item) =>  download(item))
        
        const trigger = (promise) => {
            promise(url).finally(() => {
                if(mapUrls.length){
                    const mapUrl = mapUrls[0];
                    mapUrls.shift()
                    trigger(mapUrl)
                }
            })
        }
    
        for(let i= 0; i<limit; i++  ){
            const mapUrl = mapUrls[0];
            mapUrls.shift()
            trigger(mapUrl)
        }
    
        // return new Promise((resp,rej) => {
        
        //     resp(res)
    
        // })
    
    }
    
    
    batchDownload([
    'url1',
    'url1',
    'url1',
    'url1',
    'url1',
    ], 2).then(console.log)