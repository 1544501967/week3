<template>
  <div>
        <div class="m-main">
            <div class="mar">
            <div class="userinfo">
                <span class="log"></span>
                <span>用户</span>
                <span class="fr">查看我的音乐DNA ></span>
            </div>
            <div class="love">
                <div class="you">
                    <span>猜你喜欢</span>
                    <span class="you-logo"></span>
                </div>
                <div class="youhave">
                    <span>今天你听歌了吗？</span>
                </div>
            </div>
            <span class="today">今日推荐</span>
            <div class="contain">
                <div class="block">
                    <img src="~@/assets/3.png" alt="">
                    <span>单曲循环歌单</span>
                    <span class="play"></span>
                </div>
                <div class="block">
                    <img src="~@/assets/4.png" alt="">
                    <span>深夜emo歌单</span>
                    <span class="play"></span>
                </div>
                <div class="block">
                    <img src="~@/assets/5.png" alt="">
                    <span>说唱</span>
                    <span class="play"></span>
                </div>
    
            </div>
            <hr>
            <div class="withyou">
                <span class="ttt">音乐伴侣</span>
                <div class="music-b">
                    <div class="m-log">
                        <img src="~@/assets/10.png" alt="">
                    </div>
                    <div class="m-details">
                        <div class="text-title1">假如爱有天意</div>
                        <div class="text1">李健</div>
                        <div class="pl"></div>
                    </div>
                </div>
                <div class="music-b">
                    <div class="m-log">
                        <img src="~@/assets/11.png" alt="">
                    </div>
                    <div class="m-details">
                        <div class="text-title2">年少有为</div>
                        <div class="text2">李荣浩</div>
                        <div class="pl"></div>
                    </div>
                </div>
                <div class="music-b">
                    <div class="m-log">
                        <img src="~@/assets/12.png" alt="">
                    </div>
                    <div class="m-details">
                        <div class="text-title3">那是你离开北京东路的日子</div>
                        <div class="text3">薛子谦</div>
                        <div class="pl"></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mar {
    width: 390px;
    height: 500px;
    /* position: relative; */
    overflow-x: hidden;
    overflow-y: auto;
}
.mar::-webkit-scrollbar {
    display: none;
}
.m-main {
    
    position: relative;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
.userinfo {
    /* width: 100%; */
    margin-left: 3%;
    margin-top: 2%;
}
.love {
    width: 358px;
    height: 140px;
    border: 1px solid;
    border-color: #707070;
    border-radius: 7px;
    background-image: url('~@/assets/2.png');
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
}
.you {
    width: 80%;
    position: absolute;
    top: 25%;
    left: 8%;
    color: white;
}
.you-logo {
    margin-left: 3%;
}
.youhave{
    position: absolute;
    top: 65%;
    left: 8%;
    color: white;
}
.today {
    margin-left: 15px;
}
.contain {
    /* width: 358px; */
    margin: 0 auto;
    /* margin-top: 16px; */
    /* margin-bottom: 5%; */
}
.block {
    width: 112px;
    height: 112px;
    display: inline-block;
    position: relative;
    margin: 5px;
}
.ttt {
    margin-left: 8%;
}
.block span {
    text-align: center;
    margin-left: 30px;
    font-size: 12px;
}
.play {
    position: absolute;
    top: 90%;
    left: 55%;
    font-size: 36px;
    color: white;
}
.m-details {
    display: inline-block;
}
.m-log {
    width: 30px;
    height: 30px;
    background-color: red;
    display: inline-block;
    margin-left: 8%;
}
.text-title1 {
    /* float: left; */
    width: 100%;
    margin-left: 30%;
}
.text1 {
    /* float: left; */
    width: 100%;
    margin-left: 30%;
    font-size: 10px;
}
.text-title2 {
    /* float: left; */
    width: 100%;
    margin-left: 45%;
}
.text2{
    /* float: left; */
    width: 100%;
    margin-left: 45%;
    font-size: 10px;
}
.text-title3 {
    /* float: left; */
    width: 100%;
    margin-left: 15%;
}
.text3 {
    /* float: left; */
    width: 100%;
    margin-left: 15%;
    font-size: 10px;
}
.pl {
    float: right;
}
</style>