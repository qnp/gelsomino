<template>
  <span>
    <img src="../assets/pearl.jpeg" v-if="pearlHere">
    <img class="shell-pic" src="../assets/shell.png" v-if="!pearlHere" alt="shell" @click.prevent="flipShell">
  </span>

</template>

<script>
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

<style>
.shell-pic {
  width: 30%;
}
</style>


