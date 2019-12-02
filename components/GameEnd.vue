<template>
  <div class="gameEnd-br">
    <div v-if="isVideo">
      <iframe class="gameEndVideo" :src=" 'https://www.youtube.com/embed/' + data.goto.youtube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="gameEndVideoOpenText">
        <a target="_blank" :href="'https://youtu.be/' + data.goto.youtube ">{{openTxt}}</a>
      </div>
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
      openTxt: '>> 另開影片於新分頁 <<'
    }
  },
  methods: {
    showVideo() {
      this.isVideo = true
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

.gameEndGoto, .gameEndVideoOpenText {
  margin-top: 2rem;
  text-align: center;
  border: white solid 1px;
  padding: 5px 15px;
  cursor: pointer;
}

.gameEndVideo {
  width:100%;
  min-height: 30vh;
  margin: auto;
  margin-top: 5vh;
}

</style>
