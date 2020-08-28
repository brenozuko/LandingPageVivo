<template>
    <ul
      :class="{'isOpen': toggle === true, 'isClosed': toggle === false }"
      class="lg:flex top-0 left-0 fixed lg:static lg:h-auto lg:w-full z-10 h-full w-screen background-menu leading-normal"
    >
      <li class ="mt-4">
        <a @click="changeToggle()" class="lg:hidden cursor-pointer">Fechar X</a>
      </li>
      <li class="-mb-px mr-1 border-b-2 lg:border-0 text-center">
        <a
          class="inline-block py-2 px-4 lg:border-0 lg:text-purple-700 text-gray-600 bg-white font-bold"
          href="#"
        >Home</a>
      </li>
      <li class="mr-1 border-b-2 lg:border-0 text-center ">
        <a class="inline-block py-2 px-4 lg:text-gray-100 text-gray-600 font-bold" href="#">Fibra</a>
      </li>
      <li class="mr-1 border-b-2 lg:border-0 text-center">
        <a class="inline-block py-2 px-4 lg:text-gray-100 text-gray-600 font-bold" href="#">Internet</a>
      </li>
      <li class="mr-1 border-b-2 lg:border-0 text-center">
        <a class="inline-block py-2 px-4 lg:text-gray-100 text-gray-600 font-bold" href="#">TV</a>
      </li>
    </ul>
</template>

<script>
export default {
  computed: {
    toggle() {
      return this.$store.state.toggleStore.toggle;
    },
  },

  methods: {
    changeToggle() {
      this.$store.commit("toggleStore/toggleChange");
    },
  },
};
</script>


<style lang="postcss">
.background-menu {
  background-color: #660099;

  @media (max-width: 1024px) {
    background-color: #fff;
  }
}

.li {
  font-family: "Roboto", sans-serif;
}

.isClosed {
  transition: transform 150ms linear;
  transform: translateX(100%);

   @media(min-width: 1024px){
     transition: transform 0ms linear;
     transform: translateX(0);
   }
}

.isOpen {
  transition: transform 150ms linear;
  transform: tanslateX(0);
}
</style>


