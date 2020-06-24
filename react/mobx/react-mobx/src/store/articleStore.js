import { observable, action } from 'mobx';
import axios from 'axios';
const LIMIT = 10
class ArticleStore {
    // observable state 用 observable 修饰过的变量 变量被修改了 页面就会就会重新渲染
    // es @ 装饰器
    LIMIT = LIMIT
        // observable 可观测的
    @observable articles = {
        all: [],
        tab1: [],
        tab2: []
    }
    @observable tags = []
    @observable total = 0;
    // 繁杂的逻辑 尽量 写到 store
    @action
    getArticle(tag, offset = 0) {
        axios.get('/articles', {
                params: {
                    tag: tag === 'all' ? null : tag,
                    offset,
                    limit: LIMIT
                }
            })
            .then(res => {
                // 修改 store
                this.articles[tag] = res.articles
                this.total = res.articlesCount
            })
    }

    handleTabChange = (key) => {
        console.log(key);
        this.getArticle(key)
    }
    @action
    getTags() {
        axios.get('/tags').then(res => {
            this.tags = res.tags;
            console.log(this.tags);
        })
    }

}

//抛出组合成的store
export default new ArticleStore();