<template>
    <div>
        {{ counter.showCount }}
        <button @click="counter.increment">aumentar</button>
    </div>
</template>

<script setup lang="ts">
import { useCouterStore } from '../store/CouterStore';

const counter = useCouterStore();


</script>