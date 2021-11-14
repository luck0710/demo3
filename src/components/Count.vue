<template>
  <div>
    <router-link class="ab" to="/haha">123</router-link>
    <router-link class="ab" to="/xixi">456</router-link>
  </div>
</template>

<script>
export default {
  name: 'Count',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ab {
    border: 1px solid black;
    background-color: red;
    margin-left: 50px;
  }
</style>
