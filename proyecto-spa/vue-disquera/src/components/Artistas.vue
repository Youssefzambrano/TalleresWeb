<template>
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
                  v-text="infocard.nombre"
                ></v-card-title>

                <v-card-subtitle v-text="infocard.descripcion"></v-card-subtitle>
                 
                <v-card-actions>
                  <v-btn
                         class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                        :href="infocard.socialmedia"
                        >
                        <v-icon small>mdi-home</v-icon>
                        </v-btn>
                </v-card-actions>      
              </div >

              
                <img class="ma-3" :src="infocard.Img" height="45%" width="45%"/>
              
            </div>
          </v-card>
</template>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: left;
  opacity: .5;
  position: absolute;
  width: 100%;
}

</style>
<script>

  export default {
    data: () => ({
     
    }),
    props:[
          'infocard',
        ],
    
  }
</script>