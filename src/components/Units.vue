<template>
<b-col style="color: black; background-color: magenta; margin:5px;padding:5px;">

<title>Possédé</title>
<h1>Possédé</h1>
<UnitsItem v-for="(item, index) in this.$store.getters.items" :number=index v-bind:key=index></UnitsItem>
</b-col>
</template>

<script>
import UnitsItem from './UnitsItem.vue'

export default {
  name: 'Units',
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

</style>
