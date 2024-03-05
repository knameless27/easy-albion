<template>
    <div class="listCards">
        <KCard :image="image" v-for="({ name, image, url, description, available }, index) in views" :key="index">
            <b>{{ name }}</b>
            <p>{{ description }}</p>
            <KButton :disabled="!available" @click="goPage(url)">{{ available ? "See more" : "Coming soon..." }}
            </KButton>
        </KCard>
    </div>
</template>

<script setup>
import views from "@/services/listViews.js"
import KCard from "@/components/KCard.vue";
import KButton from "@/components/KButton.vue";
import { useRouter } from "vue-router"

const router = useRouter()
// import albionApi from "@/services/albionApi"
// console.log(albionApi.getItems().filter((item) => /SWORD/.test(item.UniqueName)))
const goPage = (url) => {
    router.push({name: url})
}
</script>

<style scoped>
.listCards {
    display: inline-grid;
    grid-template-columns: auto auto auto auto;
}
</style>