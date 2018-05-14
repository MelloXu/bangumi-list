<template>
    <div class="card-list">
        <div class="item" v-for="(item,index) in listArray" :key="index">
            <div class="content">
                <div class="embed-responsive">
                    <div class="cover">
                        <img v-lazy="item.img_src" alt="">
                    </div>
                </div>
                <div class="info">
                    <h3 class="title">
                        <a href="javascript:;">
                            {{item.name}}
                            <i class="i i-list"></i>
                        </a>
                    </h3>
                    <div class="stat">
                        <div class="top">
                            <a class="detail" :href="item.link">查看详情</a>
                            <i class="" :class="[item.is_finished ? 'checked' : '']"></i>
                        </div>
                        
                        <a href="#" class="watch_link">补番通道</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
          listArray: []
      }
  },
  created() {},
  mounted() {
      this.getList();
  },
  methods: {
      getList: function() {
          this.axios.get('./static/api/list').then((res)=> {
             var info = res.data.list;
             this.listArray = info;
          });
      }
  }
}
</script>


