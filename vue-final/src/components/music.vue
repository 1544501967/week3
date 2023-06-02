<template>
    <div>
        <div class="main">
            <div class="header">
                
                    <div class="arrowhead">
                        <router-link to="/all">
                        <span class="iconfont icon-xiangxiajiantou"></span>
                    </router-link>  
                    </div>
                
                <div class="m-name">
                    <span>Sunflower Feelings</span>
                    <span>Kuzu Mellow</span>
                </div>
                <div class="m-share">
                    <span class="iconfont icon-share"></span>
                </div>
            </div>
            <div class="player">
                <div class="inner-player">
                    <div class="inner-img">
                        <img src="../assets/inner-img1.jpg" alt="" class="img1">
                        <img src="../assets/inner-img2.jpg" alt="" class="img2" style="display: none;">
                        <img src="../assets/inner-img3.jpg" alt="" class="img3" style="display: none;">
                        <img src="../assets/inner-img4.jpg" alt="" class="img4" style="display: none;">
                        <img src="../assets/inner-img5.jpg" alt="" class="img5" style="display: none;">
                        <!-- <img src="../assets/inner-img6.jpg" alt="">
                        <img src="../assets/inner-img7.jpg" alt=""> -->
                    </div>
                </div>
            </div>
            <div class="lyrics">
                <p>...</p>
                <p>We've been dancing for so long under the stars</p>
                <p>I feel as the grass will cut through my skin</p>
                <p>All the pills we take have seem to prolong</p>
                <p>Our existence but I don't feel alright</p>
                <p>I would rather be alone than have you</p>
                <p>Everytime I speak I feel myself fall</p>
                <p>Do you wish to find the truth in my lies</p>
                <p>Sorry darling there's no truth here, no</p>
                <p>It's just the two of us my dear</p>
                <p>Listen to me don't you hear?</p>
                <p>I only fell for you </p>
                <p>...</p>
            </div>
            <div class="play-bar">
                <audio id="audio" controls src="../assets/song1.mp3"></audio>
                <div class="control-bar">
                    <div class="control">
                        <span class="iconfont icon-suijibofang"></span>
                    </div>
                    <div class="control last">
                        <span class="iconfont icon-shangyishou"></span>
                    </div>
                    <div class="control play">
                        <span class="iconfont icon-bofang"></span>
                    </div>
                    <div class="control next">
                        <span class="iconfont icon-xiayishou"></span>
                    </div>
                    <div class="control list">
                        <span class="iconfont icon-yinleliebiao"></span>
                    </div>
                </div>
            </div>
            <!-- 新增 -->
            <div class="m-list hiding1">
                <div class="m-list-dl">播放列表...</div>
                 <div class="m-list-dt">
                    <span class ="iconfont icon-icon-test"></span>
                    <span>Sunflower Feelings-</span>
                    <span>Kuzu Mellow</span>
                 </div>
                 <div class="m-list-dt">
                    <span class ="iconfont icon-icon-test"></span>
                    <span>헤어지지 못하는 여자, 떠나가지 못하는-</span>
                    <span>리쌍/정인</span>
                 </div>
                 <div class="m-list-dt">
                    <span class ="iconfont icon-icon-test"></span>
                    <span>Paris In The Rain-</span>
                    <span>Lauv</span>
                 </div>
                 <div class="m-list-dt">
                    <span class ="iconfont icon-icon-test"></span>
                    <span>WALLS-</span>
                    <span>sapientdream</span>
                 </div>
                 <div class="m-list-dt">
                    <span class ="iconfont icon-icon-test"></span>
                    <span>Differences-</span>
                    <span>Ginuwine</span>
                 </div>
            </div>
            <div class="share-box hiding2">
                <div class="h-share">
                    <span>分享至</span>
                    <span class ="iconfont icon-cha"></span>
                </div>
                <div class="e-share">
                    <div class="s-img">
                        <img src="../assets/s-img.png" alt="">
                    </div>
                    <div class="s-img">
                        <img src="../assets/s-img.png" alt="">
                    </div>
                    <div class="s-img">
                        <img src="../assets/s-img.png" alt="">
                    </div>
                    <div class="s-img">
                        <img src="../assets/s-img.png" alt="">
                    </div>
                    <div class="s-img">
                        <img src="../assets/s-img.png" alt="">
                    </div>
                </div>
            </div>
            <!-- 新增 -->
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
// // jQuery
// $(function() {
//     // 获取 audio 元素和 control 元素
//     var audio = $("#audio")[0];
//     var control = $(".play");
//     var next= $(".next");
//     // 给 control 元素添加点击事件
//     control.click(function() {
//       // 判断 audio 元素的播放状态
//       if (audio.paused) {
//         // 如果是暂停状态，就播放音乐，并将 span 的类名切换为 icon-zanting
//         audio.play();
//         control.find("span.iconfont").toggleClass("icon-bofang icon-zanting");
//       } else {
//         // 如果是播放状态，就暂停音乐，并将 span 的类名切换为 icon-bofang
//         audio.pause();
//         control.find("span.iconfont").toggleClass("icon-zanting icon-bofang");
//       }
//     });
//     $(audio).on("ended", function() {
//       // 当音乐播放完毕时，将 span 的类名切换为 icon-bofang
//       control.find("span.iconfont").toggleClass("icon-zanting icon-bofang");
//     });
//   });
$(document).ready(function() {
  // 获取 audio 元素和 control 元素
  var audio = $("#audio")[0];
  var control = $(".play");
  var next = $(".next");
  var last = $(".last");
  var list = $(".list");
  var main = $(".main");

  // 创建一个数组，包含所有歌曲的 src 属性
  var playlist = [
    {
      songSrc: '../assets/song1.mp3',
      imgSrc: '../assets/inner-img1.jpg',
    
      songName: "Sunflower Feelings",
      artist: "Kuzu Mellow",
      lyrics: `
        <p>...</p>
        <p>We've been dancing for so long under the stars</p>
        <p>I feel as the grass will cut through my skin</p>
        <p>All the pills we take have seem to prolong</p>
        <p>Our existence but I don't feel alright</p>
        <p>I would rather be alone than have you</p>
        <p>Everytime I speak I feel myself fall</p>
        <p>Do you wish to find the truth in my lies</p>
        <p>Sorry darling there's no truth here, no</p>
        <p>It's just the two of us my dear</p>
        <p>Listen to me don't you hear?</p>
        <p>I only fell for you </p>
        <p>...</p>
      `
    },
    {
      songSrc: "../assets/song2.mp3",
      imgSrc: "/../assets/inner-img2.jpg",
      songName: "헤어지지 못하는 여자, 떠나가지 못하는 남자",
      artist: "리쌍/정인",
      lyrics: `
        <p>...</p>
        <p>헤어지지 못하는 여자 떠나가지 못하는 남자</p>
        <p>无法分手的女人，无法离开的男人</p>
        <p>사랑하지 않는 우리 그래서 No No No No No No</p>
        <p>不再相爱的我们No No No No No No</p>
        <p>헤어지지 못하는 여자 떠나가지 못하는 남자</p>
        <p>사랑하지 않는 우리 그래서 No No No No No No</p>
        <p>팔짱을 끼고 한 장의 사진에 추억을 담고</p>
        <p>挽着手拍着的照片中，留下的回忆</p>
        <p>누구의 잘못인지 사랑하긴 하는데 Babe~</p>
        <p>是谁的错,我们曾这么相爱Babe~</p>
        <p>모든 게 그대론데 우리는 변해있네</p>
        <p>...</p>
      `
    },
    {
      songSrc: "../assets/song3.mp3",
      imgSrc: "../assets/inner-img3.jpg",
      songName: "Paris In The Rain",
      artist: "Lauv",
      lyrics: `
        <p>...</p>
        <p>All I know is We could go anywhere we could do</p>
        <p>Anything girl whatever the mood we're in</p>
        <p>All I know is</p>
        <p>Getting lost late at night under stars</p>
        <p>Finding love standing right where we are your lips</p>
        <p>They pull me in the moment</p>
        <p>You and I alone and</p>
        <p>People may be watching I don't mind,cause</p>
        <p>Anywhere with you feels right</p>
        <p>Anywhere with you feels like</p>
        <p>Paris in the rain</p>
        <p>...</p>
      `
    },
    {
      songSrc: "../assets/song4.mp3",
      imgSrc: "../assets/inner-img4.jpg",
      songName: "WALLS",
      artist: "sapientdream",
      lyrics: `
        <p>...</p>
        <p>If we fight</p>
        <p>That the walls we've built so high have fallen so low</p>
        <p>Falling so low</p>
        <p>If we fight</p>
        <p>That the walls we've built so high have fallen so low</p>
        <p>Oh-oh</p>
        <p>If we fight</p>
        <p>That the walls we've built so high have fallen so low</p>
        <p>Falling so low</p>
        <p>如果我们行同路人</p>
        <p>我们之间就筑起了疏远的高墙</p>
        <p>不再往来</p>
      `
    },
    {
      songSrc: "../assets/song5.mp3",
      imgSrc: "../assets/inner-img5.jpg",
      songName: "Differences",
      artist: "Ginuwine",
      lyrics: `
        <p>...</p>
        <p>......</p>
        <p>.........</p>
        <p>............</p>
        <p>...............</p>
        <p></p>
        <p>纯音乐,请欣赏...</p>
        <p></p>
        <p>...............</p>
        <p>............</p>
        <p>.........</p>
        <p>......</p>
        <p>...</p>
      `
    },
    {
      songSrc: "../assets/song6.mp3",
      imgSrc: "../assets/inner-img6.jpg",
      songName: "——",
      artist: "——",
      lyrics: `
  
      `
    },
  ];

  // 给 control 元素添加点击事件
  control.click(function() {
    // 判断 audio 元素的播放状态
    if (audio.paused) {
      // 如果是暂停状态，就播放音乐，并将 span 的类名切换为 icon-zanting
      audio.play();
      control.find("span.iconfont").toggleClass("icon-bofang icon-zanting");
    } else {
      // 如果是播放状态，就暂停音乐，并将 span 的类名切换为 icon-bofang
      audio.pause();
      control.find("span.iconfont").toggleClass("icon-zanting icon-bofang");
    }
  });

  $(audio).on("ended", function() {
    // 当音乐播放完毕时，将 span 的类名切换为 icon-bofang
    control.find("span.iconfont").toggleClass("icon-zanting icon-bofang");
  });

  // 给 next 元素添加点击事件
  var nextSongIndex=0;
  next.click(function() {
     // 获取当前歌曲的 src 属性
    var currentSongSrc = $("#audio").attr("src");
    // 计算当前歌曲在 playlist 数组中的索引
    var currentSongIndex = playlist.findIndex(function(item) {
      return item.songSrc === currentSongSrc;
    });
    // 计算下一首歌曲的索引
    // nextSongIndex = (currentSongIndex + 1) % playlist.length;

    // 获取下一首歌曲的信息
    var nextSong = playlist[nextSongIndex];
    nextSongIndex++;
    if(nextSongIndex>5)
    nextSongIndex=0;
    console.log(nextSongIndex);
    $(".inner-img img").eq(nextSongIndex).show().siblings().hide();
    console.log(nextSong.songSrc);
    // 更新 audio 元素的 src 属性、图片的 src 属性、歌名和歌手的文本内容和歌词的 HTML 内容
    // $("#audio").attr("src", nextSong.songSrc);
    // $(".inner-img img").attr("src", nextSong.imgSrc);
    $(".m-name span:eq(0)").text(nextSong.songName);
    $(".m-name span:eq(1)").text(nextSong.artist);
    $(".lyrics").html(nextSong.lyrics);
    // 播放音乐
    audio.play();
    // 将 span 的类名切换为 icon-zanting
    control.find("span.iconfont").removeClass("icon-bofang").addClass("icon-zanting");
  });
  var lastSongIndex=0;
  last.click(function() {
    // 获取当前歌曲的 src 属性
    var currentSongSrc = $("#audio").attr("src");
    // 计算当前歌曲在 playlist 数组中的索引
    var currentSongIndex = playlist.findIndex(function(item) {
      return item.songSrc === currentSongSrc;
    });
    // 计算下一首歌曲的索引
    // var nextSongIndex = (currentSongIndex - 1) % playlist.length;
    lastSongIndex--;
    if(lastSongIndex<0){
        lastSongIndex=5;
    }
    // 获取下一首歌曲的信息
    var nextSong = playlist[nextSongIndex];
    // 更新 audio 元素的 src 属性、图片的 src 属性、歌名和歌手的文本内容和歌词的 HTML 内容
    // $("#audio").attr("src", nextSong.songSrc);
    // $(".inner-img img").attr("src", nextSong.imgSrc);
    $(".inner-img img").eq(lastSongIndex).show().siblings().hide();
    $(".m-name span:eq(0)").text(nextSong.songName);
    $(".m-name span:eq(1)").text(nextSong.artist);
    $(".lyrics").html(nextSong.lyrics);
    // 播放音乐
    audio.play();
    // 将 span 的类名切换为 icon-zanting
    control.find("span.iconfont").removeClass("icon-bofang").addClass("icon-zanting");
  });
  
  audio.addEventListener('ended', function() {
    // 执行切换到下一首歌曲的操作
    next.click();
});

  // 新增
  var newElement = $(".m-list");
  var share = $(".m-share")
    // 点击列表按钮跳出列表框
  list.click(function(){
    newElement.slideDown();
    newElement.removeClass("hiding1");
  })
    //点击列表框删除列表框
  $(document).on("click", ".m-list", function() {
  $(this).slideUp(function() {
    newElement.addClass("hiding1");
  });
});
  //点击分享
  share.click(function(){
    main.css("background","rgba(65, 61, 61, 0.2)")
    $(".share-box").removeClass("hiding2");
  })
  //删除分享框
  $(".icon-cha").click(function(){
    $(".share-box").addClass("hiding2");
    main.css("background","rgba(65, 61, 61, 0.5)")
  })
  $(".s-img").click(function(){
    $(".share-box").addClass("hiding2");
    main.css("background","rgba(65, 61, 61, 0.5)")
  })
  // 新增
});
    }
}
</script>

<style scoped>


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
@media screen and (max-width: 640px) {
    html {
      font-size: 18px;
    }
  }
  
  /* 对于 640~980 分辨率 */
  @media screen and (min-width: 640px) and (max-width: 980px) {
    html {
      font-size: 20px;
    }
  }
  
  /* 对于 980~ 分辨率 */
  @media screen and (min-width: 980px) {
    html {
      font-size: 22px;
    }
  }
.main {
    width: 390px;
    height: 860px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    background: rgba(65, 61, 61, 0.5);
    border-radius: 25px;
}
.main::before{
    background-image: url("../assets/audio_back.jpg");
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:390px;
    height:860px;
    z-index:-1;
    background-size:cover;
    backdrop-filter: blur(7.68px);
    opacity: 0.63;
    border-radius: 25px;
}
.header{
    padding-top: 30px;
    height: 95px;
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
}
.arrowhead{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items:center;
}
.arrowhead>span{
    font-size: 1.4rem;
    color: #bbbbbb;
    font-weight: bold;
}
.arrowhead>span:hover{
    transform: 
    scale(1.1);
    cursor: pointer;
}
.m-name{
    flex: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.m-name>span:hover{
    transform: 
    scale(1.1);
    cursor: pointer;
}
.m-name>span:nth-child(1){
    font-size: 0.9rem;
    color:#ffffff;
    font-weight:600;
}
.m-name>span:nth-child(2){
    font-size: 0.75rem;
    opacity:50%;
    color:#ffffff;
    font-size:14px;
}
.m-share{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items:center;
}
.m-share>span{
    font-size: 1.4rem;
    color: #bcbcbc;
    font-weight: bold;
}
.m-share>span:hover{
    transform: 
    scale(1.1);
    cursor: pointer;
}
.player{
    height: 310px;
    width: 310px;
    background: #9d9d9d;
    margin: 0 auto;
    background:rgba(0,0,0,0.38);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
}
.inner-player{
    width: 276px;
    height: 276px;
    background: linear-gradient(270deg,#000000 0%,#1a1919 51.68%,#000000 100%);
    background:rgba(0,0,0,0.38);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
}
.inner-img{
    width: 178px;
    height: 178px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    transition: all
    0.5s ease-in-out;
}
.inner-img:hover{
    transform: 
    scale(1.2);
}
.inner-img img{
    width: 100%;
    height: 100%;
    animation: rotate 10s linear infinite;
    -webkit-animation: rotate 10s linear infinite;
}
@keyframes rotate {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
    
}
.lyrics{
    height: 200px;
    width: 360px;
    margin: 20px auto;
    background: linear-gradient(rgba(158, 253, 249, 0.3), rgba(98, 99, 99, 0.2));
    border-radius: 10px;
}
.lyrics>p{
    font-size: 0.15rem;
    font-weight: bold;
}
.play-bar{
    padding-top: 10px;
    height: 160px;
    width: 390px;
}
.control-panel {
    display: none;
}
.control-bar{
    height: 75px;
    width: 390px;
    display: flex;
    flex-direction: row;
}
.control{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.control>span{
    color: #ffffff;
    font-size: 1.5rem;
    opacity: 0.7;
}
.play>span{
    font-size: 2.8rem;
}
.control>span:hover{
    transform: 
    scale(1.1);
    cursor: pointer;
}
/* 播放按钮 */
audio::-webkit-media-controls-play-button{
    display: none;
}
/* 音量按钮 */
/* audio::-webkit-media-controls-mute-button{
    display: none;
} */
/* 当前播放时长 */
audio::-webkit-media-controls-current-time-display{
    display: none;
}
/* 总时长 */
audio::-webkit-media-controls-time-remaining-display{
    display: none;
}
/* 音量滑条面板 */
audio::-webkit-media-controls-volume-slider-container{
    display: none;
}
/* 音量滑条 */
/* audio::-webkit-media-controls-volume-slider{
    display: none;
} */
/* 音频面板 */
/* .list{
    z-index: 1000;
} */

/* 新增 */
.m-list{
    position: absolute;
    width: 390px;
    height: 400px;
    background: rgba(255, 255, 255, 0.88);
    z-index: 999;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
}
.m-list-dl{
    font-size: 1rem; 
    flex: 1;
    border-bottom: 1px solid black;
    margin-left: 30px;
    margin-right: 30px;
    color: #443c3a;
}
.m-list-dt{
    flex: 2;
    margin-left: 40px;
    margin-right: 40px;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.5rem;
}
.m-list-dt>span:nth-child(3){
    opacity: 60%;
}
.hiding1{
    visibility:hidden;
}
.hiding2{
    visibility:hidden;
}
.share-box{
    position: absolute;
    bottom: 400px;
    height: 120px;
    width: 360px;
    margin-left: 15px;
    margin-right: 15px;
    background: rgba(255, 255, 255, 0.6);
    z-index: 1000;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
}
.h-share{
    margin-left: 20px;
    margin-right: 20px;
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}
.h-share>span:nth-child(1){
    font-size: 1rem;
    font-weight: bold;
}
.h-share>span:nth-child(2){
    font-size: 1rem;
}
.h-share>span:nth-child(2):hover{
    transform: 
    scale(1.2);
    cursor: pointer;
}
.e-share{
    margin-left: 20px;
    margin-right: 20px;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items:start
}
.s-img{
    margin-left: 7px;
    margin-right: 7px;
    flex: 1;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    transition: all
    0.5s ease-in-out;
}
.s-img img{
    width: 100%;
    height: 100%;
}
.s-img:hover{
    transform: 
    scale(1.2);
    cursor: pointer;
}
/* 新增 */
</style>