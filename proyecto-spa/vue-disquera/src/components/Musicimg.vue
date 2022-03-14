<template>

<v-container >
  
 <v-row 
        >
   <v-col
   class="d-flex flex-wrap justify-lg-start ma-5"
   v-for="(item, i) in infocard.musica.single"
          :key="i"

   >
   
    <v-card
          width="100%"
            color="#952175"
            dark
            min-width="250px"
            max-width="400px"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.nombre"
                ></v-card-title>

                <v-card-subtitle v-text="item.releasedate"></v-card-subtitle>
                <v-card-subtitle v-text="item.album"></v-card-subtitle>  
                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-card-actions>
              </div >

              
                <img class="ma-3" :src="infocard.Img" height="45%" width="45%"/>
              
            </div>
          </v-card>
         
          </v-col>
 </v-row>
</v-container> 
</template>

<script>
  export default {
    data: () => ({

    }),
    props: [
      'infocard',
    ]
  }
</script>