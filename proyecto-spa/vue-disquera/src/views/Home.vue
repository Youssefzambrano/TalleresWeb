<template>
  <v-app id="inspire">
    <Bar/>
    <Carousel/>
    <v-main class="pt-0">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" lg="6" md="6" class="fill-height d-flex flex-column justify-center align-center">
            <v-card height="200" width="40%"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>
  
<script>
  import Bar from '../components/Bar.vue'
  import Carousel from '../components/Carousel.vue'

  import Footer from '../components/Footer.vue'
  export default {
    name: 'Home',
    components:{
      Carousel,
      Bar,
      Footer
    }
  }
</script>