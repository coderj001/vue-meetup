<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card elevation="5" hover>
                    <v-card-title>
                        <h3 class="primary--text">{{meetup.title}}</h3>
                    </v-card-title>
                    <v-card-subtitle>
                        <div class="info--text">{{meetup.date}}</div>
                    </v-card-subtitle>
                    <v-img class="" :src="meetup.imageUrl" height="400px"></v-img>
                    <v-card-text>
                        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequuntur, temporibus, laudantium cum quos harum veritatis iste, cumque dolor tempore sint! Nam quisquam distinctio, ea repellat fuga facilis in unde.</div>
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
export default {
    name: "Meetup",
    components: {},
    computed: {
            meetup(){
                    return this.$store.getters.loadedMeetup(this.$route.params.id)
                }
        },
};
</script>
