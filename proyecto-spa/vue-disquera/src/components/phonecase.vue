<template>
  <v-container>
    <v-row >
            
            <v-col
             class="d-flex flex-wrap justify-lg-start ma-5"
             v-for="(item, i) in infocard.Phonecase"
          :key="i"
            >
                <v-hover v-slot="{ hover }">
                    <v-card
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="300px"
                    min-witdh="300px"
                    >
                    
                    <v-img
                        
                        src="https://www.montblanc.com/variants/images/6630340695984532/A/w2500.jpg"
                        min-height="100%px"
                        min-witdh="100%px"
                    >
                        <v-expand-transition absolute>
                        <div
                            v-if="hover"
                            class="d-flex pa-2 transition-fast-in-fast-out black darken-2 v-card--reveal text-h7 white--text"
                            style="height: 100%;"
                        >
                            {{item.nombre}}       
                            <br>
                            <br>
                            {{item.tipo}}
                            <br>
                            <br>
                            Precio: $ {{item.precio}}
                            
                            
                        </div>
                            
                        
                        </v-expand-transition>
                            <v-btn
                                absolute
                                color="orange"
                                class="white--text"
                                right
                                bottom
                                min-width="30%"
                                max-width="30%"
                                to = '/PurchaseWindow'
                                >
                                Comprar
                            </v-btn>
                    </v-img>
                    
                        
                    
                    
                    </v-card>
                </v-hover>
            </v-col>
    </v-row>
  </v-container>
</template>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: left;
  opacity: .75;
  position: absolute;
  width: 100%;
}
.v-card--rev{
    opacity: 1;
}
</style>
<script>
  export default {
    data: () => ({
     

    }),
    props:[
      'infocard'
    ]
  }
</script>