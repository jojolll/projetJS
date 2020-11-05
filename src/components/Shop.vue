<template>
<b-col style="color: black; background-color: magenta; margin:5px;padding:5px;">
<title>Achats</title>
<h1>Achats</h1>

<ShopPowers />
<ShopItems />


</b-col>
</template>

<script>
import ShopPowers from './ShopPowers.vue'
import ShopItems from './ShopItems.vue'

export default {
  name: 'Shop',
  components: {
    ShopPowers,
    ShopItems
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
