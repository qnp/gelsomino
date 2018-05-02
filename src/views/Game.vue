<template>
  <div>
<Shell v-for="shell in shells" :key="shell.id" @pearlHere="showPearl"/>
  </div>
</template>

<script>
var axios = require("axios");
import Shell from "../components/Shell";

export default {
  data() {
    return {
      shellNumber: 0,
      shells: [
        { name: "shell1", id: 1, pearl: false },
        { name: "shell2", id: 2, pearl: false },
        { name: "shell3", id: 3, pearl: false }
      ]
    };
  },
  components: { Shell },
  methods: {
    showPearl() {
      console.log("Pearl!");
    }
  },

  created() {
    axios
      .get(
        "https://www.random.org/integers/?num=1&min=0&max=2&col=1&base=10&format=plain&rnd=new"
      )
      .then(function(res) {
        this.shellNumber = res.data;
      })
      .catch(function(error) {
        console.log(error.message);
      });
  }
};
</script>

