<template lang="pug">
  .cover(@click='handleClick')
    img(:class='className',src='static/shell.png')
    prize(v-if='full')
</template>

<style scoped lang="stylus">
  .cover
    position relative
    width 220px
    height @width

  img
    position absolute
    z-index 1
    width 213px
    heigth 202px
    transition transform 1s ease

    &.show
      transform translateX(100%)

</style>

<script>

import Prize from '@/components/game/Prize'

export default {

  name: 'cover',

  components: {
    Prize,
  },

  props: {
    full: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      className: ''
    }
  },

  methods: {
    handleClick: function() {
      this.className = 'show'
    }
  },

  watch: {
    show: function(val, old) {
      if (val) this.className = 'show'
      else this.className = ''
    }
  }

}
</script>
