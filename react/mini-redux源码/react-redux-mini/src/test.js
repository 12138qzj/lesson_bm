// 请在下方作答:
// 以下代码为一个Clock组件，请将该组件根据以下要求改造：
// 1、将class组件修改为function组件。
// 2、将逻辑与UI分开。要求是：新增一个useClock.js文件，将Clock.js中的逻辑封装到useClock.js中去，要求使用标准的hook写法，并最后在Clock.js中使用useClock。
// 3、优化showTime()方法。
// 按照题目要求完成以下2个js文件：
// 文件1：Clock.js
// Clock.js
// Clock.js
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  showTime() {
    const day = this.state.date.getDay();
    let dayStr;
    if (day === 0) {
      dayStr = '星期日';
    } else if (day === 1) {
      dayStr = '星期一';
    } else if (day === 2) {
      dayStr = '星期二';
    } else if (day === 3) {
      dayStr = '星期三';
    } else if (day === 4) {
      dayStr = '星期四';
    } else if (day === 5) {
      dayStr = '星期五';
    } else if (day === 6) {
      dayStr = '星期六';
    }
    return dayStr + this.state.date.toLocaleTimeString();
  }

  render() {
    return <div>{this.showTime()}</div>;
  }
}

export default Clock;