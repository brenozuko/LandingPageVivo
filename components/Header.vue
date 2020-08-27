<template>
  <div class="bg-white flex pt-2 justify-between pb-2">
    <img src="../assets/img/logo-vivo.png" alt="logo vivo" class="h-12" />
    <img @click="changeToggle()" src="../assets/img/hamburger-menu.png" alt="toggle menu" class="lg:hidden h-8 mr-4 mt-2">
    <div class="align-middle hidden lg:flex">
      <button
        class="bg-green-600 text-gray-100 my-2 px-2 rounded-lg mr-8 focus:outline-none focus:shadow-outline hover:bg-green-400"
      >Atendimento disponível</button>
      <Contact description="ligue grátis" number="0800 955 1000" />
      <Contact description="já é cliente?" number="103 15" />
    </div>
  </div>
</template>


<script>
import Contact from "./Contact";
export default {
  methods: {
    changeToggle() {
      this.$store.commit("toggleStore/toggleChange");
    },
  }
};
</script>



