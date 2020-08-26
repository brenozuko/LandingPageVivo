<template>
  <div class = "flex relative leading-5">
    <img class = "h-8 mt-2 mr-2 inline-block align-bottom" src="../assets/img/icon-2.png" alt="Icone Vivo Cliente">
    <div class="flex-col mr-16 justify-left">
      <p class="text-gray-600">{{description}}</p>
      <h1>{{number}}</h1>
    </div>
  </div>
</template>


<script>
export default {
  props: ["description", "number"],
};
</script>


<style  lang="postcss">
  div {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }
  p {
    font-size: 13px;
  }

  h1 {
    font-size: 25px;
    color: #660099;
  }
</style>
