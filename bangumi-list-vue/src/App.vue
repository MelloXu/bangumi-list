<template>
  <div id="app">
    <mainHeader></mainHeader>
    <banner></banner>
    <router-view></router-view>
  </div>
</template>

<script>
import mainHeader from '@/components/header'
import banner from '@/components/banner'
export default {
  data() {
    return {
      
    }
  },
  components: {
    mainHeader,
    banner
  }
}
</script>

<style lang="sass">
  @import '/assets/scss/base.scss'; 
</style>
