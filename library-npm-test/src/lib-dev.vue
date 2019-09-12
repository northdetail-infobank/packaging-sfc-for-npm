<script>
import { LibraryNpmTestSample } from './entry';
export default {
    name:  'LibraryNpmTestLibDev', // vue library dev component
    components: {
        LibraryNpmTestSample,
    },
}
</script>

<template>
    <div class="library-npm-test-lib-dev">
        <library-npm-test-sample></library-npm-test-sample>
    </div>
</template>

<style scoped>
    .library-npm-test-lib-dev {
        display: block;
        width: 400px;
        margin: 25px auto;
    }
</style>
