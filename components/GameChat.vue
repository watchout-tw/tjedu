<template>
  <div class="">
    <template v-if="data.type == 'L_MSG_WITH_AVATAR'">
      <div class="msg-br">
        <div class="speaker-message">
          <div class="speaker-avatar" :style="getImageStyles(avatar)"></div>
          <div class="speaker-triangle"></div>
          <div class="msg-text" v-html="data.msg"></div>
        </div>
      </div>
    </template>
    <template v-else-if="data.type == 'L_MSG'">
      <div class="msg-br">
        <div class="speaker-message">
          <div class="msg-text" v-html="data.msg"></div>
        </div>
      </div>
    </template>
    <template v-else-if="data.type == 'R_MSG'">
      <div class="msg-br" style="text-align: right;">
        <div class="reader-message">
          <div class="reader-triangle"></div>
          <div class="msg-text" v-html="data.msg"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ['data', 'avatar'],
  data() {
    return {
      test: 'tset'
    }
  },
  methods: {
    getImageStyles(fileName, size = 'cover') {
      let imageFilePath = require(`~/assets/images/${fileName}`)
      return {
        backgroundImage: `url(${imageFilePath})`,
        backgroundSize: size,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      }
    }
  }

}
</script>

<style lang="scss">

.msg-text div:last-child{
  margin-bottom: 0rem;
}

.msg-text div{
  margin-bottom: 0.6rem;
}

.msg-br{
  margin-bottom: 20px;
  padding-right: 24px;
  padding-left:14px;
}

.speaker-avatar {
  position: absolute;
  width: 37px;
  height: 37px;
  border-radius: 18px;
  background-color: #FFFFFF;
  margin-top: -8px;
  margin-left: -66px;
}

.speaker-triangle {
  position: absolute;
  margin-left: -19px;
  margin-top: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7px 12px 7px 0;
  border-color: transparent #FFFFFF transparent transparent;
}

.speaker-message {
  position: relative;
  display: inline-block;
  background-color: #FFFFFF;
  border-radius: 4px;
  padding: 8px;
  margin-left: 58px;
  text-align:justify;
}

.reader-triangle {
  position: absolute;
  right: -12px;
  top: 12px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7px 0 7px 12px;
  border-color: transparent transparent transparent rgba(54, 54, 54, 0.8);
}

.reader-message{
  position: relative;
  display: inline-block;
  border-radius: 4px;
  padding: 8px;
  background-color: rgba(54, 54, 54, 0.8);
  color: #FFFFFF;
  text-align: left;
  text-align:justify;
  max-width: 80%;
}
</style>
