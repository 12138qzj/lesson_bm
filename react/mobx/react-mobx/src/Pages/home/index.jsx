import React, { Component } from 'react';
import { Pagination ,Tabs,Row,Col,Tag} from 'antd';
import { inject, observer} from 'mobx-react';

const { TabPane } = Tabs;

//想要那个store数据就注入谁
//Privat数据是全局的
// 想要哪个页面的数据 注入谁
@inject('articleStore')
@observer
class Home extends Component {
    componentDidMount() {
      
        this.props.articleStore.getArticle('all');
        this.props.articleStore.getTags()
      }
      handlePaginationChange = (page) => {
        // 1 offset 0
        // 2 offset 1
        // 3 offset 2
        this.props.articleStore.getArticle('all', page - 1);
      }
  render() { 
    const { total, LIMIT, articles ,handleTabChange,tags} = this.props.articleStore
    console.log(total, LIMIT)
    return (
      <div>

      <Row>
        <Col span={18}>
          <Tabs defaultActiveKey={'all'} onChange={handleTabChange}>
            {Object.keys(articles).map((tag, i) => {
              return (
                <TabPane key={tag} tab={tag} >
                  {
                    articles[tag].map((article, i) => {
                      return (
                        <div>
                          <h3>
                            {article.title}
                          </h3>
                          <p>
                            {article.body}
                          </p>
                        </div>
                      )
                    })
                  }
                </TabPane>
              )
            })}
          </Tabs>
            {/* 获取存在 redux-- mobx 中的数据 */}
        </Col>
        <Col span={6}>
          {tags.map((tag,i)=>{
            return <Tag key={i}>{tag}</Tag>
          })}
        </Col>
      </Row>
        
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