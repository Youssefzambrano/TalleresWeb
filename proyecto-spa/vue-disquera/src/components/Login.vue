<template>

    <v-card
        max-width="650px"

    >
        <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
    <v-row align="right"></v-row>

        <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        ></v-text-field>

        <v-text-field
        v-model="Password"
        :rules="passRules"
        label="Contraseña"
        :type="showPassword ? 'text' : 'password'"
        ></v-text-field>

        <v-btn
        to="/"
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
        >
        Ingresar
        </v-btn>
        
        <v-btn
        to="/Registro"
        color="warning"
        @click="resetValidation"
        >
        Registrarme
        </v-btn>
    </v-form>
    </v-card>
 
</template>

 

<script>
  export default {
      name: 'Ingresar',
      data: () => ({
      valid: true,
      name: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail invalido',
      ],
      passRules: [
        v => !!v || 'Contraseña requerida'
      ],
      select: null,
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>