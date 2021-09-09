<template>
  <section class="card">
        <div class="card-top">
            <img class="card-img" :src="require(`@/assets/img/png/${product.img}`)" alt=""/>
            <div class="add-basket" :class="{'add-basket-true': addBasket.includes(product.id)}">
              Добавлено в корзину
            </div>
        </div>
        <div class="info">
            <span class="info-name">{{product.name}}</span>
            <div class="amount">
                <button class="minus" @click="decreaseAmount">-</button>
                <span class="amount__value">{{amount}}</span>
                <button class="plus" @click="increaseAmount">+</button>
            </div>
            <div class="info-price"> 
              <span class="info-price__value">{{product.price * amount}}</span> руб.
            </div>
        </div>
        <button class="button-buy" @click="buy">Купить</button>
    </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'Cartproduct',
    data() {
      return {
        amount: 1,
      }
    },
    props: {
      product: Object,
    },
    methods: {
      ...mapMutations(['addProduct']),
      buy() {
        this.product.amount = this.amount;
        this.addProduct(this.product);
      },
      increaseAmount() {
        this.amount++;
      },
      decreaseAmount() {
        this.amount > 1 ? this.amount-- : this.amount;
      }
    },
    computed: {
      ...mapState({
        addBasket: state =>state.basket.addBasket
      }),
    }
  }
</script>

<style scoped lang="scss">
 @import "@/scss/main";

  .card {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 380px;
      height: 521px;
      margin: 0 0 27px 0;

      @media (max-width: 779px) {
        height: 471px;
        width: 310px;
      }

      .card-top {
        position: relative;
        width: 100%;
        height: 264px;
        background-color: rgba(3, 62, 99, 0.616);

        @media (max-width: 779px) {
          height: 215px;
        }

        .card-img {
          width: 100%;
        }
      }

      .add-basket {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #cacacade;
        color: rgb(44, 42, 42);
        width: 100%;
        height: 30px;
        bottom: -30px;
        text-align: center;
        transition: bottom, 0.6s, liner;

        @include font($font-montserrat-bold, 18px, 22px);
      }

      .add-basket-true {
        bottom: 0px;
      }

      .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: calc(100% - 58px);
        height: 134px;
        background-color: #f3f3f3;
        padding: 29px;
        z-index: 2;

        @media (max-width: 779px) {
          width: calc(100% - 30px);
          padding: 15px;
        }

        .info-name {

          @include font($font-montserrat-bold, 24px, 29px);
        }

        .amount {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40px;
          margin-top: 22px;

          @include font($font-montserrat-bold, 24px, 29px);

         .minus,
         .plus {
            width: 40px;
            height: 40px;
            border: none;
            outline: none;
            cursor: pointer;
            background-color: #6ebbd3;
            color: #fff;
            border-radius: 5px;
            opacity: 0.7;
            transition: opacity, 0.6s, liner;

            @include font($font-montserrat-regular, 24px, 29px);
         }

         .minus:hover,
         .plus:hover {
            opacity: 1;
        }

         .amount__value {
            margin: 0 30px;
            width: 25px;
         }
        }

        .info-price {
          margin-top: 23px;
          padding-left: 15px;
          border-left: 4px solid rgba(61, 167, 144, 0.849);

          @include font($font-montserrat-bold, 24px, 29px);
        }
      }

      .button-buy {
        width: 100%;
        height: 65px;
        color: #fff;
        background-color: #6ebbd3;
        border-radius: 0 0 10px 10px;
        border: none;
        outline: none;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity, 0.6s, liner;

        @include font($font-montserrat-bold, 16px, 20px);
      }

      .button-buy:hover {
        opacity: 1;
      }
    }
</style>