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
        <v-row>
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
            <v-col cols="12" xs="12" class="text-xs-center">
                <p>Join Our Club</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Home",
    components: {},
    data() {
        return {
            meetups: [
                { imageUrl: "https://i.ibb.co/MCCmYgp/1200px-Lake-Gardens-Kuala-Lumpur-03.jpg", id: "1jsi2jsnaq3", title: "Meet up in Lake Garden" },
                { imageUrl: "https://i.ibb.co/tXx9r0K/science-city.jpg", id: "223n1j21o2", title: "Meet up in Science City" },
            ],
        };
    },
    methods: {
        onLoadMeetup(id) {
            this.$router.push({ name: "Meetup", params: { name: id } });
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
</style>
