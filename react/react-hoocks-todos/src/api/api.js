const todos = [{
        id: 1,
        text: "todo1",
        finished: true
    },
    {
        id: 2,
        text: "todo2",
        finished: false
    },
    {
        id: 3,
        text: "todo3",
        finished: true
    },
    {
        id: 4,
        text: "todo4",
        finished: false
    },
    {
        id: 5,
        text: "todo5",
        finished: false
    }
];

const delay = time => new Promise((resolve, rejet) => setTimeout(resolve, time))
export const withdelay = async(...agrs) => {

    // return await new Promise((resolve, rejet) => {
    //     setTimeout(() => {
    //         resolve(todos);
    //     }, wait)
    // })
    await delay(1000);
    return fn(...args);

}
export const fetchTodos = withdelay(params => {
    return Promise.resolve({

    })
})