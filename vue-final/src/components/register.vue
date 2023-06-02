<template>
  <div>
        <div class="main">
            <router-link to="/">
                <a href="#"><span class="back"></span></a>
            </router-link>
            
            <div class="info">
                <input type="text" placeholder="用户名/手机号/邮箱" class="id-input">
                <input type="text" placeholder="请输入密码" class="pwd-input">
                <input type="text" placeholder="确认密码" class="pwd-input">
                <div>
                    <input type="radio" name="" id="select">
                    <span class="select-text">已阅读并同意<span class="text-color">服务协议</span>和<span class="text-color">Partner Music隐私保护指引</span></span>
                    <div>
                        <router-link to="/">
                            <button class="btn">
                                <span class="btn-text">注册</span>
                            </button>
                        </router-link>
                        
                    </div>
                </div>
                </div>
        </div>
    </div>
</template>

<script scoped>
export default {

}
</script>

<style scoped>
.main {
    width: 390px;
    height: 750px;
    background-image: url("~@/assets/1.png");
    margin: 0 auto;
    opacity: 0.75;
    position: relative;
}
.info {
    margin-left: 41px;
    position: absolute;
    top: 40%;
}
.id-input {
    width: 308px;
    height: 67px;
    background: #f2f3f7;
    border-radius: 34px;
    padding: 0 0 0 15px;
    line-height: 34px;
    border: none;

}
.pwd-input {
    width: 308px;
    height: 67px;
    background: #f2f3f7;
    border-radius: 34px;
    padding: 0 0 0 15px;
    line-height: 34px;
    border: none;
    margin-top: 12px;
}
.btn {
    width: 86px;
    height: 86px;
    background: linear-gradient(77.44deg,#bcd341 0%,#a4d579 100%);
    border-radius: 43px;
    /* margin: 0 auto; */
    margin-left: 7rem;
    border: none;
    margin-top: 52px;
    cursor: pointer;
}
.select {
    width: 16px;
    height: 16px;
    background: #f2f3f7;
    border: 1px solid;
    border-color: #9f9f9d;
    margin-left: 69px;
}
.select-text {
    width: 230px;
    height: 14px;
    font-family: Hiragino Sans GB;
    color: #9f9f9d;
    font-size: 10px;
}
.btn-text {
    font-size: 1.7rem;
    color: white;
}
.btn-text:hover {
    font-size: 1.8rem;
}
.text-color {
    color: #a7d471;
}
.back {
    font-size: 2rem;
    margin-top: 15px;
    margin-left: 15px;
    cursor: pointer;
    transition: all 0.5s;
}
.back:hover {
    color: white;
}
</style>