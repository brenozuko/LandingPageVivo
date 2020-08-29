<template>
  <div class="mb-12 text-center">
    <h1 class="color text-3xl pt-8 text-center">Vivo Fixo, Vivo Tv e Vivo Combo</h1>

    <Tabs />
    <CarouselProducts />
  </div>
</template>


<script>
import Tabs from "./Tabs";
import CarouselProducts from "./CarouselProducts";
export default {
  components: {
    Tabs,
    CarouselProducts,
  },
  methods: {
    async getList() {
      console.log("teste");
      const data = await this.$axios.$get(
        " https://m2digital.club/api/plans?uf=SP"
      );
      this.$store.commit("infoStore/setResult", this.formatApiResult(data));
    },
    formatApiResult(apiResult) {
      const tabs = [
        ...new Set(
          apiResult.plans.combo.map((value) => {
            return value.combo_types;
          })
        ),
      ];
      const retArray = tabs.map((value) => {
        return {
          tab: value,
          items: apiResult.plans.combo.filter((plans) => {
            return plans.combo_types === value;
          }),
        };
      });
      return retArray;
    },
  },

  mounted() {
    this.getList();
  },
};
</script>


<style lang="postcss" scoped>
.color {
  color: #660099;
}
</style>
