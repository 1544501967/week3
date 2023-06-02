<template>
  <div>
        <div class="main">
            
            <router-link to="/register">
                <a href="register.html" class="register">去注册</a>
            </router-link>
            <div class="info">
                <input type="text" placeholder="用户名/手机号/邮箱" class="id-input">
                <input type="text" placeholder="请输入密码" class="pwd-input">
                
                <div>
                    <input type="radio" name="" id="select">
                    <span class="select-text">已阅读并同意<span class="text-color">服务协议</span>和<span class="text-color">Partner Music隐私保护指引</span></span>
                    <div>
                        <router-link to="/all">
                            <button class="btn">
                                <span class="btn-text"></span>
                            </button>
                        </router-link>
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
    top: 50%;
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
    width: 3rem;
    height: 3rem;
    background: linear-gradient(77.44deg,#bcd341 0%,#a4d579 100%);
    border-radius: 1.5rem;
    /* margin: 0 auto; */
    margin-left: 125px;
    border: none;
    margin-top: 52px;
    cursor: pointer;
    transition: all 0.5s;
}
.btn:hover {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 1.6rem;
    margin-left: 125px;
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
    font-size: 2rem;
    color: white;
    transition: all 0.5s;
}
.btn-text:hover {
    font-size: 3rem;
}
.register:hover {
    color: white;
}
.text-color {
    color: #a7d471;
}
.register {
    float: right;
    font-size: 0.8rem;
    font-weight: bold;
    margin-right: 15px;
    margin-top: 10px;
    cursor: pointer;
}
</style>