<template lang="pug">
  .board
    transition-group(name="flip-list")
      cover(v-for='i in covers',:full='repartition[i-1]',:key='i',:show='repartition[i-1] && show')
</template>

<style scoped lang="stylus">
  img
    width 213px
    heigth 202px

  .flip-list-move
    transition transform 0.5s ease

</style>

<script>

import Cover from '@/components/game/Cover'
import _ from 'lodash'

export default {

  name: 'board',

  components: {
    Cover,
  },

  props: {
    numCovers: {
      type: Number,
      default: 3
    },
    repartition: {
      type: Array,
      default: () => [false, false, false]
    },
    shuffle: {
      type: Boolean,
      default: false
    },
  },

  data () {
    return {
      show: false,
      covers: [1, 2, 3]
    }
  },

  methods: {
    oneStepShuffle: function() {
      this.covers = _.shuffle(this.covers);
    }
  },

  watch: {

    repartition: function(val, old) {

      this.show = true

    },

    shuffle: function(val, old) {

      this.show = false
      setTimeout(() => {
        this.oneStepShuffle()
        setTimeout(() => {
          this.oneStepShuffle();
          setTimeout(() => {
            this.oneStepShuffle();
            setTimeout(() => {
              this.oneStepShuffle();
              setTimeout(() => {
                this.oneStepShuffle();
              }, 500)
            }, 500)
          }, 500)
        }, 500)
      }, 1000)

    }

  }

}
</script>
