<template>
  <div>
    <Header />
    <Banner />
    <Consulta />
    <ProductContainer />
    <BannerBottom />
    <ServiceContainer />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header/Header";
import Banner from "~/components/Banner";
import Consulta from "~/components/Consulta";
import ProductContainer from "~/components/ProductsContainer/ProductContainer";
import BannerBottom from "~/components/BannerBottom";
import ServiceContainer from "~/components/ServiceContainer/ServiceContainer";
import Footer from "~/components/Footer";
export default {
  components: {
    Header,
    Banner,
    Consulta,
    ProductContainer,
    BannerBottom,
    ServiceContainer,
    Footer
  },
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
