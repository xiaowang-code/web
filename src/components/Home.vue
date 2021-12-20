<template>
  <div class="home">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="8">
          <div>
            <b-carousel
              id="carousel-1"
              :interval="4000"
              fade
              indicators
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
            >
              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="../assets/img_1.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>
              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="../assets/img_2.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>
              <b-carousel-slide>
                <template v-slot:img>
                  <img
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="../assets/img_3.jpg"
                    alt="image slot"
                  />
                </template>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
        <b-col sm="1"></b-col>
        <b-col col-sm="3">
          <b-card-group>
            <b-card
              img-src="https://img0.baidu.com/it/u=1574182283,3828236162&fm=26&fmt=auto"
              img-alt="Image"
              img-top
            >
              <b-card-text style="font-size: 1.5em;">
                This is an online photo
              </b-card-text>
              <template #footer>
                <small class="text-muted">Last updated 0.3 mins ago</small>
              </template>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
      <b-row style="margin-top:2em">
        <b-col cols="12" class="homeimg">
          <img
            :src="require('../assets/' + imgItems[imgIndex].url)"
            @mouseenter="enterImg"
            @mouseleave="leaveImg"
          />
          <ul class="uling" @mouseenter="enterImg" @mouseleave="leaveImg">
            <li
              v-for="(item, index) in imgItems"
              :key="index"
              @mouseenter="selectImg(index)"
              :class="index == imgIndex ? 'active' : ''"
            ></li>
          </ul>
          <span class="left_icon">
            <b-icon
              icon="chevron-left"
              font-scale="4"
              @click="prevIndex"
            ></b-icon>
          </span>
          <span class="right_icon">
            <b-icon
              icon="chevron-right"
              font-scale="4"
              @click="nextIndex"
            ></b-icon>
          </span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      timer: "",
      imgIndex: 0,
      imgItems: [
        { url: "img_5.jpeg" },
        { url: "img_6.jpeg" },
        { url: "img_7.jpeg" },
        { url: "img_8.jpeg" }
      ]
    };
  },
  methods: {
    prevIndex() {
      // 上一张图片
      this.imgIndex--;
      // console.log(this.imgItems.length);
      if (this.imgIndex == -1) {
        this.imgIndex = this.imgItems.length - 1;
      }
    },
    nextIndex() {
      // 下一张图片
      this.imgIndex++;
      if (this.imgIndex == this.imgItems.length) {
        this.imgIndex = 0;
      }
    },
    Rotation() {
      // 轮播图播放
      this.timer = setInterval(() => {
        this.imgIndex++;
        if (this.imgIndex == this.imgItems.length) {
          this.imgIndex = 0;
        }
      }, 3000);
    },
    enterImg() {
      // 轮播图停止
      clearTimeout(this.timer);
    },
    leaveImg() {
      // 调用（轮播图播放）函数
      this.Rotation();
    },
    selectImg(index) {
      // 选择播放那张图片 index传值 更改
      this.imgIndex = index;
    }
  },
  mounted() {
    // 创建前调用 轮播图播放 方法
    let that = this;
    that.Rotation();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  margin: 5em;
  position: sticky;
}
.homeimg {
  position: relative;
  overflow: hidden;
}
.homeimg img {
  width: 100%;
  height: 480px;
}
.homeimg:hover span {
  background: #fff;
  height: 100%;
  opacity: 0.4;
  display: block;
}
.homeimg:hover ul {
  display: block;
}
.homeimg span {
  height: 100%;
  position: absolute;
  top: 0%;
  display: none;
}
.left_icon {
  padding-top: 15%;
  left: 0%;
}
.right_icon {
  padding-top: 15%;
  right: 0%;
}
ul,
li {
  list-style: none;
}
.uling {
  position: absolute;
  bottom: 0%;
  right: 10%;
  display: none;
}
.uling li {
  float: left;
  padding: 10px;
  margin-right: 15px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  text-indent: 100px;
  cursor: pointer;
}
.active {
  background-color: aqua !important;
}
</style>
