<template>
  <div class="returnBtn">
    <router-link to="/home"><p class="ret">返回首页</p></router-link>
  </div>
</template>

<script>
export default {
  name: 'returnBtn',
}
</script>
<style>
  .returnBtn {
    position: relative;  
    width: 20vh;
    height: 8vh;
    border-radius: 10px;
    background: #ffd15f;
    box-shadow: .1vh .1vh #83af9b;
    font-size: 3vh;
    font-weight: bold;
    /* text-transform: uppercase; */
    color: #774f38;
    text-align: center;
    line-height: 8vh;
    animation:float 3s ease-in-out infinite
  }
  .returnBtn::after{
    content:'.';
    position: absolute;
    bottom: -15px;
    right: 5px;
    width: 20px;
    height: 5px;
    background: #ece5ce;
    border-radius: 11px;
    box-shadow: 5px 5px #83af9b;
    font-size: 25px;
    font-weight: 700;
    text-shadow: 5px 5px #83af9b;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

</style>
