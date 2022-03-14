<template>
  <div>
    <v-app-bar
      app
      color="deep-purple accent-4"
      dense
      dark
      max-height="70px"
      min-height="60px"
      shrink-on-scroll
    >
        <v-btn-toggle
            v-model="text"
            tile
            color="deep-purple accent-3"
            group
            class="mt-1"
        >
            <v-btn to="/music" value="left">
            Música
            </v-btn>

            <v-btn to="/artists" value="center">
            Artistas
            </v-btn>

            <v-btn to="/Merch" value="right">
            Merch
            </v-btn>
            
        </v-btn-toggle>
      <v-spacer></v-spacer>
      <v-btn  to="/" class="mt-4 mr-2" tile text>
        <v-img  src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" max-width="35px" max-height="35px"/>
        <p class="mt-2">
        PinkSouce
        </p>
      </v-btn>
      

      <v-spacer></v-spacer>
      <v-btn to="/Ingresar" class="mt-4 mr-2" text tile>
        ingresar
      </v-btn>
      <v-menu
        left
        bottom
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
           class="mt-2 mr-2" 
           elevation="2"
            icon
            v-bind="attrs"
            v-on="on"
          >
            
          </v-btn>
        </template>

        
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Datos' },
        { title: 'Compras' },
        { title: 'salir' },
      ],
    }),
  }
</script>