<template>
  <div class="background-services relative flex-col justify-center pb-16">
    <div class="text-center">
      <h1 class="color pt-8 text-center">Escolha o serviço que você deseja</h1>
    </div>
    <div class="flex py-16 align-middle justify-center border-container">
      <ServiceFibra class="mx-4"/>
      <ServiceInternet class="mr-4"/>
      <ServiceTv class="mr-4" />
      <ServiceFixo class="mr-4" />
      <ServiceControle class="mr-4"/>
    </div>
  </div>
</template>


<script>
import ServiceFibra from "./ServiceFibra";
import ServiceInternet from "./ServiceInternet";
import ServiceControle from "./ServiceControle";
import ServiceTv from "./ServiceTv";
import ServiceFixo from "./ServiceFixo";
export default {};
</script>

<style lang="postcss" scoped>
.background-services {
  background-color: #eaeaea;
  z-index: 9999;
}

.color {
  font-size: 29px;
  color: #660099;
}

.border-container {
  border: 3px solid #c9c9c9;
  border-radius: 10px;
}
</style>
