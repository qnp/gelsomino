<template>
  <div class="bonneteau">
  	<h2 class="bonneteau__title">Mon bonneteau</h2>
  	<button class="bonneteau__button" v-on:click="play()">Play</button>
    <ul class="bonneteau__play" v-bind:class="{ 'start': start}">
    	<li class="bonneteau__shell" v-on:click="shell = 1"><img v-bind:class="{ 'show': shell == 1 }" src="../../static/shell.png" alt="Shell"></li>
    	<li class="bonneteau__shell" v-on:click="shell = 2"><img v-bind:class="{ 'show': shell == 2 }" src="../../static/shell.png" alt="Shell"></li>
    	<li class="bonneteau__shell" v-on:click="shell = 3"><img v-bind:class="{ 'show': shell == 3 }" src="../../static/shell.png" alt="Shell"></li>
    </ul>
    <img class="bonneteau__pearl" v-bind:class="{ 'pos1': random == 0, 'pos2': random == 1, 'pos3': random == 2 }" src="../../static/pearl.jpeg" alt="Pearl">
  </div>
</template>

<script>

export default {
  name: 'Bonneteau',
  data () {
    return {
    	url: "https://www.random.org/integers/?num=1&min=0&max=2&col=1&base=10&format=plain&rnd=new",
    	random : -1,
    	shell: 0,
    	start: true
    }
  },

  created(){
  },

  mounted(){
  },

  methods:{
  	play(){
      let rq = new XMLHttpRequest();

      this.random = 1;
      this.shell = 0;
      this.start = true;

      rq.onreadystatechange = function(vm) {
        if (this.readyState === XMLHttpRequest.DONE) {
          if (this.status === 200) {
            vm.random = this.responseText;
            console.log(this.responseText);
          } else {
            console.log("Request Failed, try again please.");
          }
        }
      }.bind(rq, this);

      setTimeout( ()=>{
		this.start = false;

		rq.open("GET", this.url);
      	rq.send();

      }, 2000);
    }
  },

  computed:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bonneteau{
		position: relative;
		padding-top: 100px;
		text-align: center;
	}

	.bonneteau__title{
		display: block;
		text-transform: uppercase;
		margin-bottom: 200px;
	}

	.bonneteau__button{
		position: absolute;
		top: 180px;
		left: 50%;
		transform: translateX(-50%);
	}

	.bonneteau__play{
		position: relative;
		z-index: 2;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.bonneteau__play.start .bonneteau__shell:first-of-type{
		transform: translateX(400px);
	}

	.bonneteau__play.start .bonneteau__shell:last-of-type{
		transform: translateX(-400px);
	}

	.bonneteau__shell{
		display: inline-block;
		vertical-align: middle;
		margin: 0 100px;
		transform: translateX(0);
		transition: transform 0.2s ease-in-out;
	}

	.bonneteau__shell img{
		width: 200px;
		height: auto;
		cursor: pointer;
		transform: translateY(0);
		transition: transform 0.2s ease-in-out;
	}

	.bonneteau__shell img.show{
		transform: translateY(-150px);
	}

	.bonneteau__pearl{
		position: absolute;
		z-index: 1;
		top: 430px;
		transform: translateX(-50%);
		width: 100px;
		height: auto;
	}

	.bonneteau__pearl.pos1{
		left: calc(50% - 400px);
	}

	.bonneteau__pearl.pos2{
		left: 50%;
	}

	.bonneteau__pearl.pos3{
		left: calc(50% + 400px);
	}
</style>
