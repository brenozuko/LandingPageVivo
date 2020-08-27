<template>
  <div class="flex flex-wrap justify-center">
    <div>
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="font-bold cursor-pointer uppercase px-4 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(1)"
            v-bind:class="{'text-purple-600 bg-gray-200': openTab !== 1, 'text-white bg-purple-600': openTab === 1}"
          >Internet</a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="font-bold cursor-pointer uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(2)"
            v-bind:class="{'text-purple-600 bg-gray-200': openTab !== 2, 'text-white bg-purple-600': openTab === 2}"
          >Internet + Fixo</a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="font-bold cursor-pointer uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(3)"
            v-bind:class="{'text-purple-600 bg-gray-200': openTab !== 3, 'text-white bg-purple-600': openTab === 3}"
          >Internet + Tv</a>
        </li>

        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a
            class="font-bold uppercase cursor-pointer px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(4)"
            v-bind:class="{'text-purple-600 bg-gray-200': openTab !== 4, 'text-white bg-purple-600': openTab === 4}"
          >Internet + Fixo + TV</a>
        </li>
      </ul>
      <div
        class="relative flex flex-col min-w-0 break-words bg-gray-400 w-full mb-6 shadow-lg rounded"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pink-tabs",
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
