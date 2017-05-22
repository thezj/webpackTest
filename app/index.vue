<template>
    <div>
        <p>{{greeting}} vue</p>
        <video controls="">
            <source :src="mp4">
        </video>
    </div>
</template>

<script>
import mp4 from './video.mp4'
export default {
    data() {
        return {
            greeting: 'hello',
            mp4
        }
    }
}
</script>
<style lang='less'>
p {
    border: 2px dashed #fd1
}
</style>

