<template lang="pug">
  #bonneteau
    board(:repartition='repartition',:shuffle='shuffle')
    button(v-if='gameProgress === 0',@click='startGame') start
    button(v-if='gameProgress === 1',@click='goShuffle') Ok, go !
</template>

<style lang="stylus">
  body
    padding-top 50px
  .starter-template
    padding 40px 15px
</style>

<script>
// import modules
import 'whatwg-fetch'

// import components
import Board from '@/components/game/Board'
import Button from '@/components/ui/Button'

export default {

  name: 'app',

  components: {
    Board
  },

  data: function() {
    return {
      prizePosition: null,
      numCovers: 3,
      repartition: [],
      gameProgress: 0,
      waiting: false,
      shuffle: false
    }
  },

  methods: {

    startGame: function() {

      this.getRandomNumber();
      this.gameProgress = 1;

    },

    goShuffle: function() {

      this.shuffle = true;

    },

    getRandomNumber: function() {

      fetch('https://www.random.org/integers/?num=1&min=0&max=2&col=1&base=10&format=plain&rnd=new')

        .then((response) => response.text())
        .then((body) => {

          this.prizePosition = Number(body)

        }).catch((err) => {

          throw new Error(err);

        })

    }

  },

  watch: {

    prizePosition: function(val, old) {

      const repArray = [];

      for (let i=0; i<this.numCovers; i++) {
        repArray.push(
          val === i
        )
      }

      this.repartition = repArray;

    }

  }
}
</script>
