<template>
    <div>
    <div class="main">
        <router-link to="/search">
            <div class="search">
                <!-- <input type="text" class="search-input"> -->
                <button type="input" class="search-input">
                    <span class="fl mmmm"></span>
                </button>
                <span class="sing"></span>
            </div>
        </router-link>
        <router-view></router-view>
        <router-link to="/music">
            <div class="end">
                <div class="music">
                    <div class="img"></div>
                    <div class="img2">
                        <span class="img-text">Heart Shake</span>
                        <span class="img-text">Morgan James,Hunter</span>
                    </div>
                    <div class="img3">
                        <span></span>
                        <span class="stop"></span>
                        <span class="stop" style="display: none;"></span>
                    </div>
                    <!-- <div class="zanting"></div> -->
                    
                </div>
                <div class="click—me">
                    <ul>
                        <router-link to="/all">
                            <li>
                                <span></span>
                                <div >首页</div>
                            </li>
                        </router-link>
                        <router-link to="/blog">
                            <li>
                                <span></span>
                                <div >播客</div>
                            </li>
                        </router-link>
                        <router-link to="/community">
                            <li>
                                <span></span>
                                <div >社区</div>
                            </li>
                        </router-link>
                        <router-link to="/user">
                            <li>
                                <span></span>
                                <div >我的</div>
                            </li>
                        </router-link>
                    </ul>
                </div>
            </div>
        </router-link>
    </div>
</div>
</template>
  
<script>
import community from './community.vue';
import login from './login.vue';
import register from './register.vue';

export default {
name: 'App',
components: {
    login,
    register,
    community
},
mounted(){
    $(function(){
        let state=false;
        $('.stop').click(function(){
            if(!state){
                $('.stop').eq(0).hide();
                $('.stop').eq(1).show();
                state=true;
            }
            else {
                $('.stop').eq(1).hide();
                $('.stop').eq(0).show();
                state=false;
            }
        })
    })
}
}
</script >

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a {
    text-decoration: none;
    color: black;
}
li {
    list-style: none;
}
.search {
    margin-top: 8%;
    margin-left: 16px;
}
.mmmm {
    margin-left: 5%;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
.search-input {
    width: 317px;
    height: 36px;
    background: #ffffff;
    border-radius: 18px;
    border: none;
}
.search:hover button{
    border: 1px solid;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
.end {
    width: 390px;
    height: 182px;
    background: #f8fdf2;
    border-radius: 36px 36px 0px 0px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
    padding: 30px;
    position: absolute;
    bottom: 0;
}
.zanting {
    width: 38px;
    height: 38px;
    background: #a4d579;
    border-radius: 10px;
}
.img {
    width: 50px;
    height: 50px;
    background-image: url('~@/assets/6.png');
    display: inline-block;
}
.click-me {
    width: 390px;
    height: 83px;
    background: #ffffff;
    
}
ul li {
    display: inline-block;
    width: 23%;
    text-align: center;
    margin-top: 38px;
}
ul li a {
    display: block;
}
.mar0 {
    margin: 0 auto;
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
.userinfo {
    width: 100%;
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
}
.contain {
    width: 358px;
    margin: 0 auto;
    margin-top: 16px;
}
.block {
    width: 112px;
    height: 112px;
    display: inline-block;
}
.img2 {
    width: 65%;
    display: inline-block;
    margin-left: 0.3rem;
}
.img3 {
    width: 15%;
    display: inline-block;
}
.stop {
    margin-left: 0.5rem;
    cursor: pointer;
}
.sing {
    margin-left: 0.8rem;
}
</style>
