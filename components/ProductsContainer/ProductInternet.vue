<template>
  <div class="flex justify-center">
    <div class="border-4 p-12 rounded-lg border-gray-400 inline-block">
      <div class="card py-4 rounded-lg max-w-sm shadow-lg">
        <img class="h-6 mx-auto" src="../../assets/img/wifi-icon.svg" alt="icon" />
        <div class="px-6 py-4 text-center">
          <div class="font-bold text-4xl text-white color-text">300 MEGA</div>
          <p class="text-white text-sm">com Wi-Fi e Modem grátis</p>
          <div class="flex justify-center">
            <h1 class="text-white text-4xl">R$139</h1>
            <div>
              <h2 class="text-white text-xl mt-2">,99</h2>
              <h2 class="text-white text-xs -mt-2 -mr-4">/mês</h2>
            </div>
          </div>
          <ButtonProduct class="mx-auto" />
        </div>
      </div>
      <ButtonToggle class="mx-auto" />
    </div>
  </div>
</template>


<script>
import axios from "axios";
import ButtonProduct from "./ButtonProduct";
import ButtonToggle from "./ButtonToggle";
export default {
  data() {
    return {
      arrayDados: [],
    };
  },

  methods: {
    async getList({ $axios }) {
      const dados = await this.$axios.get("https://m2digital.club/api/plans");
      console.log(dados);
    },
  },
};
</script>

<style lang="postcss" scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 2px solid #c9c9c9;
  width: 250px;
  background-color: #660099;
}
</style>
