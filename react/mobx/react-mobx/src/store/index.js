import { observable, computed, action } from 'mobx'
//computed 计算

class Todo {
    id = Math.random();

    @observable title;
    @observable finished = false;

    constructor(title) {

        this.title = title
    }
}

class TodoList {
    @observable todos = [];

    @action
    addTodo = title => {
        if (!title) return
    }
}
const store = new TodoList();

export default store;