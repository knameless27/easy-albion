<template>
    <div class="table-container">
        <table class="custom-table">
            <thead>
                <tr>
                    <th v-for="(field, index) in props.fields" :key="index">{{ field }}</th>
                </tr>
            </thead>
            <tbody v-if="!props.customRows">
                <tr v-for="(row, index) in props.rows" :key="index">
                    <td v-for="(item, key) in row" :key="key">{{ item }}</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td v-for="(field, index) in props.fields" :key="index"><input type="text" v-model="waos[field]">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { reactive, watch, defineEmits, defineProps } from "vue"

const waos = reactive({})
const emit = defineEmits(['newObject'])
const props = defineProps({
    rows: {
        type: Array,
        required: false,
        default: () => []
    },
    customRows: {
        type: Boolean,
        required: false,
        default: false
    },
    fields: {
        type: Array,
        required: true,
        default: () => []
    },
})

watch(waos, (newValue) => {
    emit("newObject", newValue)
})
</script>

<style scoped>
.table-container {
    max-width: 100%;
    overflow-x: auto;
}

.custom-table {
    border-collapse: collapse;
}

.custom-table th,
.custom-table td {
    padding: 8px;
    border: 1px solid #ddd;
}

.custom-table th {
    background-color: #f2f2f2;
    text-align: left;
}

.custom-table tr:nth-child(even) {
    background-color: #f2f2f2;
}

.custom-table tr:hover {
    background-color: #ddd;
}
</style>