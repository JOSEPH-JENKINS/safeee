<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,html{
  min-height: 100vh;
  width: 100%;
  background-color: #121212;
  color: #fafafa;
  font-size: 16px/1.6rem;
}

::selection{
  background-color: #ff4500;
  color: #000;
}

.container{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

#app {
  font-family: 'Arimo', sans-serif;
  min-height: 100vh;
}
h1,p,a{
  font-size: 100%;
}
h1{
  text-transform: uppercase;
}
a{
  color: inherit;
  text-decoration: none;
}
img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
h1.massive{
  font-family: 'Dela Gothic One', sans-serif;
}
</style>
