// 1. 设置当前执行任务的索引、完成数量，存活数量，结果
// 2. 函数返回一个Promise 要是任务执行完则返回结果集合，return函数，
// 3. 任务添加函数中分每次判断 在执行的数量是否超过 设置的数量  没有超过则继续添加超过则不加
// 4. 每次执行完则重新调用添加任务函数，执行完则完成量+1，存活量-1
// 5. 直到任务全部执行完，返回全部结果集合

function limitRunTask(tasks, limit) {

    return new Promise((resolve, reject) => {

        let index = 0; //当前执行任务的索引
        let finish = 0;
        let lives = 0;
        let result = [];

        //判断任务是否执行完 执行完了则 返回结果 
        function trigger() {
            if (finish >= tasks.length) {
                resolve(result)
                return;
            }
            //每次判断 在执行的数量是否超过 设置的数量  没有超过则继续添加
            //超过则不加
            while (lives < limit && index < tasks.length) {
                lives++;
                const promise = tasks[index]();
                let curindex = index;
                promise.then(res => {
                    result[curindex] = res;
                    lives--;
                    finish++;
                    //当有任务执行完了 就重新调用 添加任务函数
                    trigger();
                })
                index++;
            }
        }
        trigger()
    });
}

function createTask(t) {
    return () => new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('first', t)
            resolve(t)
        }, t);
    })
}

// limitRunTask([createTask(1001), createTask(1002), createTask(1003), createTask(102), createTask(103)], 2).then(r => console.log(r))
// console.log("object")
let lives = 0
let curindex = 0
let res = []
function limitRunTask2(tasks = [], limit) {

    function to1Task(task) {
        lives ++ 
        task()
            .then(() => {
            })
            .catch(() => {
            })
            .finally(() => {
                lives--
                if (tasks.length && lives < limit) {
                    to1Task(tasks.shift())
                }
            })
    }

    function toTask() {
        const min = Math.min(tasks.length, limit)
        for (let index = 0; index < min; index++) {
            to1Task(tasks.shift())
        }
        
    }
    toTask()
    
}
limitRunTask2.prototype.tasks = []
limitRunTask2.prototype.add = (task) => {
    this.task.push(task)
}
limitRunTask2.prototype.run = (limt) => {
    this.task.push(task)
}
limitRunTask2([createTask(8009), createTask(1000),createTask(3001), createTask(6002),createTask(8002), createTask(3)], 3)

// createTask(1003)().then(() => {
//     console.log('first1')
// })
// .catch(() => {
//     finish++ 
//     toTask()
// })
//     .finally(() => {
//         console.log('first2')
// })