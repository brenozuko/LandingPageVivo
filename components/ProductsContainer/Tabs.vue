<template>
  <div class="flex flex-wrap ml-8 justify-start">
    <div>
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li
          v-for="(item, index) in apiResult"
          :key="item.tab"
          class="-mb-px mr-2 last:mr-0 flex-auto text-center"
        >
          <a
            class="font-bold  cursor-pointer uppercase px-4 py-3 shadow-lg rounded block leading-normal"
            @click="toggleTabs(index)"
            :class="{'text-white bg-purple-600': tabIndex === index, 'text-purple-600 bg-gray-200': tabIndex !== index}"
          >{{item.tab}}</a>
        </li>
      </ul>
      <div
        class="relative flex flex-col min-w-0 break-words bg-gray-400 w-full mb-6 shadow-lg rounded"
      ></div>
    </div>
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
