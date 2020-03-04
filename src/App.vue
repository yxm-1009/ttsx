<template>
  <div id="app">
    <tarbar></tarbar>
    <router-view/>
  </div>
</template>

<script>
// 引入
import tarbar from './components/tarbar'
export default {
  // 注册
  components: {
    tarbar
  }
}
</script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
</style>
