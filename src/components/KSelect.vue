<template>
    <select v-model="selectedOption" class="select">
        <option v-for="option in props.options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
</template>

<script setup>
import { defineProps, ref, defineEmits, watch } from 'vue'

const selectedOption = ref('');

const props = defineProps({
    options: {
        type: Array,
        default: () => [],
        validator: (value) => {
            return value.every(option => {
                return typeof option.label === 'string'
            });
        },
        required: true
    }
})

const emit = defineEmits(['update:modelValue']);
watch(selectedOption, (newValue) => {
    console.log(newValue);
    emit('update:modelValue', newValue);
});
</script>

<!-- padding: 0.5rem; -->

<style scoped>
.select {
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>