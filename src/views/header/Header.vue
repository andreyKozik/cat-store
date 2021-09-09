<template>
  <header class="header">
      <h1 class="logo">Logo</h1>
      <div class="wrapper-basket-img">
          <img class="basket-img" :src="require('@/assets/img/svg/basket.svg')" alt="basket"  @click="openBasket">
          <span class="amount-products">{{counter}}</span>
      </div>
      <Basket class="basket" :class="{'basket-on': basketOn}"/>
  </header>
</template>

<script>
import Basket from "./compontnts/Basket";
import { mapState } from 'vuex';

  export default {
    name: 'Header',
    components: {
      Basket,
    },
    data() {
        return {
            basketOn: false,
        }
    },
    methods: {
        openBasket() {
            this.basketOn = !this.basketOn;
        }
    },
    computed: {
      ...mapState({
        counter: state => state.basket.counter,
      }),
    },
    mounted() {
      const listProductBasket = localStorage.getItem('listProductBasket');
      const counter = localStorage.getItem('counter');
      const addBasket = localStorage.getItem('addBasket');

      if(listProductBasket) {
        this.$store.commit('loadingProduct', {
          listProductBasket,
          counter,
          addBasket
        });
      }
    }
  }
</script>

<style scoped lang="scss">
 @import "@/scss/main";

    .header {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1200px;
        height: 80px;
        background-color: rgb(24, 27, 46);
        padding: 0 40px;
        z-index: 101;
        opacity: 1;

        @media (max-width: 1199px) {
            width: calc(100% - 80px);
        }

        .logo {
            color: #fff;

            @include font($font-montserrat-bold, 30px, 32px);
        }

        .wrapper-basket-img {
            position: relative;
            opacity: 0.9;

            .basket-img {
                width: 35px;
                height: 30px;
                background-color: none;
                cursor: pointer;
                margin-top: 10px;
            }

            .amount-products {
                position: absolute;
                top: -4px;
                left:50%;
                transform: translate(-50%, 0);
                color: rgb(245, 26, 26);

                @include font($font-montserrat-regular, 14px, 18px);
            }
        }

        .wrapper-basket:hover {
            opacity: 1;
        }

        .basket {
            opacity: 0;
            transition: opacity, 0.6s, liner;
        }

        .basket-on {
            opacity: 1;
        }
    }
</style>