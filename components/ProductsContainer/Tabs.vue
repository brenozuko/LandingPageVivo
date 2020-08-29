<template>
  <div class="border-b-4 flex flex-wrap justify-start border-purple-800">
      <ul class="flex mb-0 pt-3 pb-4 flex-row">
        <li
          v-for="(item, index) in apiResult"
          :key="item.tab"
          class="-mb-10 text-center lg: mx-2"
        >
          <a
            class="font-bold cursor-pointer lg:px-2 lg:py-8 py-2 px-2 shadow-md rounded-lg block leading-normal lg:text-xl text-sm"
            @click="toggleTabs(index)"
            :class="{'text-white bg-purple-600': tabIndex === index, 'text-purple-600 bg-gray-200': tabIndex !== index}"
          >{{item.tab}}</a>
        </li>
      </ul>
      <div
        class="relative flex flex-col min-w-0 break-words bg-gray-400 w-full mb-6 shadow-lg rounded"
      ></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    toggleTabs(index) {
      this.$store.commit("infoStore/setTabIndex", index);
    },
  },
  computed: {
    ...mapState({
      apiResult: (state) => state.infoStore.apiResult,
      tabIndex: (state) => state.infoStore.tabIndex,
    }),
  },
};
</script>

<style lang="postcss" scoped>
.tab-border {
  border-bottom: 4px solid #660099;
}
</style>
