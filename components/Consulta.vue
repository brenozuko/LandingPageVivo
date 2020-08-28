<template>
  <div class="lg:flex justify-center py-4 background-consulta">
    <div class="flex items-center justify-center w-full flex-wrap">
      <img src="../assets/img/place.png" class="hidden lg:inline-block lg:mr-2" alt="place icon" />
      <h1 class="lg:mr-20 lg:mb-0 sm:mb-8">Consulte sua cobertura</h1>
      <input type="text" class="lg:mr-4 rounded-lg py-4 lg:px-6 px-12" placeholder="Digite seu CEP" />
      <input
        type="text"
        class="rounded-lg lg:mr-0 py-4 lg:px-6 px-12"
        placeholder="Digite seu telefone"
      />
      <button
        class="background-button py-4 px-16 ml-8 lg:mt-0 mt-4 text-white rounded-lg focus:outline-none focus:shadow-outline hover:bg-purple-700"
      >Verificar</button>
    </div>
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
