import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		count:0,
	  abc:0,
	},
	mutations:{
		increment(state,status) {
			state.count = status;
		}
	}
})
