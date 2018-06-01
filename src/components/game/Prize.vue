<template lang="pug">
  img(src='static/pearl.jpeg')
</template>

<style scoped lang="stylus">
  img
    width 150px
    height @width
    position absolute
    z-index 0
    top 50%
    left 50%
    margin-top (-@width/2)
    margin-left (-@width/2)
</style>

<script>
export default {
  name: 'prize',

  props: {

  },

  data () {
    return {

    }
  },

}
</script>
