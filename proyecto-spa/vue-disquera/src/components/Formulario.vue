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
        v-model="name"
        :counter="20"
        :rules="nameRules"
        label="Nombre"
        required
        ></v-text-field>

        <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        ></v-text-field>

        <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'El metodo de pago es requerido']"
        label="Metodo de pago"
        required
        ></v-select>

        <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'Necesitas aceptar los terminos para continuar']"
        label="Aceptar terminos"
        required
        ></v-checkbox>

        <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
        >
        Validate
        </v-btn>

        <v-btn
        color="error"
        class="mr-4"
        @click="reset"
        >
        Reset Form
        </v-btn>

        <v-btn
        color="warning"
        @click="resetValidation"
        >
        Reset Validation
        </v-btn>
    </v-form>
    </v-card>
 
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Nombre es requerido',
        v => (v && v.length <= 20) || 'Elnombre debe de tener menos de 20 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail invalido',
      ],
      select: null,
      items: [
        'Visa',
        'Master-card'
      ],
      checkbox: false,
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>