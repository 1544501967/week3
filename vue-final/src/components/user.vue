<template>
  <div class="u_main">
        <div class="mar">
            <div class="add" style="display: none;">
                <span class="del cur"></span>
                <div><span></span>导入歌单Url</div>
                <div><span></span>创建我的歌单</div>
            </div>
            <div class="use-info">
                <div class="use-img">
                    <img src="~@/assets/6.png" alt="">
                </div>
                <div class="use-text">XXX</div>
                <div class="use-more">
                    <span>3 关注</span>
                    <span>0 关注</span>
                    <span>Lv.10</span>
                </div>
            </div>
            <div class="use-gongneng">
            </div>
            <div class="u-select">
                <span class="fl u-select-selected">创建歌单</span>
                <span class="fr">收藏歌单</span>
            </div>
            <div>
            <!-- 创建歌单块 -->
                <div class="new-music">
                    <span class="fl">创建歌单（0个）</span>
                    <span class="fr new cur"></span>
                </div>
                <!-- 收藏歌单块 -->
                <div class="love-music" style="display: none;">
                    <span class="fl">收藏歌单（0个）</span>
                    <span class="fr new cur"></span>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        $(function(){
            let flag=false;
            $(".new").click(function(){
                if(!flag){
                    $('.add').show();
                }
            })
            $('.del').click(function(){
                $(".add").hide();
            })
            $(".u-select span").click(function(){
                $(this).addClass("u-select-selected").siblings().removeClass("u-select-selected");
                console.log($(this).index());
                if($(this).index()){
                    $(".love-music").show().siblings().hide();
                }
                else {
                    $(".new-music").show().siblings().hide();
                }
            })
})
    }
}
</script>

<style scoped>
.cur {
    cursor: pointer;
}
.u_main {
   
    margin: 0 auto;
    position: relative;
}
.mar {
    width: 390px;
    height: 500px;
    /* position: relative; */
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
.mar::-webkit-scrollbar {
    display: none;
}
.u_nav {
    width: 100%;
    height: 30px;
    margin-top: 8%;
}
.state {
    display: inline-block;
    width: 95px;
    height: 29px;
    background: #ffffff;
    border-radius: 15px;
    margin-left: 35%;
    
}
.state_t {
    line-height: 29px;
    margin-left: 15%;
    font-size: 12px;
}
.state-text {
    font-size: 0.5rem;
}
.u_s {
    margin-left: 25%;
    cursor: pointer;
}
.use-info {
    width: 358px;
    height: 118px;
    background: #ffffff;
    border-radius: 27px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.34);
    margin-top: 25%;
    margin-left: 4%;
    position: relative;
}
.use-img {
    width: 78px;
    height: 78px;
    /* background-color: red; */
    text-align: center;
    border-radius: 39px;
    position: absolute;
    top: -35%;
    left: 38%;
}
.use-text {
    position: absolute;
    top: 38%;
    left: 44%;
}
.use-more {
    width: 100%;
    height: 60px;
    /* background-color: red; */
    position: absolute;
    top: 50%;
    padding: 5%;
    margin-left: 22%;
}
.use-more span {
    margin-left: 5px;
}
.use-gongneng {
    width: 358px;
    height: 177px;
    background: #ffffff;
    border-radius: 27px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.34);
    margin: 0 auto;
    margin-top: 15px;
}
.u-select {
    width: 237px;
    height: 21px;
    margin: 0 auto;
    /* background-color: red; */
    margin-top: 10px;
}
.u-select span {
    cursor: pointer;
}
.new-music,.love-music {
    width: 358px;
    height: 177px;
    background: #ffffff;
    border-radius: 27px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.34);
    margin: 0 auto;
    margin-top: 17px;
}
.love-music span:nth-child(-n+1) {
    margin-left: 5%;
    margin-top: 5%;
}
.new-music span:nth-child(-n+1) {
    margin-left: 5%;
    margin-top: 5%;
}
.new {
    margin-right: 5%;
    margin-top: 5%;
}
.new:hover {
    color: #666;
}
.u-select-selected {
    border-bottom: 5px solid #a4d579;
}
.add {
    width: 20rem;
    height: 25rem;
    /* background-color: red; */
    background-color: #666;
    border-radius: 2rem;
    position: absolute;
    top: 50px;
    z-index: 1;
    margin-left: 2.1rem;
}
</style>