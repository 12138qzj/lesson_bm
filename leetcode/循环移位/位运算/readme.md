## 使用位运算来实现加减乘除

a+b ==> (a^ b)+((a & b)<<1)


```js

//将值慢慢加到另一值上，当另一个值为0的时候加完 则两数累加完成，返回累加的数值；
//不使用四则运算来实现加法 用位运算来实现。 异或运算；
function sum(a,b){
    if(a==0)return b;
    if(b=0)return a;
    let newA=a^b
    let newB=(a&b)<<1;
    return sum(newA,newB);

}

function maopao(arr){

    for(let i=arr.length-1;i>;i--){
        for(let j=i;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }    
    }
}
```

