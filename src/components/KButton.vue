<template>
    <button>
        <slot />
    </button>
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

<style scoped></style>