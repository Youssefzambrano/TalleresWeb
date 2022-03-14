<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="red">
        <strong class="subheading">Contacto:</strong>
        <strong class="subheading"> contacto@pinksauce.com</strong>
        <v-spacer></v-spacer>
        {{ new Date().getFullYear() }} — <strong>©Pink Sauce All Rights Reserved</strong>
        <v-spacer></v-spacer>
      
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>