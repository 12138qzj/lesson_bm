# React中ts的使用
 ## 函数式组件的ts
```ts
type Props = {
  foo: string;
};

const MyComponent: React.FunctionComponent<Props> = props => {
  return <span>{props.foo}</span>;
};

<MyComponent foo="bar" />;
```
 ## 类组件 ts
```ts
type Props = {
  foo: string;
};

class MyComponent extends React.Component<Props, {}> {
  render() {
    return <span>{this.props.foo}</span>;
  }
}

<MyComponent foo="bar" />;

```