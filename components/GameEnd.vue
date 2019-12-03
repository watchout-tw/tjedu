<template>
  <div class="gameEnd-br">
    <div v-if="isVideo">
      <iframe class="gameEndVideo" :src=" 'https://www.youtube.com/embed/' + data.goto.youtube + '?start=' + data.goto.start" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="gameEndVideoOpenText">
        <a target="_blank" :href="'https://youtu.be/' + data.goto.youtube + '?t=' + data.goto.start">{{openTxt}}</a>
      </div>
      <div class="gameEndGoto" @click="onReStart">{{reStartTxt}}</div>
    </div>
    <div v-else>
      <div v-html="data.msg" ></div>
      <div class="gameEndGoto" @click="showVideo">{{data.goto.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      isVideo: false,
      openTxt: '( 另開影片於新分頁 )',
      reStartTxt: '>> 重啟對話 <<'
    }
  },
  methods: {
    showVideo() {
      this.isVideo = true
    },
    onReStart() {
      this.$emit('onReStart')
    }
  }
}
</script>

<style lang="scss">

.gameEnd-br{
    width: 100%;
    position: absolute;
    top: 0;
    background-color: black;
    color: white;
    padding: 2rem 1.2rem;
    height: -webkit-fill-available;
    height: -moz-available;
    height: stretch;
}

.gameEndGoto {
  margin-top: 4rem;
  text-align: center;
  border: white solid 1px;
  padding: 5px 15px;
  cursor: pointer;
}

.gameEndVideoOpenText {
  font-size: 0.8rem;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
}

.gameEndVideo {
  width:100%;
  min-height: 30vh;
  margin: auto;
  margin-top: 5vh;
}

</style>
