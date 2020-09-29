<template>
    <v-alert dense outlined dismissible @input="onClose" :value="true" type="error"> I'm a dense alert with the <strong>outlined</strong> prop and a <strong>type</strong> of error </v-alert>
</template>

<script>
export default {
    methods: {
        onClose() {
            this.$emit("dismissed");
        },
    },
};
</script>
