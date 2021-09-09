<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
  import Main from "./views/main/Main";
  import Header from "./views/header/Header";

  export default {
    name: 'App',
    components: {
      Main,
      Header,
    }
  }
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
