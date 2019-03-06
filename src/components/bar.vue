<template>
  <div>
    <p>77777777777777</p>
    <input type="text" @input="getSearchFn" placeholder="请输入">
    <button @click="addcountFn">increment{{countFn}}</button>
  </div>
</template>

<script>
var lodash = require('lodash');
import { mapState } from 'vuex'
export default {
  data(){
    return {
      nums:0
    }
  },
  mounted(){
    
  },
  computed:mapState({
    // countFn: state => state.count,
    countFn: 'count',
  }),
  methods: {
    addcountFn(){
      this.$store.commit("increment",89)
    },
    getSearchFn: lodash.debounce(function () {
      console.log(this.nums+=1);
    }, 500)
  }
}
</script>

<style scoped>

</style>
