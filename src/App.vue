<template>
    <v-app>
        <Navbar />
        <main>
            <router-view></router-view>
        </main>
    </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
    name: "App",

    components: {
        Navbar,
    },

    data: () => ({}),
};
</script>
