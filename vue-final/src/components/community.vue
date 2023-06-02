<template>
  <div class="c_main">
        <div class="mar">
            <div class="main_contain mar">
                <div class="main_img">
                    <img src="~@/assets/9.png" alt="">
                </div>
                <div class="main_details">
                    <div class="fl l_block">
                        <div class="l_block_img"></div>
                        <div class="user_text">xxx</div>
                    </div>
                    <div class="fr r_block">
                        <div class="r_title">xxx</div>
                        <div class="r_text">xxxxxxxx</div>
                    </div>
                </div>
            </div>
            <div class="main_contain mar">
                <div class="main_img">
                    <img src="~@/assets/7.png" alt="">
                </div>
                <div class="main_details">
                    <div class="fl l_block">
                        <div class="l_block_img">
                        </div>
                        <div class="user_text">xxx</div>
                    </div>
                    <div class="fr r_block">
                        <div class="r_title">xxx</div>
                        <div class="r_text">xxxxxxxx</div>
                    </div>
                </div>
            </div>
            <div class="main_contain mar">
                <div class="main_img">
                    <img src="~@/assets/8.png" alt="">
                </div>
                <div class="main_details">
                    <div class="fl l_block">
                        <div class="l_block_img"></div>
                        <div class="user_text">xxx</div>
                    </div>
                    <div class="fr r_block">
                        <div class="r_title">xxx</div>
                        <div class="r_text">xxxxxxxx</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        var community={
    user_text: ["薛子谦","周杰伦","房东的猫"],
    title: ["橘子海","写给黄淮","我用什么把你留住"],
    text: ["YES,it really,really,really could happen",
            "你是我患得患失的梦啊！我是你可有可无的人",
        "为什么 在放手时刻眼泪会掉落"]
}
console.log(community.title[0]);
console.log(community.text[0]);
$(function(){
    $.each(community.title,function(index,data){
        $(".r_title").eq(index).html(data);
        $(".user_text").eq(index).html(community.user_text[index]);
    }),
    $.each(community.text,function(index,data){
        
        $(".r_text").eq(index).html(data);
    }),
    $.each(community.url,function(index,data){
        $(".main_img").eq(index).css("background-image","url('"+data+"')")
    })
})
    },
}
</script>

<style scoped>
.mar {
    margin: 0 auto;
    width: 100%;
    height: 500px;
    /* background-color: red; */
    /* overflow: auto; */
    overflow-x: hidden;
    overflow-y: auto;
}
.mar::-webkit-scrollbar {
    display: none;
}
.c_main {
    margin: 0 auto;
    position: relative;
}
.c_main .main_contain {
    width: 358px;
    height: 196px;
    /* background-color: red; */
    margin-top: 18px;
}
.main_img {
    width: 358px;
    height: 133px;
    /* background-color: #666; */
}
.main_details {
    width: 358px;
    height: 63px;
    background: #dfead5;
    border-radius: 0px 0px 7px 7px;
}
.l_block{
    width: 76px;
    height: 63px;
    /* background-color: skyblue; */
    float: left;
    text-align: center;
    padding-top: 7px;
}
.r_block {
    width: 279px;
    height: 63px;
    float: right;
}
.r_title {
    font-weight: bold;
    padding: 0.1rem;
}
.r_text {
    font-size: 14px;
    width: 216px;
}
.l_block_img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    /* background-color: orange; */
    background-image: url('~@/assets/13.png');
    margin: 0 auto;
}
.dib {
    display: inline-block;
}
.position_span {
    line-height: 36px;
    margin-left: 18px;
}
</style>