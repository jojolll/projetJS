<template>
  <div class="container-fluid" style="background-color: brown;">
    <b-row>
      <b-col>
        <Clicker ALIGN="CENTER"/>
      </b-col>
      <b-col cols="3">
        <Units ALIGN="CENTER"/>
      </b-col>
      <b-col>
        <Shop ALIGN="CENTER"/>
      </b-col>
    </b-row>


  </div>
</template>

<script>
import Clicker from './components/Clicker.vue'
import Units from './components/Units.vue'
import Shop from './components/Shop.vue'



export default {
  name: 'App',
  components: {
    Clicker,
    Units,
    Shop
  },
  methods: {
    increment: function() {
      this.$store.dispatch("setTotal",this.$store.getters.total+this.$store.getters.parSec);
    }
  },
  mounted: function(){
    setInterval(this.increment, 1000);
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
