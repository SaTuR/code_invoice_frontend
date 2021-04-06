<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.categories')" />
        <div class="separator mb-5"></div>
      </b-colxx>
      <b-colxx xxs="12">
        <b-form
          @submit.prevent="onValitadeFormSubmit"
          class="av-tooltip tooltip-label-right"
        >
          <b-card class="mb-4" :title="$t('customers.generals')">
            <b-form-group :label="$t('categories.name')">
              <b-form-input
                type="text"
                v-model.trim="$v.category.nombre.$model"
                :state="!$v.category.nombre.$error"
              />
              <b-form-invalid-feedback>Is required!</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group :label="$t('categories.state')">
              <b-form-checkbox
                v-model.trim="$v.category.estado.$model"
                value="true"
                unchecked-value="false"
              />
            </b-form-group>

            <p>{{ category }}</p>
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
            :to="{ path: 'categories-select' }"
            >{{ $t("forms.prev") }}</b-button
          >
        </b-form>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
const { required, email, numeric } = require("vuelidate/lib/validators");

export default {
  data() {
    return {
      category: {
        nombre: null,
        estado: false,
      },
    };
  },
  validations: {
    category: {
      nombre: {
        required,
      },
      estado: { required },
    },
  },
  methods: {
    onValitadeFormSubmit() {
      this.$v.$touch();
      console.log(this.category);
    },
  },
};
</script>

<style>
</style>