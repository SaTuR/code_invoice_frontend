<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.products')" />
        <div class="separator mb-5"></div>
      </b-colxx>
      <b-colxx xxs="12">
        <b-form
          @submit.prevent="onValitadeFormSubmit"
          class="av-tooltip tooltip-label-right"
        >
          <b-card class="mb-4" :title="$t('customers.generals')">
            <b-form-group :label="$t('products.auxiliar_id')">
              <b-form-input
                type="text"
                v-model.trim="$v.product.nombre.$model"
                :state="!$v.product.nombre.$error"
              />
              <b-form-invalid-feedback>Is required!</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group :label="$t('customers.identification_type')">
              <b-form-select
                v-model="$v.product.tipo.$model"
                :options="options"
                :state="!$v.product.tipo.$error"
                plain
              />
              <b-form-invalid-feedback>Is required!</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group :label="$t('products.name')">
              <b-form-input
                type="text"
                v-model.trim="$v.product.nombre.$model"
                :state="!$v.product.nombre.$error"
              />
              <b-form-invalid-feedback>Is required!</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group label="lo que carlos dice">
              <b-form-input
                type="text"
                v-model.trim="$v.product.carlos.$model"
                :state="!$v.product.nombre.$error"
              />
              <b-form-invalid-feedback>Is required!</b-form-invalid-feedback>
            </b-form-group>
            <b-form-group :label="$t('products.price')">
              <b-form-input
                type="text"
                v-model.trim="$v.product.precio.$model"
                :state="!$v.product.precio.$error"
              />
              <b-form-invalid-feedback>Is required!</b-form-invalid-feedback>
            </b-form-group>

            <p>{{ product }}</p>
          </b-card>

          <b-card class="mb-4" :title="$t('products.taxes')">
            <b-form-group :label="$t('products.iva')">
              <b-form-select
                v-model="$v.product.IVA.$model"
                :options="iva"
                :state="!$v.product.IVA.$error"
                value-field="codigo"
                text-field="nombre"
                plain
              />
            </b-form-group>
            <b-form-group :label="$t('products.ice')">
              <b-form-select
                v-model="$v.product.ICE.$model"
                :options="ice"
                :state="!$v.product.ICE.$error"
                value-field="codigo"
                text-field="nombre"
                plain
              />
            </b-form-group>
            <b-form-group :label="$t('products.irbpnr')">
              <b-form-select
                v-model="$v.product.IRBPNR.$model"
                :options="irbpnr"
                :state="!$v.product.IRBPNR.$error"
                value-field="codigo"
                text-field="nombre"
                plain
              />
            </b-form-group>
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
            :to="{ path: 'products-select' }"
            >{{ $t("forms.prev") }}</b-button
          >
        </b-form>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import { tipo_producto, iva, ice, irbpnr } from "../../../data/sri.js";
const { required, numeric } = require("vuelidate/lib/validators");
export default {
  data() {
    return {
      tipo_producto: tipo_producto,
      iva: iva,
      ice: ice,
      irbpnr: irbpnr,
      product: {
        id_auxiliar: null,
        tipo: null,
        nombre: null,
        carlos: null,
        precio: 0.0,
        IVA: null,
        ICE: null,
        IRBPNR: null,
      },
    };
  },
  validations: {
    product: {
      id_auxiliar: {},
      carlos: {},
      nombre: {
        required,
      },
      tipo: {
        required,
      },
      precio: {
        required,
        numeric,
      },
      IVA: {},
      ICE: {},
      IRBPNR: {},
    },
  },
  methods: {
    onValitadeFormSubmit() {
      this.$v.$touch();
      console.log(
        JSON.stringify({
          product,
        })
      );
    },
  },
};
</script>

<style>
</style>