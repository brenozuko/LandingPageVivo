<template>
  <div class="background-services relative flex-col justify-center pb-16">
    <div class="text-center">
      <h1 class="color pt-8 text-center">Escolha o serviço que você deseja</h1>
    </div>
    <div class="flex justify-center" style="max-width: 1364px;">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <ServiceFibra class="ml-8" />
        </swiper-slide>
        <swiper-slide>
          <ServiceInternet class="ml-8" />
        </swiper-slide>
        <swiper-slide>
          <ServiceTv class="ml-8" />
        </swiper-slide>
        <swiper-slide>
          <ServiceFixo class="ml-8" />
        </swiper-slide>
        <swiper-slide>
          <ServiceControle class="ml-8" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>


<script>
import ServiceFibra from "./ServiceFibra";
import ServiceInternet from "./ServiceInternet";
import ServiceControle from "./ServiceControle";
import ServiceTv from "./ServiceTv";
import ServiceFixo from "./ServiceFixo";
export default {
  components: {
    ServiceFibra,
    ServiceInternet,
    ServiceControle,
    ServiceTv,
    ServiceFixo,
  },

  data() {
    return {
      swiperOptions: {
        slidesPerView: 5,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
        },

        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style lang="postcss" scoped>
.background-services {
  background-color: #eaeaea;
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
