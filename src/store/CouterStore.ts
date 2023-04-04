import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCouterStore = defineStore('counter', {
    state(){
        return {
            count:0
        }
    },
    actions:{
        increment(){
            this.count++
        }
    },
    getters:{
        showCount():string{
            return "O valor é "+this.count
        }
    }
})