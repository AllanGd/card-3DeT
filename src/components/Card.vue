<template>
    <div class="w-72 p-5 bg-white rounded-md shadow-xl">
        <div class=" grid grid-cols-2 gap-6">
            <img src="https://cdnb.artstation.com/p/assets/images/images/050/137/691/large/vitaly-perevoshikov-2.jpg?1654134898" alt="foto perfil"
                class="h-24 w-24 object-cover rounded-full ring-4 ring-offset-2 ring-slate-400">
            <div class="flex flex-col gap-1 justify-center">
                <div class="text-gray-600 text-base font-bold capitalize">
                    {{ data.player.nome }}
                </div>
                <div class="text-gray-500 text-sm capitalize">{{ data.player.kit }}</div>
                <div class="text-gray-500 text-sm">Lvl 3 / PE 5</div>
            </div>
        </div>
        <div class="mt-4 flex justify-between font-bold">
            <div>PV
                <span class="ml-2 text-gray-500">10/10</span>
            </div>
            <div>PM
                <span class="ml-2 text-gray-500">10/10</span>
            </div>
        </div>
        <div class="grid grid-cols-2 place-content-between mt-6 gap-2">
            <div>Força
            </div>
            <div class="text-gray-500 text-end font-bold">{{ data.player.forca }}</div>
            <div>Habilidade
            </div>
            <div class="text-gray-500 text-end font-bold">{{ data.player.habilidade }}</div>
            <div>Resistência
            </div>
            <div class="text-gray-500 text-end font-bold">{{ data.player.resistencia }}</div>
            <div>Armadura
            </div>
            <div class="text-gray-500 text-end font-bold">{{ data.player.armadura }}</div>
            <div>Poder de Fogo
            </div>
            <div class="text-gray-500 text-end font-bold">{{ data.player.pdf }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    

    import { usePersonStore } from '../store/PersonStore';

    const data = usePersonStore();
</script>