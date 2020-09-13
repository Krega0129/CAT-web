<template>
  <div class="intro full pos-ab">
    <div class="main">
      <el-row :gutter="35">

        <el-col :span="8">
          <div class="grid-content bg-purple">
            <cardMobile bg="#8de0d1">
              <template #content>
                <dl>
                  <dt>问：工作室学习的环境氛围如何？</dt>
                  <dd>答：我们工作室的伙伴亲切友善，并且愿意带领新伙伴一起学习 成长，互帮互助，整体学习氛围比较轻松、欢乐，同时也会定期举办分享会，在自我提升的同时，也促进了其他小伙伴们的进步。</dd>
                  <dt>问：工作室的前景怎么样？</dt>
                  <dd>答：已有师兄进入到互联网大厂，工作室里能接到政府和企业的项目，也有师兄们打过比赛，无论是对个人成长还是对于日后的就业都有不少帮助。</dd>
                  <dt>问：加入我们有福利吗？</dt>
                  <dd>答：这个是肯定有的，我们会有定期旅游和零食大礼包，且遇到节日时也会举行团建，欢乐多多，惊喜不断。</dd>
                  <dt>问：工作室的规章制度是怎么样的？</dt>
                  <dd>答：我们并没有严格的打卡签到制度，相对弹性自由，可以由个人来合理规划自己的时间，在技术提升的同时，也能保证学业的进步，但也希望进来的小伙伴能够自律自觉完成学习任务。</dd>
                  <dt>问：招新流程是什么样的呢？</dt>
                  <dd>答：由于疫情原因，今年我们预计会召开线上宣讲会，而今年的招新流程为：线上笔试、线上面试、一轮考核与二轮考核。线上笔试主要考C和简单算法，而线上面试主要为了了解性格和一些专业知识，最后的考核阶段则是为了检验你的学习能力。</dd>
                </dl>
              </template>
              <template #title>
                一问一答
              </template>
              <template #pic >
                  <img src="../../../assets/img/wenda.png" alt="">
              </template>              
            </cardMobile>
          </div>
        </el-col>

        <el-col :span="8">        
            <cardRotate></cardRotate>
        </el-col>

        <el-col :span="8">
          <div class="grid-content bg-purple">
            <cardMobile  bg="#33b7f5">
              <template #content>
                <dl>
                  <dt>国家海洋局南海分局北斗航标系统</dt>
                  <dd>该航标系统主要用于将北斗卫星传来的航标数据标注在地图上，并显示航标所在海域的水文情况。</dd>
                  <dt>广州市供电局运营分析平台</dt>
                  <dd>该平台主要用于管理广州市各地用电、电路维护、人员分配等的多项数据。对数据进行清洗和分析，实现数据可视化管理，解决了人工处理大量数据时的无法预测的错误、降低了人力资本，提高了数据处理速率和准确性。</dd>
                  <dt>“友捎”带货app</dt>
                  <dd>以网络技术结合村民需要，为村民打造一站式捎货服务平台，提供省心、安全、便捷的捎货体验，致力于乡村扶贫服务，在构建美丽乡村的同时，提供了就业机会。</dd>
                  <dt>广东玉兰集团有限公司的B2B订单系统</dt>
                  <dd>该系统是一个B2B订单购物一体化平台，协助玉兰集团搭建线上销售平台，解决传统销售过程痛点，项目已成功上线。</dd>
                  <dt>小鱿鱼智能塑料瓶回收箱</dt>
                  <dd>该项目已与广州羊城公司达成合作，使用了人脸识别、图片识别、红外感应等技术，致力于构建美丽智慧城市。</dd>
                </dl>
              </template>
              <template #title>
                主要成就
              </template>
              <template #pic>
                <img src="../../../assets/img/plane.png" alt="">
              </template>             
            </cardMobile>
          </div>
        </el-col>

      </el-row>
      <returnBtn></returnBtn>
      <div class="sign">
        <img src="../../../assets/images/cat.webp" alt="">
      </div>
    </div>
  </div>
</template>

<script scoped>

 import cardRotate from './card-rotate'
 import cardMobile from './card-mobile'
 import returnBtn from '@/views/intro/return-btn'


  export default {
    name: 'intro',
    components: {
      cardRotate,
      cardMobile,
      returnBtn  
    }   
  }
</script>

<style scoped>
@import url(../../../assets/css/base.css);

.intro {
    overflow: hidden;
    background: linear-gradient(to bottom right,#ffefba,#ffffff);
    /* -webkit-filter: blur(5px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px); */
    /* filter: blur(4px); */
    padding: 0 200px;
}

.main {
  width: 100%;
  height: 100%;
  padding: 100px 30px;
  background:  radial-gradient(#a1ffce,#faffd1);
  box-shadow: 1px 1px 20px rgba(0,0,0,.09);
}

.grid-content {
  position: relative;
  width: 100%;
  height: 450px;
}

/* 返回首页 */
.returnBtn {
  position: fixed;
  bottom: 140px;
  right: 220px;
}

/* 左下动态图标 */
.sign{
  position: fixed;
  bottom: 35px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* border: 2px solid #9aa15a; */
  /* overflow: hidden; */
}

.sign img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.sign::before {
  content: '';
  position: absolute;
  border: 2px solid #9aa15a;
  border-radius: 50%;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  /* margin: 0px; */
  animation: borderClip 8s linear infinite;
}

@keyframes borderClip {
  0%,
  100% {
      clip: rect(0, 230px, 2px, 0px);
  }
  25% {
      clip: rect(0, 2px, 230px, 0px);
  }
  50% {
      clip: rect(228px, 230px, 230px, 0px);
  }
  75% {
      clip: rect(0, 230px, 230px, 228px);
  }
}
</style>