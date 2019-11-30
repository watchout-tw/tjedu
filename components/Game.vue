<template>
<div class="game-container-sub" :style="getBackgroundImage()">
  <div class="gamemsg-container" :style="{'padding-bottom': msgPadding + 'px'}">
    <template v-for="(item, index) in chatData">
      <GameChat :key="index" :data="item" :avatar="selectCharacter.meta.avatar" />
    </template>
  </div>
  <template v-if="selectDisplay">
    <GameSelect :data="selectData" @onselect="onSelectACtion" />
  </template>
</div>
</template>

<script>
import GameChat from '~/components/GameChat'
import GameSelect from '~/components/GameSelect'
import { SYSTEM, CHARACTER_A } from '~/data/game'

export default {
  data() {
    return {
      SYSTEM,
      CHARACTER_A,
      chatData: [],
      selectCharacter: null,
      selectData: null,
      selectDisplay: false,
      msgPadding: 0
    }
  },
  mounted() {
    this.scrollToEnd()
    this.init()
  },
  updated() {
    this.scrollToEnd()
  },
  computed: {
    test() {
      return true
    }
  },
  methods: {
    async pushChat(data) {
      for(const item of data.script) {
        this.chatData.push(item)
        await this.delay(item.msg.length)
      }
      switch(data.nextTo) {
        case 'SELECT':
          this.doActionSelect(data.selects)
          break
      }
    },
    doActionSelect(selects) {
      this.selectData = selects
      this.selectDisplay = true
      switch(selects.length) {
        case 1:
          this.msgPadding = 115
          break
        case 2:
          this.msgPadding = 160
          break
        case 3:
          this.msgPadding = 180
          break
        case 4:
          this.msgPadding = 230
          break
        case 5:
          this.msgPadding = 255
          break
        default:
          this.msgPadding = 180
      }
    },
    async onSelectACtion(item) {
      if(item.type === 'SCRIPT' || item.type === 'START') {
        switch(item.link[0]) {
          case 'SYSTEM':
            this.selectCharacter = this.SYSTEM
            break
          case 'CHARACTER_A':
            this.selectCharacter = this.CHARACTER_A
            break
        }

        if (item.type === 'SCRIPT') {
          this.selectDisplay = false
          await this.delay()
          this.pushChat(this.selectCharacter[item.link[1]])
          this.msgPadding = 0
        } else if(item.type === 'START') {
          this.chatData = []
          this.pushChat(this.selectCharacter[item.link[1]])
          this.selectDisplay = false
          this.msgPadding = 0
        };
      } else if(item.type === 'LINK') {
        window.open(item.link, '_blank')
      } else if(item.type === 'START') {
        this.selectCharacter = this.SYSTEM
        this.chatData = []
        this.pushChat(this.selectCharacter[item.link[1]])
        this.selectDisplay = false
        this.msgPadding = 0
      }
    },
    onSelectCharacter(character) {
      this.selectCharacter = character
      this.pushChat(this.selectCharacter.step1)
    },
    init() {
      this.selectCharacter = this.SYSTEM
      this.pushChat(this.selectCharacter.start)
    },
    scrollToEnd() {
      let container = document.querySelector('.gamemsg-container')
      let scrollHeight = container.scrollHeight
      container.scrollTop = scrollHeight
    },
    delay(sec = null) {
      let dice = 1000
      if(!sec) {
        dice = Math.floor(Math.random() * (1200 - 700 + 1)) + 700
      } else {
        dice = Math.floor(sec * 110 + Math.random() * (100))
      }
      if(dice > 1800) {
        dice = 1800
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, dice)
      })
    },
    getBackgroundImage() {
      if(this.selectCharacter) {
        let imageFilePath = require(`~/assets/images/${this.selectCharacter.meta.background}`)
        return {
          backgroundImage: `url(${imageFilePath})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
        }
      }
    }
  },
  components: {
    GameChat, GameSelect
  }
}
</script>

<style lang="scss">

.gamemsg-container {
  width: 100%;
  height: 100vh;
  max-height: 520px;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 1px;
  }
  padding-top: 20px;
}

.game-container-sub {
  width: 100%;
  height: 100vh;
  max-width: 100%;
  max-height: 520px;
  font-size: 16px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .game-container-sub {
    max-height: 520px;
    max-width: 350px;
  }
}
</style>
