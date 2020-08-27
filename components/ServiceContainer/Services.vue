<template>
  <div>
    <div class="flex py-16 align-middle justify-center border-container">
      <div
        v-for="item in arrayDados"
        :key="item.title"
        class="card py-4 m-4 bg-white rounded-lg max-w-sm shadow-lg"
      >
        <img class="h-20 mx-auto" src="require(item.img)" alt="icon" />
        <div class="px-6 py-4 text-center">
          <div class="font-bold text-xl mb-2 color-text">{{item.title}}</div>
          <p class="text-gray-600 text-sm">{{item.description}}</p>
          <Button />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Button from "./Button";
export default {
  data() {
    return {
      arrayDados: [
        {
          img: "~/assets/img/fibra.png",
          title: "Vivo Fibra",
          description:
            "Com a Vivo Fibra você e toda sua família podem navegar na internet com ultravelocidade.",
        },
        {
          img: "../../assets/img/internet.png",
          title: "Vivo Internet",
          description:
            "Com a Banda Larga da Vivo você tem internet de qualidade por toda a casa.",
        },
        {
          img: "../../assets/img/tv-icon.png",
          title: "Vivo TV",
          description:
            "A Vivo TV tem as melhores programações, tudo com exclusividade para você.",
        },
        {
          img: "../../assets/img/fixo.png",
          title: "Vivo Fixo",
          description:
            "Com o Vivo Fixo você pode fazer ligações ilimitadas locais ou nacionais e falar à vontade.",
        },
        {
          img: "~/assets/img/controle.png",
          title: "Vivo Controle",
          description:
            "Com o Vivo Controle você tem a maior cobertura 4.5G do Brasil, apps e ligações ilimitadas.",
        },
      ],
    };
  },

};
</script>


<style lang="postcss" scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 2px solid #c9c9c9;
  width: 250px;
}

.color-text {
  color: #660099;
}

.border-container {
  border: 3px solid #c9c9c9;
  border-radius: 10px;
}
</style>
