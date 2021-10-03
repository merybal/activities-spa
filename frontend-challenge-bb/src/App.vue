<template>
  <all-activities-view></all-activities-view>
</template>

<script>
import AllActivitiesView from "./components/AllActivitiesView.vue";

export default {
  name: "App",
  components: {
    AllActivitiesView,
  },
  data() {
    return {
      // activities: [
      //   {
      //     id: "1",
      //     image:
      //       "https://resizer.glanacion.com/resizer/p1jBHnD2qmUIpyE3Rq23IkdHPiI=/879x586/smart/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/ACFHGXJJW5AS5PYMYMCPZK37Y4.jpg",
      //     name: "878",
      //     location: "Palermo, CABA",
      //     description:
      //       "Caipiroska a granel con vodka y picoteo de tu bar preferido, directo a la puerta de tu casa.",
      //     market_price: "7520",
      //     participants: 1,
      //   },
      //   {
      //     id: "2",
      //     image:
      //       "https://lh3.googleusercontent.com/proxy/-kA762iPFHi-6_692dZJfb2Dy0F9Zdq-DMlsyrfYA2uiVbbcNuL27Qh20OhtJh-5t8ImYaZXY5md2ssV-ko-dN1b24NvtING1Z4PMCSBcHUZIlpHLKHPj2sUIxIW--3BXv85",
      //     name: "Skydiving",
      //     location: "Lobos, Buenos Aires",
      //     description:
      //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      //     market_price: "5000",
      //     participants: 2,
      //   },
      //   {
      //     id: "3",
      //     image:
      //       "https://escuelaversailles.com/wp-content/uploads/vino-tinto.jpg",
      //     name: "Vico",
      //     location: "Palermo, CABA",
      //     description:
      //       "El entorno perfecto para dejarse seducit por los mejores vinos de Mendoza y una gastronomía acorde.",
      //     market_price: "4990",
      //     participants: 3,
      //   },
      //   {
      //     id: "4",
      //     image:
      //       "https://resizer.glanacion.com/resizer/p1jBHnD2qmUIpyE3Rq23IkdHPiI=/879x586/smart/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/ACFHGXJJW5AS5PYMYMCPZK37Y4.jpg",
      //     name: "878",
      //     location: "Palermo, CABA",
      //     description:
      //       "Caipiroska a granel con vodka y picoteo de tu bar preferido, directo a la puerta de tu casa.",
      //     market_price: "7520",
      //     participants: 5,
      //   },
      //   {
      //     id: "5",
      //     image:
      //       "https://lh3.googleusercontent.com/proxy/-kA762iPFHi-6_692dZJfb2Dy0F9Zdq-DMlsyrfYA2uiVbbcNuL27Qh20OhtJh-5t8ImYaZXY5md2ssV-ko-dN1b24NvtING1Z4PMCSBcHUZIlpHLKHPj2sUIxIW--3BXv85",
      //     name: "Skydiving",
      //     location: "Lobos, Buenos Aires",
      //     description:
      //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      //     market_price: "5000",
      //     participants: 1,
      //   },
      //   {
      //     id: "6",
      //     image:
      //       "https://escuelaversailles.com/wp-content/uploads/vino-tinto.jpg",
      //     name: "Vico",
      //     location: "Palermo, CABA",
      //     description:
      //       "El entorno perfecto para dejarse seducit por los mejores vinos de Mendoza y una gastronomía acorde.",
      //     market_price: "4990",
      //     participants: 1,
      //   },
      //   {
      //     id: "7",
      //     image:
      //       "https://resizer.glanacion.com/resizer/p1jBHnD2qmUIpyE3Rq23IkdHPiI=/879x586/smart/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/ACFHGXJJW5AS5PYMYMCPZK37Y4.jpg",
      //     name: "878",
      //     location: "Palermo, CABA",
      //     description:
      //       "Caipiroska a granel con vodka y picoteo de tu bar preferido, directo a la puerta de tu casa.",
      //     market_price: "7520",
      //     participants: 1,
      //   },
      //   {
      //     id: "8",
      //     image:
      //       "https://lh3.googleusercontent.com/proxy/-kA762iPFHi-6_692dZJfb2Dy0F9Zdq-DMlsyrfYA2uiVbbcNuL27Qh20OhtJh-5t8ImYaZXY5md2ssV-ko-dN1b24NvtING1Z4PMCSBcHUZIlpHLKHPj2sUIxIW--3BXv85",
      //     name: "Skydiving",
      //     location: "Lobos, Buenos Aires",
      //     description:
      //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      //     market_price: "5000",
      //     participants: 5,
      //   },
      //   {
      //     id: "9",
      //     image:
      //       "https://escuelaversailles.com/wp-content/uploads/vino-tinto.jpg",
      //     name: "Vico",
      //     location: "Palermo, CABA",
      //     description:
      //       "El entorno perfecto para dejarse seducit por los mejores vinos de Mendoza y una gastronomía acorde.",
      //     market_price: "4990",
      //     participants: 2,
      //   },
      // ],
    };
  },
  provide() {
    return {
      activities: this.activities,
    };
  },
};
</script>

<style>
@import './styles/main.scss';
</style>
