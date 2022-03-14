<template>

    <v-card
        max-width="1000px"

    >
        <v-form 
        @click="registro()"
    >
    <v-row align="right"></v-row>

        <v-text-field
        v-model="atributos.nombre"
      
        label="Nombre"
        required
        ></v-text-field>

        <v-text-field
        v-model="atributos.correo"
    
        label="E-mail"
        required
        ></v-text-field>

        <v-text-field
        v-model="atributos.password"
     
        label="Contraseña"
        :type="showPassword ? 'text' : 'password'"
        ></v-text-field>
        
        <v-btn
        type="submit"
        color="warning"
        >
        Registrarme
        </v-btn>
    </v-form>
    </v-card>
 
</template>

 

<script>
  import {registrar} from '../services/artistServices'
  export default {
      name: 'Ingresar',
      data: () => ({
     
      Atributos:[],
      atributos:{
        nombre: "",
        correo: "",
        password:"",
      },
    }),
    methods: {
      registro(){
        registrar(this.atributos).then((response) => {
             this.Atributos.push(response.data)
           }).catch((err) => console.error(err));
      },
    },
  }
</script>