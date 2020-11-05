<template>
<b-col align-content="center" style="color: black; background-color: magenta; margin: 5px;padding:5px;">

<title align-content="center">Clicker</title>
<h1 align-content="center">EL RISITAS MEME CLICKER</h1>
<ClickerCounter ALIGN="CENTER"/>
<ClickerUserAction ALIGN="CENTER"/>


</b-col>
</template>

<script>
import ClickerUserAction from './ClickerUserAction.vue'
import ClickerCounter from './ClickerCounter.vue'

export default {
  name: 'Clicker',
  components: {
    ClickerUserAction,
    ClickerCounter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
