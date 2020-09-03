<template>
    <div class="el-badge">
        <solt>   </solt>    
        <transition name="el-zoom-in-center">

            <sup
            v-show="!hidden"
            v-text="content" 
            class="el-badge__content"
            >
            </sup>    
        </transition>

    </div>
</template>

<script>
    export default {
        name:"IdBadge",
        props:{
            value:[String,Number],
            max:Number,
            isDot:Boolean,
            hidden:Boolean,
            type:{
                type:String,
                validator(val){
                    return ['primary','success','info','danger'].indexOf(val)>-1
                }
            }
        },
        computed:{
            content(){
                if(this.isDot)return;
                const value=this.value;
                const max=this.max;
                if(typeof value==='number'&& typeof max==="number"){
                    return value>max?`${max}+`:`${value}`;
                }
                return value;
            }
        }
        
    }
</script>

<style >

</style>