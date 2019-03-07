<template>
  <div>
    <tb-navbar></tb-navbar>

    <div id="main" role="main">

      <router-view></router-view>

      <tb-sidebar></tb-sidebar>

    </div>

    <tb-footer></tb-footer>

  </div>
</template>

<script>

  import Navbar from './templates/navbar.vue';
  import Sidebar from './templates/sidebar.vue';
  import Footer from './templates/footer.vue';

  export default {
    components: {
      tbNavbar: Navbar,
      tbSidebar: Sidebar,
      tbFooter: Footer
    }
  }

</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/bootstrap.scss';
  @import './scss/main.scss';

</style>
