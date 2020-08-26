<template>
  <div class="bg-white flex pt-2 justify-between">
    <img src="../assets/img/logo-vivo.png" alt="logo vivo" />
    <div class="flex inline-block align-middle">
      <button
        class="bg-green-600 text-gray-100 my-2 px-2 rounded-lg mr-8"
      >Atendimento disponível</button>
      <Contact description="ligue grátis" number="0800 955 1000" />
      <Contact description="já é cliente?" number="103 15" />
    </div>
  </div>
</template>


<script>
import Contact from "./Contact";
export default {};
</script>

<style lang="postcss">
.header-items {
  @media (max-width: 800px;) {
    display: hidden;
  }
}
</style>


