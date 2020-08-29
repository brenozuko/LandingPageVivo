<template>
  <div>
    <div
      v-for="(item, index) in apiResult"
      :key="item.tab"
      class="border-t mx-auto border-b border-gray-400 justify-center p-12 rounded-lg"
      :class="{'block': tabIndex === index, 'hidden': tabIndex !== index}"
      style="max-width: 1400px;"
    >
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="card in item.items" :key="card.id">
          <div class="card mr-4 py-4 rounded-lg max-w-sm shadow-lg">
            <img class="h-6 mx-auto" src="../../assets/img/wifi-icon.svg" alt="icon" />
            <div class="px-6 py-4 text-center">
              <div
                class="font-bold text-4xl text-white color-text"
              >{{card.download_speed + " "+ card.download_speed_unit}}</div>
              <p class="text-white text-sm">{{card.short_description}}</p>
              <div class="flex justify-center">
                <h1 class="text-white text-4xl">R${{parseInt(card.price)}}</h1>
                <div>
                  <h2
                    class="text-white text-xl mt-2"
                  >,{{parseInt((card.price*100 - Math.floor(card.price)*100))}}</h2>
                  <h2 class="text-white text-xs -mt-2 -mr-4">/mês</h2>
                </div>
              </div>
              <ButtonProduct class="mx-auto" />
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
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
    ...mapState({
      apiResult: (state) => state.infoStore.apiResult,
      tabIndex: (state) => state.infoStore.tabIndex,
    }),

    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },

  methods: {},
};
</script>

<style lang="postcss" scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 2px solid #c9c9c9;
  flex: 0 0 250px;
  background-color: #660099;
}

.swiper-slide {
    @apply flex justify-center py-3;
  }

</style>
