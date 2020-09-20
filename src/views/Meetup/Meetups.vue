<template>
    <v-container fill-height fill-width fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" md="8">
                <v-card class="info" elevation-6>
                    <v-container fluid>
                        <v-row>
                            <v-col cols="5" sm="4" md="3">
                                <v-img class="white--text align-end" src="https://i.ibb.co/MCCmYgp/1200px-Lake-Gardens-Kuala-Lumpur-03.jpg" height="125px"></v-img>
                            </v-col>
                            <v-col cols="7" sm="8" md="9">
                                <v-card-title>
                                    <div>
                                        <h5 class="white--text mb-0">Lake Gardens</h5>
                                        <div>7th July 2020</div>
                                    </div>
                                </v-card-title>
                                <v-card-action>
                                    <v-btn flat>
                                        <v-icon left light>mdi-arrow-right</v-icon>
                                        View Meetup
                                    </v-btn>
                                </v-card-action>
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
};
</script>
