<template>
  <div>
      <div class="card py-4  bg-white rounded-lg max-w-sm shadow-lg">
        <img class="h-20 mx-auto" src="../../assets/img/controle.png" alt="icon" />
        <div class="px-6 py-4 text-center">
          <div class="font-bold text-xl mb-2 color-text">Vivo Controle</div>
          <p class="text-gray-600 text-sm" style="min-height: 84px;">Com o Vivo Controle você tem a maior cobertura 4.5G do Brasil, apps e ligações ilimitadas.</p>
          <Button />
        </div>
      </div>
    </div>
</template>


<script>
import Button from "./Button";
export default {
}
</script>


<style lang="postcss" scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 2px solid #c9c9c9;
  width: 250px;
}

.color-text {
  color: #660099;
}


</style>
