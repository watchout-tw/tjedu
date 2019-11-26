<template>
  <div class="gameSelect-br">
    <template v-for="(item, index) in data">
      <div :key="index" class="gameSelect-item" @click="onSelect(item)">{{ item.msg }}</div>
    </template>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {}
  },
  methods: {
    onSelect(item) {
      this.$emit('onselect', item)
    }
  }
}
</script>

<style lang="scss">

.gameSelect-br{
  width: 100%;
  background-color: rgba(54, 54, 54, 0.8);
  padding: 20px 10%;
  position: absolute;
  bottom: 0px;
}

.gameSelect-item{
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  border-radius: 19px;
  border: solid 1px #ffffff;
  margin-bottom: 12px;
  padding: 5px 15px;
  text-align: center;
}

.gameSelect-item:hover {
  cursor: pointer;
}

.gameSelect-item:last-child{
  margin-bottom: 0px;
}
</style>
