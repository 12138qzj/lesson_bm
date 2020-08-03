
import * as React from 'react'
export interface Props {
    userName: string,

}

//子组件
export const HelloComponent=(props:Props)=>(
    <h2> Hello user:{props.userName}</h2>
)


