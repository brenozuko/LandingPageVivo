<template>
  <div>
    <button
      @click="changeToggle()"
      class="flex justify-center btn rounded-lg focus:outline-none focus:shadow-outline"
    >
      <img src="../../assets/img/plus-icon.svg" class="h-4 my-auto mr-2" alt="plus icon" />
      <span>informações</span>
    </button>
    <div :class="{'show': toggle === true, 'hide': toggle === false }" class="card py-4 mt-2 bg-white rounded-lg max-w-sm shadow-lg">
      <div  class="px-6 py-4 text-center relative z">
        <p
          class="text-gray-600 text-sm"
          style="min-height: 84px;"
        >Com o Vivo Controle você tem a maior cobertura 4.5G do Brasil, apps e ligações ilimitadas.</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    toggle() {
      return this.$store.state.toggleInformation.toggleInfo;
    },
  },

  methods: {
    changeToggle() {
      this.$store.commit("toggleInformation/toggleChange");
    },
  },
};
</script>


<style lang="postcss" scoped>

.btn {
  background-color: white;
  border-radius: 10px;
  width: 250px;
}

.card {
  display: flex;
  flex-direction: column;
  width: 250px;
}

.show {
  transform: translateY(0);
}

.hide{
  display:none;
}

</style>
