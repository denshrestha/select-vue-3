<script setup>
import { ref } from 'vue';
import Select from './components/Select.vue';

// select value and active state is controlled by parent
const isActive = ref(false)
const selectValue = ref('')

</script>

<template>
  <div class="container h-screen flex justify-center items-center">
    <Select 
    v-model="selectValue"
    :isActive="isActive"
    :options="[1,2,3,4,5]"
    label="Select value"
    @toggle="isActive = !isActive"
    />
  </div>
</template>

<style scoped>

</style>
