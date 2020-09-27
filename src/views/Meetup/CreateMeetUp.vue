<template>
    <v-container>
        <v-row>
            <v-col cols="12" offset-sm="2">
                <h3 class="primary--text">Create A Meetup</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <form action="">
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field name="title" label="Title" id="title" required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field name="location" label="Location" id="location" required></v-text-field>
                        </v-col>
                    </v-row>
                </form>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field name="imageUrl" label="Image Url" id="imageUrl" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row v-show="imageUrl">
                    <v-col cols="12" sm="6">
                        <img :src="imageUrl" alt="Image Preview" />
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-textarea outlined name="desciption" label="Description" value=""></v-textarea>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "CreateMeetup",
    components: {},
    data() {
        return {
            imageUrl: null,
        };
    },
};
</script>
