<template>
  <div class="list">
    <div v-for="item in 200" :key="item">1234554532</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'list',
  
}
</script>

<style lang="scss" scoped>
.list{
  background: greenyellow;
}
</style>