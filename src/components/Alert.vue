<template>
    <v-alert dense outlined dismissible @input="onClose" :value="true" type="error"><strong>Error: </strong>{{text}}</v-alert>
</template>

<script>
export default {
    props: ['text'],
    methods: {
        onClose() {
            this.$emit("dismissed");
        },
    },
};
</script>
