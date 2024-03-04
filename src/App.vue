<template>
  <HeaderComp></HeaderComp>
  <main class="mainContent">
    <router-view />
  </main>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
export default {
  components: {
    HeaderComp
  }
}
</script>

<style>
* {
  margin: 0;
}

.mainContent {
  padding: 1%;
  display: flex;
  margin-top: 1%;
  margin-inline: 10%;
  border: 1px solid red;
  justify-content: center;
  border-radius: 15px 15px 15px 15px;
}
</style>