<template>
<button 
:class="[round? 'is-round':'' , type?'el-button':'',{
    'is-circle':circle
}]"
@click="handleClick">
    Button
    000{{type}}---{{tit}}


    <slot></slot>
</button>
</template>
<script>
export default {
    // name: 'HelloWorld',
    data(){
        return{
            tit:"hello"
        }
    },
    props: {
        type: {
            type:String,
            // children:String,
            default:'default'
        },
        round:Boolean,
        circle:Boolean
    },
    created(){
        //生命周期、
        console.log(this.props,this.tit)
    },
    methods:{
        handleClick:function(evt){
            this.$emit('click',evt)
            console.log("数据",evt)
        }
    }
}

</script>
<style scoped>

</style>

