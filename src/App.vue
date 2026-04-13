<template>
  <Headercomponent/>

 <main>
    <RouterView />
  </main>
  <Footercomponent/>
</template>

<script setup>

import Headercomponent from './components/Header-component.vue';
import FooterComponent from './components/Footer-component.vue';

</script>