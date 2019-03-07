<template>
  <header id="header">
    <nav class="navbar navbar-light navbar-expand-xl bg-light" id="main-menu">
      <div class="container">
        <span class="navbar-brand">
          <img id="logo" src="img/Tom.jpg" alt="Picture of Tom Brown" width="30" height="30">
        </span>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item"><router-link class="nav-link" active-class="active" to="/" exact>Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link" active-class="active" to="/about">About Me</router-link></li>
            <li class="nav-item"><router-link class="nav-link" active-class="active" to="/portfolio">Portfolio</router-link></li>
            <li class="nav-item"><router-link class="nav-link" active-class="active" to="/contact">Get in Touch</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  
</script>

<style lang="scss">
</style>
