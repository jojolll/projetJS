<template>
<div>
<b-row :key="MAJ" v-if="this.$store.getters.items[this.number]>0 || this.usage>0" class="justify-content-md-center" style="color: black; background-color: pink; margin:5px; padding:5px;">
<b-col>
<h3 v-if="this.usage>0">{{this.$store.getters.itemName[this.number]}} : {{this.$store.getters.itemCost[this.number].toLocaleString(undefined, {maximumFractionDigits:0})}} R$ </h3>
<h3 v-else>{{this.$store.getters.items[this.number]}} x </h3>
</b-col>
<b-col>
<b-img v-if="this.usage>0" v-on:click="buy(number)" v-on:dragstart.prevent class="shop" :src=this.$store.getters.photos[this.number]></b-img>
<b-img v-else v-on:dragstart.prevent class="unit" :src=this.$store.getters.photos[this.number]></b-img>
</b-col>
</b-row>
</div>
</template>

<script>

export default {
  name: 'UnitsItem',
  props: {
    number: Number,
    photos: [],
    usage: Number
  },
  data(){
    return{
      MAJ: 0,
      old: this.$store.getters.items[this.number],
    };
  },
  methods: {
    buy: function(i) {
        let items = this.$store.getters.items;
        let itemCost = this.$store.getters.itemCost;
        let risitas = this.$store.getters.total;
        let parSec = this.$store.getters.parSec;
        let alea = (Math.floor(Math.random()*(18-11+1))+11)/10;
        if (risitas > itemCost[i]){
                  items[i]++;
                  risitas-=itemCost[i];
                  itemCost[i]*=alea;
                  parSec += itemCost[i]/20;
        }


        this.$store.dispatch("itemCost",itemCost);
        this.$store.dispatch("items",items);
        this.$store.dispatch("setTotal",risitas);
        this.$store.dispatch("setParSec",parSec);
      },
      increment: function() {
        if(this.old != this.$store.getters.items[this.number])     {
          this.MAJ++;
          this.old = this.$store.getters.items[this.number];

        }
      },

  },
  created: function(){
    setInterval(this.increment, 50);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shop{
  height: 100px;
  width: 500px;
  transition: height 0.5s
}
.shop:hover{
  height: 150px;
}
.unit{
  height: 100px;
  transition: height 0.5s
}
.unit:hover{
  height: 150px;
}
</style>
