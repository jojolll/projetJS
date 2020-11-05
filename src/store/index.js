import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 0,
    parSec: 0,
    photos:['https://media.tenor.com/images/e83a6387acfc74ac6925ad82367e72fe/tenor.gif', 'https://media.tenor.com/images/569b2fafe7d6ed43e89e27938c791cb6/tenor.gif','https://static.actu.fr/uploads/2019/07/1562009334-issou-oasis.png','https://steamuserimages-a.akamaihd.net/ugc/874120103203667974/5132E7358A6CBBEA5FD9C6687B6BB449E922E92F/'],
    items:[0,0,0,0],
    itemName:["Flute magique","Risitas X Mario 64","Meme haut de gamme","GIF premium quality"],
    itemCost:[100,1000,2000,8000]
  },
  mutations: {
    items (state, value) {
      state.items = value;
    },
    itemCost (state, value) {
      state.itemCost = value;
    },
    ParSec (state, value) {
      state.parSec = value;
    },
    Total (state, value) {
      state.total = value;
    }
  },
  actions: {
    items: function(context,value) {
          context.commit("items", value);
    },
    itemCost: function(context,value) {
            context.commit("itemCost", value);
    },
    setParSec: function(context,value) {
          context.commit("ParSec", value);
      },
    setTotal: function(context,value) {
          context.commit("Total",value);
      }
  },
  getters: {
    total: state => {
      return state.total;
    },
    parSec: state => {
      return state.parSec;
    },
    photos: state => {
      return state.photos;
    },
    items: state => {
      return state.items;
    },
    itemName: state => {
      return state.itemName;
    },
    itemCost: state => {
      return state.itemCost;
    }
  }
})
