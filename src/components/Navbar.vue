<template>
    <div>
        <v-app-bar color="deep-purple" dark>
            <v-app-bar-nav-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
            <v-toolbar-title>DevMeetUp</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn outlined>
                    <v-icon>mdi-account-supervisor</v-icon>
                    VIEW MEETUP
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
        <v-card class="mx-auto" height="400" width="256">
            <v-navigation-drawer v-model="sideNav">
                <v-list>
                    <v-list-item>
                        <v-list-item-action>
                            <v-icon>mdi-account-supervisor</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>View Meetup</v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-card>
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
};
</script>
