import React, { useState ,useEffect} from 'react';
import {List,Icon} from 'antd';
import classnames from 'classnames';
import {fetchToods} from '../api/api';
const {Item}=List;


export const TodoList= ({todos,onToggleFinished})=>{
    const onDelet=e=>{

    }
    return (
        <div className="list-warp">
            { todos.length===0?(
                <p>暂无待办事项</p>
            ):(
                <List 
                itemLayout="horizontal"
                dataSource={todos}
                renderItem={(id,text,finished)=>{
                    const itemClasses=classnames({
                        "list-item":true,
                        // BEM的命名规矩很容易记：block-name__element-name--modifier-name，
                        // 也就是模块名 + 元素名 + 修饰器名。
                        "list-item__finished":finished,
                    })
                    return (
                        <Item>

                        </Item>
                    )
                }}
                />
            )}
            {todos.map()}
        </div>
    )
    
}