<template>
  <v-app id="inspire">
    <Bar/>
    <v-main class="pt-0">
       <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" lg="6" md="6" class="fill-height d-flex flex-column justify-center align-center">
            <v-card height="200" width="80%">
              <v-img
              class="d-flex justify-end mb-6"
              width=100%
              src="https://img.freepik.com/psd-gratis/maqueta-camiseta-negra_125540-430.jpg"
              >
              </v-img> 
              <Formulario/>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer/>
   
  </v-app>
</template>

<script>
  import Bar from '../components/Bar.vue'
  import Footer from '../components/Footer.vue'
  import Formulario from '../components/Formulario.vue'
  export default {
    name: 'PurchaseWindow',
    components:{
      Bar,
      Footer,
      Formulario
    }
  }
</script>