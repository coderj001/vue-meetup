<template>
    <div>
        <v-app-bar color="deep-purple" dark>
            <v-app-bar-nav-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <router-link :to="{ name: 'Home' }" tag="span" style="cursor:pointer">
                    DevMeetUp
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn small color="deep-purple darken-1" v-for="item in menuItems" :key="item.title" router :to="item.link">
                    <v-icon>mdi-{{ item.icon }}</v-icon>
                    {{ item.title }}
                </v-btn>
                <v-btn small color="deep-purple darken-1" v-show="userIsAuth" @click="signoutUser">
                    <v-icon>mdi-account-arrow-right-outline</v-icon>
                    SignOut
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
        <v-navigation-drawer v-model="sideNav" app temporary>
            <v-list>
                <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link">
                    <v-list-item-action>
                        <v-btn>
                            <span>{{ item.title }}</span>
                            <v-icon>mdi-{{ item.icon }}</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
                <v-list-item v-show="userIsAuth">
                    <v-list-item-action>
                        <v-btn @click="signoutUser">
                            <span>SignOut</span>
                            <v-icon>mdi-account-arrow-right-outline</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            sideNav: false,
        };
    },
    computed: {
        menuItems() {
            let menuitem = [
                { icon: "face", title: "Sign Up", link: { name: "SignUp" } },
                { icon: "login", title: "Sign In", link: { name: "SignIn" } },
            ];
            if (this.userIsAuth) {
                menuitem = [
                    { icon: "account-supervisor", title: "View Meetup", link: { name: "Meetups" } },
                    { icon: "map-marker", title: "Organize Meetup", link: { name: "CreateMeetUp" } },
                    { icon: "account", title: "Profile", link: { name: "Profile" } },
                ];
            }
            return menuitem;
        },
        userIsAuth() {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
        },
    },
    methods: {
        signoutUser() {
            this.$store.dispatch("logout");
        },
    },
};
</script>
