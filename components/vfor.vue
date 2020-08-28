<template>
  <div class="component-carrossel vue-slider-container">
    <div
      v-for="item in arrayDados"
      :key="item.title"
      class="card vue-slider-slide"
    >
      <img :src="item.img" alt="">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      arrayDados: [
        {
          img: "teste.jpg",
          title: "Produto1",
          description: "klhadkahldhasldkhalskdhasd",
        },
        {
          img: "teste2.jpg",
          title: "Produto2",
          description: "klhadkahldhasldkhalskdhasd",
        },
        {
          img: "teste3.jpg",
          title: "Produto3",
          description: "klhadkahldhasldkhalskdhasd",
        },
      ]
    }
  },
  methods: {
    getList() {
      axios.get(
        "http://google.com"
      ).then((res) => {
        console.log(res.data);
        this.arrayDados = res.data;
      }).catch((error) => {
        console.error(error);
      })
    },
    init() {
      vueSlider(".vue-slider-container");
    }
  }
}
</script>

<style>

</style>