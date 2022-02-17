<script lang="ts" setup>
import { useCounter } from '../stores/counter'

const counterStore = useCounter()
</script>

<template>
  <div>
    <p>{{ counterStore.counter }}</p>
    <div>
      <button type="button" @click="counterStore.$reset">reset</button>
      <button type="button" @click="counterStore.increment()">increase</button>
    </div>
  </div>
</template>
