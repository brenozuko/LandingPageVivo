<template>
  <div>
    <div
      v-for="(item, index) in apiResult"
      :key="item.tab"
      :class="{'flex': tabIndex === index, 'hidden': tabIndex !== index}"
      class="border-top-4 border-bottom-4 border-gray-400 justify-center p-12 rounded-lg"
    >
      <div
        v-for="card in item.items"
        :key="card.id"
        class="card mr-4 py-4 rounded-lg max-w-sm shadow-lg"
      >
        <img class="h-6 mx-auto" src="../../assets/img/wifi-icon.svg" alt="icon" />
        <div class="px-6 py-4 text-center">
          <div
            class="font-bold text-4xl text-white color-text"
          >{{card.download_speed + " "+ card.download_speed_unit}}</div>
          <p class="text-white text-sm">Com Wi-Fi grátis</p>
          <div class="flex justify-center">
            <h1 class="text-white text-4xl">R${{parseInt(card.price)}}</h1>
            <div>
              <h2 class="text-white text-xl mt-2">,{{parseInt((card.price*100 - Math.floor(card.price)*100))}}</h2>
              <h2 class="text-white text-xs -mt-2 -mr-4">/mês</h2>
            </div>
          </div>
          <ButtonProduct class="mx-auto" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      apiResult: (state) => state.infoStore.apiResult,
      tabIndex: (state) => state.infoStore.tabIndex,
    }),
  },

  methods: {

  }
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
