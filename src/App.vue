<template>
  <div id="app">
    <Count/>
    <router-view></router-view>
  </div>
</template>

<script>
import Count from './components/Count.vue'

export default {
  name: 'App',
  components: {
    Count
  }
}
</script>

<style>

</style>
