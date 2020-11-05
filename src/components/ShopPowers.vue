<template>
<b-row class="justify-content-md-center" style="color: black; background-color: green; margin:5px;padding:5px;">

<h3>ShopPowers</h3>




<b-col>
<h3 >{{this.$store.getters.itemName[this.number]}} : {{this.$store.getters.itemCost[this.number].toLocaleString(undefined, {maximumFractionDigits:0})}} R$ </h3>
</b-col>
<b-col>
<b-img v-on:dragstart.prevent class="unit" :src=this.$store.getters.photos[1]></b-img>
</b-col>






</b-row>
</template>

<script>
export default {
  name: 'ShopPowers',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
