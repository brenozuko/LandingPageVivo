<template>
  <div class="background-bottom align-center hidden lg:flex justify-end bg-cover py-12">
    <div class="flex-col flex-wrap">
      <h3 class="text-3xl text-bottom">Ligue grátis</h3>
      <h1 class="text-4xl text-white">0800 955 1000</h1>
    </div>

    <div class="flex-col flex-wrap ml-48 mt-4">
      <h3 class="text-xl text-bottom">Ou ligamos pra você</h3>
      <input
        type="text"
        class="rounded-lg lg:mr-12 mb-4 py-2 lg:px-16 px-12"
        placeholder="Digite seu telefone"
      />
    </div>

    <div class = "mt-10 mr-12">
    <button
      class="btn py-4 px-12 text-white rounded-lg focus:outline-none focus:shadow-outline hover:bg-pink-500"
    >Me ligue</button>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style lang="postcss">
.background-bottom {
  background-image: url("../assets/img/banner-bottom.png");
  background-position: left;


}

.text-bottom {
  color: #bd5aef;
}

.btn {
  background-color:#E73679;
}
</style>
