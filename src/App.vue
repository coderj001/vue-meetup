<template>
    <v-app>
        <v-navigation-drawer color="purple" v-show="sideBar" temporary>
            <v-list>
                <v-list-item-icon>
                    <v-icon>mdi-account-supervisor</v-icon>
                    Account
                </v-list-item-icon>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar>
            <v-app-bar-nav-icon @click="sideBar = !sideBar"></v-app-bar-nav-icon>

            <v-toolbar-title>Dev MeetUp</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn color="purple" elevation="10">
                    <v-icon large>mdi-account-supervisor</v-icon>
                    View MeetUp
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </v-app>
</template>

<script>
export default {
    name: "App",

    components: {},

    data: () => ({
        sideBar: false,
    }),
};
</script>
