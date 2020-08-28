<template>
  <div>
      <div class="card py-4 bg-white rounded-lg max-w-sm shadow-lg">
        <img class="h-20 mx-auto" src="../../assets/img/internet.png" alt="icon" />
        <div class="px-6 py-4 text-center">
          <div class="font-bold text-xl mb-2 color-text">Vivo Internet</div>
          <p class="text-gray-600 text-sm" style="min-height: 84px;">Com a Banda Larga da Vivo você tem internet de qualidade por toda a casa.</p>
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
