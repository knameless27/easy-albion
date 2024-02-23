<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
import albionApi from "@/services/albionApi"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    console.log(albionApi.getItems().filter((item) => /SWORD/.test(item.UniqueName)))
    // albionApi.getPrices({listItems: "QUESTITEM_TOKEN_AVALON"}).then((res) => {
    //   console.log(res);
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
