<template>
  <div class="mb-12">
    <Tabs />
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <CarouselProducts />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
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

};
</script>
