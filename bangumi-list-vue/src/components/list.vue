<template>
    <div class="card-list">
        <div class="item" v-for="(item,index) in listArray" :key="index">
            <div class="content">
                <div class="embed-responsive" @click="showTips(index)">
                    <div class="cover">
                        <img v-lazy="item.img_src" alt="">
                    </div>
                </div>
                <div class="info">
                    <h3 class="title">
                        <a href="javascript:;" @click="showTips(index)">{{item.name}}<i></i></a>
                    </h3>
                    <div class="stat">
                        <div class="top">
                            <a class="detail" :href="item.link" target="_blank">查看详情</a>
                            <i :class="[item.is_finished ? 'checked' : '']"></i>
                        </div>
                        <a :href="item.watch_link" class="watch_link" target="_blank">补番通道</a>
                    </div>
                    
                </div>
                <div class="card-reveal" :class="{ active: item.active }">
                    <a href="javascript:;" class="close" @click="hideTips(index)"></a>
                    <h3 class="reveal-title">
                        {{item.name}}
                    </h3>
                    <p>
                      {{item.caption}}  
                    </p>
                    <div class="reveal-mark" v-if="item.is_finished">
                        已补完<i></i>
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
          revealShow: false,
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
             let info = res.data.list;
             for(let i = 0, len = info.length; i < len; i++) {
                let _name = info[i].name,
                    _caption = info[i].caption,
                    _img_src = info[i].img_src,
                    _link = info[i].link,
                    _watch_link = info[i].watch_link,
                    _time = info[i].time,
                    _is_finished = info[i].is_finished
                this.listArray.push({
                    name: _name,
                    caption: _caption,
                    img_src: _img_src,
                    link: _link,
                    watch_link: _watch_link,
                    time: _time,
                    is_finished: _is_finished,
                    active: false
                });
            }
          });
      },
      showTips: function(index) {
          this.listArray[index].active = true;
      },
      hideTips: function(index) {
          this.listArray[index].active = false;
      }
  }
}
</script>


