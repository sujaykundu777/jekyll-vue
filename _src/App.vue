<template>
    <div id="app">
        <div class="nav">
          <router-link to="/">Home</router-link>|
          <router-link to="/about">About</router-link>
        </div>
        <router-view />
      </div>
    
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'AppView',

  setup() {
  },
});
</script>