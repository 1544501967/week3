<template>
    <div>
        <div class="your-love">
            <span class="change"></span>
            <span class="yl-text">猜你喜欢</span>
        </div>
        <div class="mar">
          <div class="my">
              <div class="my-block">
                <img src="~@/assets/3.png" alt="">
                <span>xxx</span>
              </div>
              <div class="my-block">
                <img src="~@/assets/15.png" alt="">
                <span>xxx</span>
              </div>
              <div class="my-block">
                <img src="~@/assets/16.png" alt="">
                <span>xxx</span>
              </div>
              <div class="my-block">
                <img src="~@/assets/17.png" alt="">
                <span>xxx</span>
              </div>
              <div class="my-block">
                <img src="~@/assets/18.png" alt="">
                <span>xxx</span>
              </div>
              <div class="my-block">
                <img src="~@/assets/19.png" alt="">
                <span>xxx</span>
              </div>
          </div>
          <div class="give">
            <span>为你推荐</span>
            <div>
              <img src="~@/assets/14.png" alt="">
              <div class="text">
                <div class="text-div">罗翔说</div>
                <div class="text-div">忠言逆耳利于行</div>
                <div class="text-div">超800万人播放</div>
                <div class="text-div">简介：1977</div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script >
export default {

}
</script>

<style scoped>
.mar {
  margin: 0 auto;
  /* width: 90%; */
}
.my {
    display: flex;
    flex-wrap: wrap;
    
}
.my-block {
    width: 112px;
    height: 160px;
    margin: 5px;
    /* background-color: red; */
    /* background-image: url('~@/assets/3.png'); */
}
.my-block span {
  margin-left: 15%;
  font-size: 12px;
}
.your-love {
  margin-top: 5%;
}
.change {
  margin-left: 5%;
}
.yl-text {
  margin-left: 5%;
}
.text {
  display: inline-block;
}
.text-div  {
  margin-left: 0.5rem;
  font-size: 14px;
}
.give {
  margin-top: 15px;
}
</style>