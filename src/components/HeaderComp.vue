<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"
import views from "@/services/listViews.js"

const seeItems = ref(false)
const buttonList = ref(null)
const dropdown = ref(null)
const router = useRouter()


function toggleDropdown() {
    seeItems.value = !seeItems.value;
    if (seeItems.value) return document.addEventListener('click', closeDropdown);
    document.removeEventListener('click', closeDropdown);
}

function closeDropdown(event) {
    if (dropdown.value.contains(event.target)) return
    seeItems.value = false;
    document.removeEventListener('click', closeDropdown);
}

</script>

<template>
    <nav class="navHeader">
        <div>
            <img src="" alt="logo" @click="router.push({ name: 'home' })">
        </div>
        <div ref="dropdown">
            <button ref="buttonList" id="buttonList" @click="toggleDropdown">waos</button>
            <Transition name="slide-fade">
                <div v-if="seeItems" class="listItems">
                    <div v-for="({ name, available, url }, index) in views" :key="index">
                        <p v-if="available" @click="router.push({ name: url })">{{ name }}</p>
                    </div>
                </div>
            </Transition>
        </div>
    </nav>
</template>


<style scoped>
#buttonList {
    cursor: pointer;
}

.navHeader {
    position: sticky;
    top: 0;
    display: flex;
    padding: 1%;
    justify-content: space-between;
    background-color: rebeccapurple;
}

.listItems {
    list-style: none;
    position: absolute;
    right: 0;
    background-color: rebeccapurple;
    border-radius: 0px 0px 10px 10px;
    padding-top: 1%;
    padding-left: 1%;
    padding-right: 1%;
}

.listItems p {
    padding-top: 9%;
    padding-bottom: 1%;
    cursor: pointer;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-5px);
    opacity: 0;
}
</style>