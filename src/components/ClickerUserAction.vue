<template>
<b-row class="justify-content-md-center" style="color: black; background-color: yellow; margin:5px; padding:5px;">
<H1>CLICK ME NOOOOOOOW</H1>
<b-img class="img" v-on:dragstart.prevent v-on:click="increment" src="https://image.noelshack.com/fichiers/2017/32/7/1502619039-1502618510-risihd-3.png"  alt="RisitaClick"></b-img>

</b-row>
</template>

<script>
export default {
  name: 'ClickerUserAction',
  props: {
    msg: String
  },
  computed: {

  },
  methods: {
    setTotal: function(total) {
      this.$store.dispatch("setTotal",total);
      //this.$router.push('Race')
    },
    increment: function() {
      this.$store.dispatch("setTotal",this.$store.getters.total+1);
      this.$store.dispatch("setParSec",this.$store.getters.parSec+1);
    },
    setParSec: function(parSec) {
      this.$store.dispatch("setParSec",parSec);
      //this.$router.push('Race')
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
  width: 100%;
  margin: auto;
  transition : width 0.2s, transform 2s, filter 2s;
}
.img:hover {
  transform: rotate(180deg);
  width: 80%;
  margin: auto;
  filter: invert(40%) grayscale(100%) brightness(60%) sepia(70%) hue-rotate(-50deg) saturate(400%) contrast(5);
}
.img:active {
  transform: rotate(30000deg);
  width: 140%;
  margin: auto;
  filter: invert(100%);
  transition : transform 30s
}
</style>
