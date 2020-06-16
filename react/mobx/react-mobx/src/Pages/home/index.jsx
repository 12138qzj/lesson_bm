import React, { Component } from 'react';
import { Pagination } from 'antd';
import { inject, observer} from 'mobx-react';

//想要那个store数据就注入谁
//Privat数据是全局的
// 想要哪个页面的数据 注入谁
@inject('articleStore')
@observer
class Home extends Component {
    componentDidMount() {
        this.props.articleStore.getArticle('all');
      }
      handlePaginationChange = (page) => {
        // 1 offset 0
        // 2 offset 1
        // 3 offset 2
        this.props.articleStore.getArticle('all', page - 1);
      }
  render() { 
      const {total,LIMIT}=this.props.articleStore;
      console.log(total,LIMIT);
    return (
      <div>
          {/* 获取存在 redux-- mobx 中的数据 */}
          <Pagination
          onChange={this.handlePaginationChange}
          total={total}
          pageSize={LIMIT} 
          defaultCurrent={1}/>
        { this.props.articleStore.articles.all.length }
      </div>
    );
  }
}
 
export default Home;