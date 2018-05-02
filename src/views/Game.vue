<template>
  <div>
    <div class="control">
  <button class="button" v-if="!newGame" @click="getNumber">Start Game</button>
  <button class="button" v-if="newGame" @click="reset">Reset Game</button>
  </div>
  <div class="shell-container">
<Shell class="align" v-if="newGame" v-for="shell in shells" :key="shell.id" :pearl="shell.pearl" @pearlHere="showPearl"/>
  </div>
  </div>
</template>

<script>
var axios = require("axios");
import Shell from "../components/Shell";

export default {
  data() {
    return {
      newGame: false,
      shells: [
        { name: "shell1", id: 0, pearl: false },
        { name: "shell2", id: 1, pearl: false },
        { name: "shell3", id: 2, pearl: false }
      ]
    };
  },
  components: { Shell },
  methods: {
    showPearl() {
      console.log("Pearl!");
    },
    getNumber() {
      this.newGame = !this.newGame;
      axios
        .get(
          "https://www.random.org/integers/?num=1&min=0&max=2&col=1&base=10&format=plain&rnd=new"
        )
        .then(res => {
          return (this.shells[res.data].pearl = true);
        })
        .catch(function(error) {
          console.log(error.message);
        });
    },
    reset() {
      this.newGame = false;
      for (let i = 0; i < this.shells.length; i++) {
        this.shells[i].pearl = false;
      }
    }
  },

  created() {
    this.shellNumber = -1;
    this.newGame = false;
  }
};
</script>

<style>
.control {
  text-align: center;
}

.button {
  position: absolute;
  top: 5%;
}

.align {
  margin-left: auto;
  margin-right: auto;
}

.shell-container {
  text-align: center;
}
</style>


