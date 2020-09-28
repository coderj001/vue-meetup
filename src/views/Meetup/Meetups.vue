<template>
    <v-container fill-height fill-width fluid>
        <v-row align="center" justify="center" v-for="meetup in meetups" :key="meetup.id">
            <v-col cols="12" md="8">
                <v-card class="info" elevation-6>
                    <v-container fluid>
                        <v-row>
                            <v-col cols="5" sm="4" md="3">
                                <v-img class="white--text align-end" :src="meetup.imageUrl" height="125px"></v-img>
                            </v-col>
                            <v-col cols="7" sm="8" md="9">
                                <v-card-title>
                                    <div>
                                        <h5 class="white--text mb-0">{{ meetup.title }}</h5>
                                        <div>{{ meetup.date|dateformat }}</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn text :to="{ name: 'Meetup', params: { id: meetup.id } }">
                                        <v-icon left light>mdi-arrow-right</v-icon>
                                        View Meetup
                                    </v-btn>
                                </v-card-actions>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Meetups",
    components: {},
    computed: {
        meetups() {
            return this.$store.getters.loadedMeetups;
        },
    },
};
</script>
