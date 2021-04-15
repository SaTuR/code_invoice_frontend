<template>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.customers')" />
      <div class="separator mb-5"></div>
    </b-colxx>
    <b-colxx xxs="12">
      <b-form
        @submit.prevent="onValitadeFormSubmit"
        class="av-tooltip tooltip-label-right"
      >
        <b-card class="mb-4" :title="$t('customers.generals')">
          <b-form-group :label="$t('customers.name')">
            <b-form-input
              type="text"
              v-model.trim="$v.customer.nombre.$model"
              :state="!$v.customer.nombre.$error"
            />
            <b-form-invalid-feedback>Is required!</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group :label="$t('customers.identification_type')">
            <b-form-select
              v-model="$v.customer.tipo_identificacion.$model"
              :options="options"
              :state="!$v.customer.tipo_identificacion.$error"
              plain
            />
          </b-form-group>
          <b-form-group :label="$t('customers.identification')">
            <b-form-input
              type="text"
              v-model.trim="$v.customer.identificacion.$model"
              :state="!$v.customer.identificacion.$error"
            />
            <b-form-invalid-feedback>Is required!</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group :label="$t('customers.address')">
            <b-form-textarea
              rows="3"
              max-rows="6"
              v-model.trim="$v.customer.direccion.$model"
              :state="!$v.customer.direccion.$error"
            />
            <b-form-invalid-feedback>Is required!</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group :label="$t('customers.phone')">
            <b-form-input
              type="text"
              v-model.trim="$v.customer.telefono.$model"
              :state="!$v.customer.telefono.$error"
            />
            <b-form-invalid-feedback>Error!</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group :label="$t('customers.celular')">
            <b-form-input
              type="text"
              v-model.trim="$v.customer.celular.$model"
              :state="!$v.customer.celular.$error"
            />
            <b-form-invalid-feedback>Error!</b-form-invalid-feedback>
          </b-form-group>
          <b-form-group :label="$t('customers.email')">
            <b-form-input
              type="text"
              v-model.trim="$v.customer.email.$model"
              :state="!$v.customer.email.$error"
            />
            <b-form-invalid-feedback v-if="!$v.customer.email.required"
              >Is required!</b-form-invalid-feedback
            >
            <b-form-invalid-feedback v-else-if="!$v.customer.email.email"
              >Invalid email address</b-form-invalid-feedback
            >
          </b-form-group>

          <p>{{ customer }}</p>
        </b-card>
        <!-- Botones -->
        <b-button type="submit" variant="success" class="mt-4">{{
          $t("forms.submit")
        }}</b-button>
        <b-button type="reset" variant="secondary" class="mt-4">{{
          $t("forms.reset")
        }}</b-button>
        <b-button
          variant="primary"
          class="mt-4"
          :to="{ path: 'customers-select' }"
          >{{ $t("forms.prev") }}</b-button
        >
      </b-form>
    </b-colxx>
  </b-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import axios from "axios";
import { apiUrl } from "../../../constants/config";
const { required, email, numeric } = require("vuelidate/lib/validators");
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
  components: {
    "v-select": vSelect,
  },
  data() {
    return {
      customer: {
        nombre: null,
        tipo_identificacion: null,
        identificacion: null,
        direccion: null,
        telefono: null,
        celular: null,
        email: null,
      },

      options: [
        { value: null, text: "Please select an option" },
        { value: "C", text: "CEDULA" },
        { value: "R", text: "RUC" },
        { value: "C", text: "PASAPORTE" },
      ],
    };
  },
  validations: {
    customer: {
      nombre: {
        required,
      },
      tipo_identificacion: {
        required,
      },
      identificacion: {
        required,
      },
      direccion: {
        required,
      },
      telefono: {
        numeric,
      },
      celular: {
        numeric,
      },
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    onValitadeFormSubmit() {
      this.$v.$touch();
      axios.post(apiUrl + "/clientes/", this.customer).then((response) => {
        this.customer.nombre = null;
        this.customer.tipo_identificacion = null;
        this.customer.identificacion = null;
        this.customer.direccion = null;
        this.customer.telefono = null;
        this.customer.celular = null;
        this.customer.email = null;
        this.$notify(
          "success filled",
          "Cliente ",
          "Registro ingresado con exito",
          {
            duration: 3000,
            permanent: false,
          }
        );
      });
    },
    addNotification(
      type = "success",
      title = "This is Notify Title",
      message = "This is Notify Message,<br>with html."
    ) {
      this.$notify(type, title, message, { duration: 3000, permanent: false });
    },
  },
};
</script>

<style>
</style>