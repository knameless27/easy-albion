<script setup>
import { reactive, watch, ref, defineProps } from "vue"
import KSelect from './KSelect.vue';
import KCard from './KCard.vue';
import KButton from './KButton.vue';

const defaultConfig = reactive({
    premium: false,
    station_price: 0,
    focus: false,
    city_with_bonus: false,
    focus_points: 0,
    plot: 0,
    item: null,
})

const taxes = ref(10.5)

watch(() => defaultConfig.premium, (newValue) => {
    if (newValue == true) return taxes.value = 6.5
    taxes.value = 10.5
})

const props = defineProps({
    premium: {
        default: true,
        type: Boolean,
        required: false
    },
    station_price: {
        default: false,
        type: Boolean,
        required: false
    },
    focus: {
        default: false,
        type: Boolean,
        required: false,
    },
    city_with_bonus: {
        default: false,
        type: Boolean,
        required: false,
    },
    focus_points: {
        default: false,
        type: Boolean,
        required: false,
    },
    plot: {
        default: false,
        type: Boolean,
        required: false,
    },
    item: {
        default: false,
        type: Boolean,
        required: false,
    },
    // tier: {
    //     default: 0,
    //     type: Number,
    //     required: false,
    // },
    // fish: {
    //     default: 0,
    //     type: Number,
    //     required: false,
    // },
    // taxes: {
    //     default: 10.5,
    //     type: Number,
    //     required: false
    // },
})
</script>

<template>
    <KCard title="Configuration">
        <div class="config-layout">
            <div>
                <p v-if="props.premium">Premium</p>
                <p>Taxes</p>
                <p v-if="props.focus">Focus</p>
                <p v-if="props.focus_points">Focus points</p>
                <p v-if="props.plot">Plot</p>
                <p v-if="props.item">item</p>
                <p v-if="props.city_with_bonus">City with bonus</p>
                <p v-if="props.station_price">Station price</p>
            </div>
            <div>
                <input v-if="props.premium" type="checkbox" v-model="defaultConfig.premium">
                <p>{{ taxes }}</p>
                <input v-if="props.focus" type="checkbox" v-model="defaultConfig.focus">
                <input v-if="props.focus_points" type="number" v-model="defaultConfig.focus_points">
                <input v-if="props.plot" type="number" v-model="defaultConfig.plot">
                <KSelect v-if="props.item" :options="[{label:'waos', value: 'sexito'}]" v-model="defaultConfig.item" />
                <input v-if="props.city_with_bonus" type="checkbox" v-model="defaultConfig.city_with_bonus">
                <input v-if="props.station_price" type="number" v-model="defaultConfig.station_price">
            </div>
        </div>
        <KButton @click="$emit('calculate', defaultConfig)">Calculate</KButton>
    </KCard>
</template>


<style scoped>
.config-layout {
    display: grid;
    grid-template-columns: auto 180px;
    align-items: center;
}
</style>