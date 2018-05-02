<template>
  <div>
    <img src="../assets/pearl.jpeg" v-if="pearlHere">
    <img src="../assets/shell.png" alt="shell" @click.prevent.native="flipShell">
  </div>

</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      pearlHere: false
    };
  },
  props: {
    pearl: Boolean
  },
  methods: {
    flipShell() {
      if (this.pearl) {
        this.$emit("pearlHere");
        this.pearlHere = true;
      }
    }
  }
};
</script>

