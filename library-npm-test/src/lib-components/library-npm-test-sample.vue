<script>
export default {
    name: 'LibraryNpmTestSample', // vue component name
    data() {
        return {
            counter: 5,
            initCounter: 5,
        };
    },
}
</script>

<template>
    <div class="library-npm-test-sample">
        <p>The counter is set to <b>{{counter}}</b>.</p>
        <v-btn>test v-btn</v-btn>
        <button @click="counter += 1">Click +1</button>
        <button @click="counter -= 1">Click -1</button>
        <button @click="counter = initCounter">Reset</button>
    </div>
</template>

<style scoped>
    .library-npm-test-sample {
        display: block;
        width: 400px;
        margin: 25px auto;
        border: 1px solid #ccc;
        background: #eaeaea;
        text-align: center;
        padding: 25px;
    }
    .library-npm-test-sample p {
        margin: 0 0 1em;
    }
</style>
