<template>
    <header id="header">
        <div class="content" :style="{ backgroundColor: ColorSet.bgColor }">
            <h1 :style="{ color: ColorSet.txtColor}">ゆき的补番列表(๑╹ω╹๑ )</h1>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: ['ColorSet']
}
</script>
