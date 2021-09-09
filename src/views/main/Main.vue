<template>
  <main class="main">
    <div class="cards">
      <Cartproduct :product="product" v-for="product in listProducts" :key="product.id"/>
    </div>
  </main>
</template>

<script>
  import Cartproduct from "./components/Cartproduct";
  import listProducts from "@/data/listProducts";

  export default {
    name: 'Main',
    components: {
      Cartproduct,
    },
    data() {
      return {
        listProducts: listProducts.products,
      }
    },
  }
</script>

<style scoped lang="scss">
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 1182px;
    padding: 37px 49px 0 49px;

    @media (max-width: 1281px) {
      width: calc(100% - 100px);
      padding: 37px 50px 0 50px;
    }

    @media (max-width: 779px) {
      width: calc(100% - 3vw);
      padding: 37px 0 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

     .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;

      @media (max-width: 1279px) {
        justify-content: center;

        .card:nth-child(odd) {
          margin-right: 20px;
        }

        .card:nth-child(even) {
          margin-left: 20px;
        }
      }

      @media (max-width: 900px) {
        justify-content: center;

        .card:nth-child(odd) {
          margin-right: 10px;
          margin-left: 10px;
        }

        .card:nth-child(even) {
          margin-right: 10px;
          margin-left: 10px;
        }
      }
    }
  }
</style>