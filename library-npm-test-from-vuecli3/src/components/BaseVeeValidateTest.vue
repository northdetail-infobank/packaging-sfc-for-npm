<template>
  <ValidationProvider rules="required" v-slot="{ errors }">
    <input v-model="value" type="text">
    <span id="error">{{ errors[0] }}</span>
  </ValidationProvider>
</template>
<script>
import {ValidationProvider} from 'vee-validate';

export default {
  components: {
    ValidationProvider,
  },
  data() {
    return {
      value: '',
    };
  },
};
</script>
