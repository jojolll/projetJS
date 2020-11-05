<template>
<b-row class="justify-content-xl-center" style="background-color: blue; margin:5px;padding:5px;">
<h2>You have : {{total.toLocaleString(undefined, {maximumFractionDigits:0})}} RISITAS</h2>
<h3>Risitas per second : {{parSec.toLocaleString()}} r/s</h3>
</b-row>
</template>

<script>
export default {
  name: 'ClickerCounter',
  props: {
    msg: String
  },
  computed: {
    total: function() {
      return this.$store.getters.total;

    },
    parSec: function() {
      return this.$store.getters.parSec;
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
