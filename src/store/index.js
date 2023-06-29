import {createStore} from "vuex";
import courseConstructor from "@/store/constructor";

let load = {
  mutations: {
    loadStore() {
      if (localStorage.getItem('store')) {
        try {
          this.replaceState(JSON.parse(localStorage.getItem('store')));
        } catch (e) {
          console.log('Could not initialize store', e);
        }
      }
    },
  }
}

export const store = createStore({
  modules: {
    courseConstructor,
    load
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
})
