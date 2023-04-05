import { defineStore } from "pinia";
import { reactive } from "vue";

export const usePersonStore = defineStore("person", ()=>{
    const player = reactive({
        nome: "lion el jonson",
        xp: 7,
        kit: "Primarch",
        forca: 3,
        habilidade: 2,
        resistencia: 2,
        armadura: 1,
        pdf: 0,
    })

    return {player}
})