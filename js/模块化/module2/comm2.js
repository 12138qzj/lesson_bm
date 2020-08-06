const { done, obj } = require('./comm1')
console.log(done);
setTimeout(() => {
    console.log(done, obj);

}, 5000)