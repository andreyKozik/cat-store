<template>
  <section class="basket">
    <div v-if="addedProducts.length" class="basket-products">
      <AddedProduct :basketProduct="product" v-for="product in addedProducts" :key="product.id"/>
    </div>
    <div v-else-if="!addedProducts.length" class="basket-empty">Добавьте товар</div>
    <div class="sum">
      <img :src="require('@/assets/img/svg/sum.svg')" alt="">
      <p>{{totalSum }}</p>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import AddedProduct from './AddedProduct';

  export default {
    name: 'Basket',
    components: {
      AddedProduct,
    },
    methods: {
      openBasket() {
        this.basketOn = !this.basketOn;
      }
    },
    computed: {
      ...mapState({
        addedProducts: state => state.basket.addedProducts,
      }),
      ...mapGetters(['totalSum'])
    }
  }
</script>

<style scoped lang="scss">
@import "@/scss/main";

    .basket {
        position: absolute;
        right: 0;
        top: 100%;
        height: 250px;
        width: 400px;
        background-color: #383b4e;
        z-index: 100;

        @media (max-width: 400px) {
          width: 100%;
        }

        .basket-products {
          display: flex;
          flex-direction: column;
          width: calc(100% - 20px);
          height: 215px;
          padding: 0 0 0 8px;
          overflow-y: auto;
          color: #fff;
        }

        .basket-products::-webkit-scrollbar {
          width: 5px;
          background-color: #e1e1e3;
          border-radius: 4px;
          padding-right: 10px;
        }

        .basket-products::-webkit-scrollbar-thumb {
          width: 5px;
          background-color: #7e7f80;
          border-radius: 4px;
        }
        
        .basket-empty {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 215px;
          color:#1a1f3a4f;

          @include font($font-montserrat-bold, 36px,38px);
        }

        .sum {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 35px;

          img {
            height: 20px;
            margin-right: 5px;
          }

          p {
            color: #fff;
            margin-right: 65px;

            @include font($font-montserrat-regular, 18px, 22px);
          }
        }
    }
</style>