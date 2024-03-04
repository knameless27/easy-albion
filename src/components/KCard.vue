<template>
    <div class=card>
        <h3 v-if="title">{{ title }}</h3>
        <img :src="props.image" alt="">
        <slot />
    </div>
</template>

<script setup>
// eslint-disable-next-line
const props = defineProps({
    image: {
        type: String,
        required: false,
        default: ""
    },
    title: {
        type: String,
        required: false,
        default: ""
    },
})
</script>

<style scoped>
.card {
    border: 1px solid blue;
}
</style>