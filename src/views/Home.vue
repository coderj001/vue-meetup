<template>
    <v-container fill-height fill-width fluid>
        <v-row align="center" justify="center">
            <v-col cols="6">
                <v-btn large router to="/meetups" color="primary">Explore Meetup</v-btn>
            </v-col>
            <v-col cols="6">
                <v-btn large router to="/createmeetup" color="primary">Organize Meetup</v-btn>
            </v-col>
        </v-row>
        <v-row v-if="loading">
            <v-col cols="12">
                <div class="text-center">
                    <v-progress-circular indeterminate color="purple" :width="20" :size="190"></v-progress-circular>
                </div>
            </v-col>
        </v-row>
        <v-row v-else>
            <v-col cols="12">
                <v-carousel style="cursor: pointer;" cycle show-arrows-on-hover>
                    <v-carousel-item v-for="meetup in meetups" :key="meetup.id" :src="meetup.imageUrl" reverse-transition="fade-transition" transition="fade-transition" @click="onLoadMeetup(meetup.id)">
                        <v-row class="fill-height" align="center" justify="center">
                            <div class="title">{{ meetup.title }}</div>
                        </v-row>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" xs="12">
                <p>Join Our Club</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Home",
    components: {},
    methods: {
        onLoadMeetup(id) {
            this.$router.push({ name: "Meetup", params: { id: id } });
        },
    },
    computed: {
        meetups() {
            return this.$store.getters.featureMeetups;
        },
        loading() {
            return this.$store.getters.loading;
        },
    },
};
</script>

<style scoped>
.title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: whitesmoke;
    font-size: 2em;
    padding: 30px;
}
.v-progress-circular {
    margin: 1rem;
}
</style>
