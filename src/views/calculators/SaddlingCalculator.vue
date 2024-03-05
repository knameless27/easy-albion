<script setup>
import ConfigCalculators from '@/components/ConfigCalculators.vue';
import KTable from '@/components/KTable.vue';

function calculate(config) {
    console.log(config)
}

function newObject(items) {
    console.log(items)
}

const fields = [
    "Mount Price",
    "Animal Price",
    "Material 1",
    "Cant 1",
    "Material 2",
    "Heart/Special",
    "Cant Heart",
    "IV",
    "Profit",
]
</script>

<template>
    <div>
        <h1>Saddling</h1>
        <div class="default-calc-layout">
            <ConfigCalculators @calculate="calculate" station_price item />
            <KTable :fields="fields" @newObject="newObject" customRows/>
        </div>
    </div>
</template>

<style scoped></style>