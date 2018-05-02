<template>
  <section class="container" id="bonneteau-js-app">
      <div class="header">
        <h2>Welcome to my vuejs Bonneteau app</h2>
      </div>
      <div class="play-area">
        <div class="row">
          <div class="col-xs-12">
            <button type="button" name="button" @click="mix()" class="btn btn-success">Nouvelle Partie</button>
          </div>
        </div>
        <div class="row shell-container" v-show="pearlToken !== null">
          <div class="col-xs-12 col-md-4 shell" v-for="(shell, key) in shells" :key="shell.id">
            <div class="card" :title="shell.name" @click="checkForResult(shell)">
              <img class="card-img-top" src="/static/pearl.jpeg" alt="Card image cap" v-if="(shell.pearlToken || shell.pearlToken === 0) && canShowPearl">
              <img class="card-img-top" src="/static/shell.png" alt="Card image cap" v-else>
            </div>
          </div>
        </div>
        <div class="row" v-if="showResultArea">
          <div class="col-xs-12 col-sm-12">
            <h2 style="color:green; text-align:center; margin-top:30px;" v-if="canShowPearl">Bravo vous avez trouvé le coquillage avec la perle !</h2>
            <h2 style="color:red; text-align:center; margin-top:30px;" v-else>Mauvais choix, réessayez encore !!!</h2>
          </div>
        </div>
        <div class="popup" v-show="canShowPopup">
          <h3>Mélange en cours...</h3>
        </div>
      </div>
    </section>
</template>

<script>

var store = {
  shells: [{
      name: 'Elisabeth',
      id: 1
    },
    {
      name: 'Rose',
      id: 2
    },
    {
      name: 'Anna',
      id: 3
    }
  ]
}
export default {
  name: 'Bonneteau',
  data () {
    return {
      message: 'Helle mec',
      shells: store.shells,
      pearlToken: null,
      canShowPearl: false,
      canShowPopup: false,
      showResultArea: false
    }
  },
  methods: {
    mix: function () {
      this.canShowPopup = true
      this.pearlToken = null
      this.canShowPearl = false
      this.$http.get('https://www.random.org/integers/?num=1&min=0&max=2&col=1&base=10&format=plain&rnd=new')
      .then((response) => {
        let data = this.shells
        /**
         * The next line was the problem of the first pull request,
         * I was doing a strict comparison between a string and an integer
         */
        this.pearlToken = parseInt(response.data)
        if (this.pearlToken !== null) {
          this.canShowPopup = false
          for (var i = 0; i < this.shells.length; i++) {
            let obj = this.shells[i]
            if (i === this.pearlToken) { /** Before this.pearlToken was a string without parseInt**/
              obj.pearlToken = this.pearlToken /** Add token on the the found shell **/
            } else {
              if (obj.hasOwnProperty('pearlToken')) {
                delete obj.pearlToken /** Remove token on previous found shell **/
              }
            }
          }
        } else {
          this.canShowPopup = false
        }
      })
      .catch((error) => {
        console.error(error);
      })
    },
    checkForResult: function (shell) {
      this.showResultArea = true
      if (shell.hasOwnProperty('pearlToken')) {
        this.canShowPearl = true
      } else {
        this.mix() /** Remix agan for an other party*/
      }
    }
  }
}

</script>

<style media="screen" lang="scss">
@mixin primary {
  background-color: #337ab7;
  color: #fff;
}
@mixin success {
  background-color: #01a300;
  color: #fff;
}
body {
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    h3 {
      text-align: center;
      margin-top: 300px;
      color: #fff;
    }
  }
  .mb-2 {
    margin-bottom: 8px;
  }
  .container {
    .shell-container {
      margin-top: 20px;
    }
    .card {
      img {
        display: block;
        width: 100%;
        margin: auto;
      }
    }
    border: 1px solid #eee;
    .header {
      padding: 2em;
      text-align: center;
      @include primary();
      text-transform: uppercase;
    }
    .play-area {
      padding: 1em;
      .row {
        .shell {
          min-height: 300px;
          border: 1px solid #ccc;
        }
      }
    }
  }
}
</style>
