<template>
  <div class="item button-parrot">
    <button type="button" @click="submitMessage()">
      Submit!
      <div class="parrot parrot1"></div>
      <div class="parrot parrot3"></div>
      <div class="parrot parrot2"></div>
      <div class="parrot parrot2"></div>
      <div class="parrot parrot3"></div>
      <div class="parrot parrot1"></div>
    </button>
    <div class="name"></div>
  </div>
</template>
<script>
import { axios } from "../../network/axios.js";
import { getCheckStuNum } from "../../network/request.js";
import { getSubmit } from "../../network/request.js";
export default {
  data() {
    return {
      stuNumber: "",
      stuName: "",
      stuValue: [],
      collage: "",
      clazz: "",
      major: "",
      flag: "",
      direction: "前端",
      introduce: "",
      dirSummary: "",
      id: 0,
      userId: 0,
      head: "",
      userInfo: { head: "", userId: 0, id: 0, direction: "前端" },
    };
  },
  mounted() {
    this.$bus.$on("showId", (data) => {
      this.stuNumber = data;
      const a = {
        stuNumber: data,
      };
      this.$set(this.userInfo, "stuNumber", this.stuNumber);
      getCheckStuNum(a)
        .then((res) => {
          if (res.code === 3502) {
            alert("学号格式不正确哦");
          } else if (res.code === 3504) {
            this.$message({
              message: "你已经报名了哦",
              type: "warning",
            });
          }
        })
        .catch((err) => {});
    });
    this.$bus.$on("showName", (data) => {
      this.stuName = data;
      this.$set(this.userInfo, "name", this.stuName);
    });
    this.$bus.$on("showClazz", (data) => {
      this.stuValue = data;
      this.collage = this.stuValue[0];
      this.$set(this.userInfo, "collage", this.collage);
      this.major = this.stuValue[1];
      this.$set(this.userInfo, "major", this.major);
      this.clazz = this.stuValue[2];
      this.$set(this.userInfo, "clazz", this.clazz);
    });
    this.$bus.$on("showDirection", (data) => {
      this.flag = data;
      if (this.flag) {
        this.direction = "前端";
        this.$set(this.userInfo, "direction", this.direction);
      } else {
        this.direction = "后台";
        this.$set(this.userInfo, "direction", this.direction);
      }
    });
    this.$bus.$on("showIntro", (data) => {
      this.introduce = data;
      this.$set(this.userInfo, "introduce", this.introduce);
    });
    this.$bus.$on("showSkill", (data) => {
      this.dirSummary = data;
      this.$set(this.userInfo, "dirSummary", this.dirSummary);
    });
    this.$bus.$on("showHead", (data) => {
      this.head = data;
      this.$set(this.userInfo, "head", this.head);
    });
  },
  methods: {
    submitMessage() {
      let userInfo = JSON.stringify(this.userInfo);
      getSubmit(userInfo).then((res) => {
        if (res.code === 3502) {
          this.$message.error("报名表不能为空！！！");
        } else if (res.code === 3501) {
          this.$message.error("请勿重复提交！！");
        } else if (res.code === 0) {
          this.$router.push("/home");
          this.$message({
            message: "报名成功!",
            type: "success",
          });
        }
      });
    },
  },
};
</script>



<style scoped>
.button-parrot {
  position: relative;
}

button {
  position: absolute;
  left: 50%;
  top: 125%;
  margin-left: -84px;
  background: transparent;
  color: #fff;
  border: 3px solid #fff;
  border-radius: 50px;
  padding: 0.8rem 2rem;
  font: 16px "Margarine", sans-serif;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  letter-spacing: 2px;
  background: #c6ffdd; /* fallback for old browsers */
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
    0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11);
  background: -webkit-linear-gradient(
    to left,
    #42ab86,
    #f09520,
    #22abe1
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #42ab86,
    #f09520,
    #22abe1
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

button:hover {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
}

button:active {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
}

.name {
  width: 100%;
  text-align: center;
  padding: 0 0 3rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
}
.button-parrot .parrot {
  position: absolute;
  width: 60px;
  text-align: center;
  animation: blink1 0.8s infinite;
  color: transparent;
}
.button-parrot .parrot {
  position: absolute;
  width: 60px;
  text-align: center;
  animation: blink1 0.8s infinite;
  color: transparent;
}
.button-parrot .parrot2 {
  animation: blink2 0.8s infinite;
  color: transparent;
}
.button-parrot .parrot3 {
  animation: blink3 0.8s infinite;
  color: transparent;
}
.button-parrot .parrot:before {
  content: "Click Me!";
}
.button-parrot .parrot:nth-child(1) {
  top: -20px;
  left: -27px;
  font: 8px/1 "Margarine", sans-serif;
  transform: rotate(-20deg);
  animation-duration: 0.5s;
}
.button-parrot .parrot:nth-child(2) {
  font: 8px/1 "Margarine", sans-serif;
  right: -27px;
  top: -13px;
  transform: rotate(15deg);
  animation-duration: 0.3s;
}
.button-parrot .parrot:nth-child(3) {
  font: 12px/1 "Margarine", sans-serif;
  top: -40px;
  left: 10px;
  transform: rotate(10deg);
  animation-duration: 1s;
}
.button-parrot .parrot:nth-child(4) {
  font: 14px/1 "Margarine", sans-serif;
  top: -47px;
  left: 63px;
  transform: rotate(2deg);
  animation-duration: 0.7s;
}
.button-parrot .parrot:nth-child(5) {
  font: 10px/1 "Margarine", sans-serif;
  top: 53px;
  left: 70px;
  transform: rotate(-20deg);
  animation-duration: 0.8s;
}
.button-parrot .parrot:nth-child(6) {
  font: 8px/1 "Margarine", sans-serif;
  top: 57px;
  left: 4px;
  transform: rotate(10deg);
  animation-duration: 1.2s;
}
.button-parrot button:hover .parrot:before {
  content: "Do it!";
  width: 70px;
}

@keyframes blink1 {
  25%,
  75% {
    color: transparent;
  }
  40%,
  60% {
    color: #42ab86;
  }
}
@keyframes blink2 {
  25%,
  75% {
    color: transparent;
  }
  40%,
  60% {
    color: #f09520;
  }
}
@keyframes blink3 {
  25%,
  75% {
    color: transparent;
  }
  40%,
  60% {
    color: #22abe1;
  }
}
</style>