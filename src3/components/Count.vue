<template>
  <div>
    <h2>计算结果：{{this.$store.state.sum}}</h2>
    <select v-model="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="decreament">-</button>
    <button @click="addOdd">奇数再+</button>
    <button @click="addasync">异步+</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data(){
    return {
      n:1
    }
  },
  methods:{
    add(){
      this.$store.dispatch("jia",this.n)
    },
    decreament(){
      this.sum -= this.n*1
    },
    addOdd(){
      if (this.sum%2){
        this.sum += this.n*1
      }
    },
    addasync(){
      // setInterval(function () {
      //   console.log("异步加了")
      //   this.sum += this.n*1
      // }
      setTimeout(()=>{this.sum += this.n*1},2000)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
