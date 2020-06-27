const users = [
    { id: 1, name: 'john', age: 28, sex: 'male' },
    { id: 2, name: 'bob', age: 33, sex: 'male' },
    { id: 3, name: 'tom', age: 22, sex: 'male' },
    { id: 4, name: 'alice', age: 18, sex: 'female' },
    { id: 5, name: 'rihana', age: 35, sex: 'female' },
    { id: 6, name: 'sara', age: 20, sex: 'female' }
]


function SQL(table) {
    this.table = table;
    //结果的保存变量 ，当下结果，保存每一步操作后的结果
    //存储中间结果
    this._result = null; //结构挂载 this 构造函数
    //    let user30=user.filter(item=>{
    //         return item.age>30;
    //     })
    this._getRows = () => {
        return this._result ? this._result : table;
    }


}
SQL.prototype.getResult = () => {
    console.log("this", this);

    return this._result;
}

SQL.prototype.where = function(predicate) {
    let rows = this._getRows()
        // console.log(rows instanceof Object);

    if (Array.isArray(rows)) {
        this._result = rows.filter(predicate);
    } else {

        //Object 拿出每一个数组 ， filter ，返回的仍然是object
        console.log(Object.keys(rows));
        this._result = Object.keys(rows)
            .reduce(function(groups, group) {
                groups[group] = rows[group].filter(predicate);
                return groups;
            }, {})
    }
    // console.log("roew", rows);
    // console.log(this._result);
    return this;

}
SQL.prototype.gruopBy = function(key) {
    let rows = this._getRows(); //私有方法
    //消灭 减少
    /**
     * reduce 使用情况：
     * 分组，
     * 一个结果数组有n个情况分组， 分组成为一个JSON Object 
     */

    this._result = rows.reduce(function(groups, row) {
        let group = row[key]

        if (!groups[group]) {
            groups[group] = []
        }

        groups[group].push(row)
        return groups;
    }, {})
    console.log(this._result);
    console.log("this", this);
    return this;
}
var sql = new SQL(users)

let predicate = function(row) {
        return row.age < 30;
    }
    // console.log(sql.gruopBy("sex").where(predicate).getResult());
console.log(sql);
sql.getResult()


console.log(SQL);
// let user = [1, 2, 3, 4, 5]

// user.reduce(function(prev, cur, index, arr) {
//     console.log(prev, cur, index, arr);
//     console.log("------------------------");
//     return prev + cur;
// }, 0);
// console.log("user", user);