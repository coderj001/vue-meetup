<template>
    <v-container>
        <v-row v-if="loading">
            <v-col cols="12">
                <div class="text-center">
                    <v-progress-circular indeterminate color="purple" :width="20" :size="190"></v-progress-circular>
                </div>
            </v-col>
        </v-row>
        <v-row v-else>
            <v-col cols="12">
                <v-card elevation="5" hover>
                    <v-card-title>
                        <h3 class="primary--text">{{ meetup.title }}</h3>
                        <template v-if="userIsCreator">
                            <v-spacer></v-spacer>
                        <edit-meetup v-show="loading" v-bind:meetup="meetup"></edit-meetup>
                        </template>
                    </v-card-title>
                    <v-card-subtitle>
                        <div class="info--text">{{ meetup.date | dateformat }} - {{ meetup.location }}</div>
                    </v-card-subtitle>
                    <v-img class="" :src="meetup.imageUrl" height="400px"></v-img>
                    <v-card-text>
                        <div v-if="meetup.desciption != null">{{ meetup.desciption }}</div>
                        <div v-else>No Description</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="mr-2 info">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import EditMeetup from "@/components/Edit/EditMeetupDetailsDialog.vue";
export default {
    name: "Meetup",
    components: {
        "edit-meetup": EditMeetup,
    },
    computed: {
        meetup() {
            return this.$store.getters.loadedMeetup(this.$route.params.id);
        },
        userIsAuthenticated() {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
        },
        userIsCreator() {
            if (!this.userIsAuthenticated) {
                return false;
            }
            return this.$store.getters.user.id == this.meetup.creatorId;
        },
        loading() {
            return this.$store.getters.loading;
        },
    },
};
</script>
