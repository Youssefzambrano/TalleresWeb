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
            <div class="d-flex flex-wrap justify-lg-start mb-6">
              <div class="pa-4 " v-for="item, i in results" :key="i"> <Artistas :infocard=results[i] /></div>
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
  import Artistas from '../components/Artistas.vue'
  import Footer from '../components/Footer.vue'
  import {getAllartist} from '../services/artistServices'
  export default {
    name: 'Artists',
  
    data: () => ({
        results: null
      
        }),
    
      created(){
           getAllartist().then((response) => {
             this.results = response.data
           }).catch((err) => console.error(err));
        },
          components:{
          Artistas,
          Bar,
          Footer,
          Search
        },
  }
</script>