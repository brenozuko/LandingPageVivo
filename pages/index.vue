<template>
  <div>
    <Menu />
    <Header />
    <Banner />
    <Consulta/>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Banner from "~/components/Banner";
import Menu from "~/components/Menu";
import Consulta from "~/components/Consulta"
export default {
  head: {
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
      },
    ],
  },
};
</script>

<style>
</style>
