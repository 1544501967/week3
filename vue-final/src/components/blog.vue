<template>
  <div class="b_main">
    <div class="mar">
      <div class="top">
        <ul>
          <li>
            <router-link to="/blog">
              <span></span>
              <span>我的播客</span>
            </router-link>
          </li>
          <li>
            <router-link to="/level">
              <span></span>
              <span>排行榜</span>
            </router-link>
          </li>
          <li>
            <router-link to="/classify">
              <span></span>
              <span>分类</span>
            </router-link>
          </li>
          <li>
            <router-link to="/radio">
              <span></span>
              <span>广播电台</span>
            </router-link>
          </li>
          <li>
            <router-link to="/sleep">
              <span></span>
              <span>助眠解压</span>
            </router-link>
          </li>
        </ul>
      </div>
      
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

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
.c_main {
    margin: 0 auto;
    position: relative;
}
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
.top {
  width: 85%;
  margin: 0 auto;
}
.top ul li {
  margin-top: 8%;
  width: 18.9%;
  height: 41px;
  /* background-color: red; */
  text-align: center;
  margin-left: 1%;
  display: inline-block;
}
.top ul li span{
  font-size: 12px;
  display: block;
  margin-top: 8%;
}

</style>