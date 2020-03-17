/*
 * @Author: Joker
 * 
 */
<template>
    <h1>弹窗组件测试，弹出内容：{{content}}</h1>
    
</template>

<script>
 export default {
    name: 'alert',
    data(){
        return {
            content:'',
            
        }
    },
    // props:{
    //     content:{
    //         type: String,
    //         default: '',
    //         required: false
    //     }
    // },
    methods:{
    
    },
    computed:{
        
    },
    mounted(){
        
    },
   watch: {
        content(val){
            val && alert(val);
        }
            
    }
}
</script>

<style scoped>

*{
    box-sizing: border-box;
}

</style>

