<template>
  <div class="background-services relative flex-col justify-center pb-16">
    <div class="text-center">
      <h1 class="color pt-8 text-center">Escolha o serviço que você deseja</h1>
    </div>
    <div>
    <Services class="mx-auto"/>
    </div>
  </div>
</template>


<script>
import Services from "./Services"
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

Services {

}
</style>
