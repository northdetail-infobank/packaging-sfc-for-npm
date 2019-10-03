<template>
  <div>
    {{info}}
  </div>
</template>

<script>

export default {
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    this.$axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((response) => (this.info = response.data.bpi));
  },
};
</script>
