<template>
    <h1> Home - View</h1>
    <h2> {{sectionTitle}}</h2>
    <p> {{ sectionDescription }}</p>
    <button @click="count++">
        Count is: {{ count }}
    </button>
  </template>
  
  <script>
  import { ref } from 'vue';

  export default {
    name: 'HomePage',
    components: {
    },
  
    setup() {
      const count = ref(0);
   
      return {
        sectionTitle: ref('Sujay Kundu'),
        // eslint-disable-next-line vue/max-len
        sectionDescription: ref('Software Engineer / Reader / Explorer'),
        count,
      };
    },
  };
  </script>
  