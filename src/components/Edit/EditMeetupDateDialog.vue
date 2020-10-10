<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark fab v-bind="attrs" v-on="on">
                <v-icon dark>mdi-account-clock</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">Edit Date</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-date-picker v-model="editedDate" style="width: 100%" actions></v-date-picker>
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
    props: {
        meetup: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            dialog: false,
            editedDate: null,
        };
    },
    methods: {
        onSaveChange() {
            this.dialog = false;
            const newDate = new Date(this.meetup.date);
            const newDay = new Date(this.editedDate).getUTCDay();
            const newMonth = new Date(this.editedDate).getUTCMonth();
            const newYear = new Date(this.editedDate).getUTCFullYear();
            newDate.setUTCDate(newDay);
            newDate.setUTCMonth(newMonth);
            newDate.setUTCFullYear(newYear);
            this.$store.dispatch("updateMeetupData", {
                id: this.meetup.id,
                date: newDate,
            });
        },
    },
};
</script>
