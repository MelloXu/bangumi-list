<template>
    <section class="banner">
        <div class="card-text">
            
        </div>
        <div class="banner-image" :style="{backgroundImage: 'url(' + img_src + ')'}"></div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            img_src: ''
        }
    },
    mounted() {
        this.getPixivBackground();
    },
    methods: {
        getPixivBackground: function() {
            this.axios.get('./static/api/pixiv').then((res) => {
                let info = res.data;
                let arr = [];
                let _src = arr[Math.floor(Math.random() * info.length)];
                console.log(_src)
            });
        }
    }
}
</script>
