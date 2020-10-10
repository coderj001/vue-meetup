<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark fab v-bind="attrs" v-on="on">
                <v-icon dark>mdi-circle-edit-outline</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">Edit Meetup</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field name="title" label="Title" id="title" v-model="editedTitle" required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field name="location" label="Location" id="location" v-model="editedLocation" required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                       <v-col cols="12" sm="6">
                            <v-textarea outlined name="desciption" label="Description" v-model="editedDesciption"></v-textarea>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="onSaveChange">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "EditMeetup",
    props: {
        meetup: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            dialog: false,
            editedTitle: this.meetup.title,
            editedLocation: this.meetup.location,
            editedDesciption: this.meetup.desciption,
        };
    },
    methods: {
        onSaveChange() {
            if (this.editedTitle.trim() === "" && this.editedLocation.trim() === "" && this.editedDesciption.trim() === "") return;
            this.dialog = false;
            this.$store.dispatch('updateMeetupData', {
                    id: this.meetup.id,
                    title: this.editedTitle,
                    location: this.editedLocation,
                    desciption: this.editedDesciption,
                })
        },
    },
};
</script>
