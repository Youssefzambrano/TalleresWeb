<template>
  <v-app id="inspire">
    <Bar/>
    
    <Search/>
    
    <v-main class="grey lighten-2">
      <v-container>
        
        <v-row>
                      
          <v-col >
            <v-sheet
              min-height="20vh"
              rounded="1g"
              elevation="3"
               
            >
            <v-banner>camisetas</v-banner>
            <div class="d-flex flex-wrap justify-lg-start mb-6">
              <div class="pa-4 " v-for="item, i in results" :key="i"> <Products :infocard=results[i] /></div>
              </div>  
            
            
            </v-sheet>
            <v-sheet
              min-height="20vh"
              rounded="1g"
              elevation="3"
               
            >
            <v-banner>Llaveros</v-banner>
            <div class="d-flex flex-wrap justify-lg-start mb-6">
              <div class="pa-4 " v-for="item, i in results" :key="i"> <Llaveros :infocard=results[i] /></div>
              </div>  
            
            
            </v-sheet>
             <v-sheet
              min-height="20vh"
              rounded="1g"
              elevation="3"
               
            >
            <v-banner>Phonecase</v-banner>
            <div class="d-flex flex-wrap justify-lg-start mb-6">
              <div class="pa-4 " v-for="item, i in results" :key="i"> <Phonecase :infocard=results[i] /></div>
              </div>  
            
            
            </v-sheet>
          </v-col>
        </v-row>
        
      </v-container>
     </v-main>
    <Footer/>
  </v-app>
</template>

<script>
  import Search from '../components/Search.vue'
  import Bar from '../components/Bar.vue'
  import Products from '../components/Products.vue'
  import Llaveros from '../components/llaveros.vue'
  import Phonecase from '../components/phonecase.vue'
  import Footer from '../components/Footer.vue'
  import {getAllmerch} from '../services/artistServices'
  export default {
    name: 'Merch',
    data: () => ({
        results: null
      
        }),
    
    created(){
           getAllmerch().then((response) => {
             this.results = response.data
           }).catch((err) => console.error(err));
        },
    components:{
      Products,
      Bar,
      Footer,
      Search,
      Llaveros,
      Phonecase
    }
  }
</script>