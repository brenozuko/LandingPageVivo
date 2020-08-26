<template>
  <div class="lg:flex lg:justify-center py-4 background-consulta">
    <div class="lg:flex justify-center ">
      <img src="../assets/img/place.png" alt="place icon">
      <h1 class="mr-10 ml-2 ">Consulte sua cobertura</h1>
    </div>
    <div class = "mr-20">
      <input type="text" class ="lg:mr-4 rounded-lg py-2 px-2" placeholder="Digite seu CEP" />
      <input type="text" class="rounded-lg py-2 px-2" placeholder="Digite seu telefone" />
    </div>
    <button class ="background-button text-white py-2 px-16 rounded-lg focus:outline-none focus:shadow-outline hover:bg-purple-700">Verificar</button>
  </div>
</template>


<script>
export default {};
</script>

<style lang="postcss">
.background-consulta {
  background-color: #eaeaea;

}

.background-button {
  background-color: #660099;
}

input {
  border: 2px solid #cecece;
}
</style>
