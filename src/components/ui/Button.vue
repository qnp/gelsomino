<template lang="pug">
  button(:disabled='disabled')
    slot
</template>

<style scoped lang="stylus">
</style>

<script>
export default {
  name: 'prize',

  props: {
    disabled: {
      type: String,
      default: false
    }
  },

  data () {
    return {

    }
  },

}
</script>
