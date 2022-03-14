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
              height=170%
              src="https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_960_720.jpg"
              >
              </v-img> 
              <Login/>
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
  import Login from '../components/Login.vue'
  export default {
    name: 'PurchaseWindow',
    components:{
      Bar,
      Footer,
      Login
    }
  }
</script>