<template>
  <div id="app">
    <h3>Dev</h3>
    <h4>button</h4>
    <base-button :propsText="'test'"/><hr>
    <h4>axios</h4>
    <base-axios-test /><hr>
    <h4>vee-validate</h4>
    <base-vee-validate-test /><hr>
    <h4>i18n</h4>
    <base-i18n-test /><hr>
  </div>
</template>
<script>
import BaseButton from './components/BaseButton';
import BaseAxiosTest from './components/BaseAxiosTest';
import BaseI18nTest from './components/BaseI18nTest';
import BaseVeeValidateTest from './components/BaseVeeValidateTest';

export default {
  components: {
    BaseButton,
    BaseAxiosTest,
    BaseI18nTest,
    BaseVeeValidateTest,
  },
};
</script>
