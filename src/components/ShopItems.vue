<template>
<b-row class="justify-content-md-center" style="color: black; background-color: blue; margin:5px;padding:5px;" >

<UnitsItem v-for="(item, index) in this.$store.getters.items" :usage=1 :number=index v-bind:key=index></UnitsItem>

</b-row>
</template>

<script>
import UnitsItem from './UnitsItem.vue'

export default {
  name: 'ShopItems',
  components: {
    UnitsItem
  },
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
