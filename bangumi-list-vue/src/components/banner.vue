<template>
    <section class="banner">
        <div class="card-text">
            
        </div>
        <div class="banner-image" :style="{backgroundImage: 'url(' + img_src + ')'}"></div>
        <img :src="img_src" class="hidden-image" alt="">
    </section>
</template>

<script>
require('exports-loader?RGBaster!../../static/js/rgbaster.js')
export default {
    data() {
        return {
            img_src: '',
            setColor: {
                bgColor: '',
                txtColor: ''
            }
        }
    },
    mounted() {
        this.getPixivBackground();
        setTimeout(() => {
            this.setHeaderColor();
        }, 0);
        
    },
    methods: {
        getPixivBackground: function() {
            this.axios.get('./static/api/pixiv').then((res) => {
                let info = res.data;
                let _src = info[Math.floor(Math.random() * info.length)];
                this.img_src = _src.img_src;
            });
        },
        setHeaderColor: function(){
            let img = document.querySelector('.hidden-image');
            let $this = this;
            RGBaster.colors(img, {
                paletteSize: 50, // 调色板大小
                exclude: [ 'rgb(255,255,255)','rgb(0,0,0)' ],  // 不包括白色
                success: function(payload) {
                    console.log(payload.dominant);
                    // 设置背景色
                    $this.setColor.bgColor = payload.dominant;
                    // 提取颜色R、G、B值
                    let c = payload.dominant.match(/\d+/g);
                    // 转换成灰度值判断颜色深浅
                    let grayLevel = c[0] * 0.299 + c[1] * 0.587 + c[2] * 0.114;
                    if (grayLevel >= 192) {
                        // 若为主题色为浅色，把图标颜色设置为黑色
                        $this.setColor.txtColor = '#333';
                        $this.$emit('sendColor',$this.setColor);
                    } else {
                        $this.setColor.txtColor = '#fff';
                        $this.$emit('sendColor',$this.setColor);
                    }
                }
            });
        },
    }
}
</script>
