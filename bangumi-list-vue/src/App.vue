<template>
  <div id="app">
    <mainHeader :ColorSet="ColorObj"></mainHeader>
    <banner @sendColor="setColor"></banner>
    <router-view></router-view>
  </div>
</template>

<script>
import mainHeader from '@/components/header'
import banner from '@/components/banner'
export default {
  data() {
    return {
      ColorObj: {}
    }
  },
  components: {
    mainHeader,
    banner
  },
  mounted() {

  },
  methods: {
    setColor: function(data){
        this.ColorObj = data;
    }
  }
}
</script>

<style lang="sass">
  @import '/assets/scss/base.scss'; 
</style>
