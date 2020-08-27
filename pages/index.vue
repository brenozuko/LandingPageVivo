<template>
  <div>
    <Menu />
    <Header />
    <Banner />
    <Consulta/>
    <Products/>
    <BannerBottom/>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Banner from "~/components/Banner";
import Menu from "~/components/Menu";
import Consulta from "~/components/Consulta";
import Products from "~/components/Products";
import BannerBottom from "~/components/BannerBottom"
import Footer from "~/components/Footer";
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
