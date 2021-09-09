<template>
  <section class="added-product">
      <img :src="require(`@/assets/img/png/${basketProduct.img}`)" alt="">
      <div class="name-price">
          <p class="name">{{basketProduct.name}}</p>
          <p class="price">{{basketProduct.price * basketProductAmount}} руб.</p>
      </div>
      <div class="wrapper-amount">
        <button class="arrow-up" @click="increaseAmount">&#10095;</button>
        <div class="amount">{{basketProductAmount}} шт.</div>
        <button class="arrow-down" @click="decreaseAmount">&#10095;</button>
      </div>
      <button class="delete" @click="deleteProduct">X</button>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';

  export default {
    name: 'AddedProduct',
    data() {
        return {
            basketProductAmount: this.basketProduct.amount
        }
    },
    props: {
        basketProduct: Object,
    },
    methods: {
        ...mapMutations(['deleteProductBasket', 'changeTotalSum']),
        deleteProduct() {
            this.deleteProductBasket(this.basketProduct.id);
        },
        increaseAmount() {
            this.basketProductAmount++;
            this.changeTotalSum({
                id: this.basketProduct.id,
                amount: this.basketProductAmount,
            })
        },
        decreaseAmount() {
            this.basketProductAmount > 1 ? this.basketProductAmount-- : this.deleteProductBasket(this.basketProduct.id);
            this.changeTotalSum({
                id: this.basketProduct.id,
                amount: this.basketProductAmount,
            })
        }
    }
  }
</script>

<style scoped lang="scss">
@import "@/scss/main";

    .added-product {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(100% - 15px);
        height: 70px;
        border: 1px solid #fff;
        padding-right: 5px;
        border-width: 0 0 1px 0;

        img {
            width: 50px;
            height: 50px;
            margin: 10px 0;

            @media (max-width: 400px) {
                display: none;
            }
        }

        .name-price {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 75%;
            text-align: left;

            .name {
                width: 151px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            @include font($font-montserrat-regular, 18px, 20px);
        }

        .wrapper-amount {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 90%;
            width: 85px;

            .amount {
                width: 100%;

                @include font($font-montserrat-regular, 26px, 28px);
            }

            .arrow-up,
            .arrow-down {
                cursor: pointer;
                height: 25px;
                width: 12px;
                background-color: green;
                color: #fff;
                outline: none;
                border: none;
                opacity: 0.7;
                transition: opacity, 0.5s, liner;
            }

            .arrow-up:hover,
            .arrow-down:hover {
                opacity: 1;
            }

            .arrow-up {
                transform: rotate(-90deg);
            }

            .arrow-down {
                transform: rotate(90deg);
            }
        }

        .delete {
            width: 35px;
            height: 35px;
            border: none;
            outline: none;
            cursor: pointer;
            color: #fff;
            background-color: rgb(190, 34, 34);
            border-radius: 10px;
            opacity: 0.8;
            transition: opavity, 0.5s, liner;

            @include font($font-montserrat-bold, 16px, 18px);
        }

        .delete:hover {
            opacity: 1;
        } 
    }
</style>