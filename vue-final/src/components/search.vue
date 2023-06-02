<template>
    <div class="main">
        <div class="mar">
            <router-link to="/all">
                <span class="back"></span>
            </router-link>
            <input type="text" placeholder="请输入歌曲名称">
            <h1>查找我喜欢的歌曲</h1>
        </div>
       
    </div>
</template>

<script>
export default {
    mounted(){
        $(function(){
            $(".back").click(function(){

            })
        })
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
h1 {
    color: black;
}
.main {
    width: 390px;
    height: 750px;
    background: linear-gradient(209.94deg,#a4d579 0%,#ffffff 50%,#ffffff 100%);;
    margin: 0 auto;
    opacity: 0.75;
    border: 1px solid white;
    position: relative;
}
.mar {
    width: 390px;
    height: 750px;
    margin: 0 auto;
    opacity: 0.75;
    margin-top: 5%;
    position: relative;
}
.back {
    color: white;
    font-size: 24px;
    margin-top: 100px;
    margin-left: 10px;
}
.mar input {
    width: 80%;
    height: 30px;
    border-radius: 30px;
    position: absolute;
    margin-left: 3%;
    border: 0;

}
</style>