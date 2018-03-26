<template>
  <div>
    <div class="row" v-if="onLoad">
      <div class="col-lg-12">
        <h1>Loading...</h1>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-lg-4" v-for="shell in shells" v-bind:key="shell">
          <img src="static/shell.png" alt="" v-on:click="guess(shell)" v-if="shell !== guessed">
          <img src="static/pearl.jpeg" alt="" v-if="shell === bingo && guessed === bingo">
        </div>
      </div>
      <div class="row" v-if="gameover">
        <div class="col-lg-12 text-center">
          <button class="btn btn-primary" v-on:click="initBingo()">Retry ?</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Bonneteau',
  data () {
    return {
      onLoad: true,
      bingo: null,
      shells: [0, 1, 2],
      guessed: null,
      gameover: false
    }
  },
  methods: {
    guess(number){
      var that = this;
      if(that.gameover) return;
      that.guessed = number;
      if(number === this.bingo){
        setTimeout(function(){
          alert('BINGO !!!!');
          that.gameover = true;
        }, 200);
      } else {
        setTimeout(function(){
          alert('YOU LOSE ! GIVE ME YOUR MONEY !');
          that.gameover = true;
        }, 200);
      }
    },
    initBingo(){
      var that = this;
      that.guessed = null;
      that.onLoad = true;
      that.gameover = false;
      axios.get('https://www.random.org/integers/?num=1&min=0&max=2&col=1&base=10&format=plain&rnd=new').then(function(res){
        that.bingo = res.data;
        that.onLoad = false;
      });
    }
  },
  created(){
    this.initBingo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    cursor: pointer;
  }
</style>
