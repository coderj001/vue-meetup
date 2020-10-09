<template>
    <v-container>
        <v-row>
            <v-col cols="12" offset-sm="3">
                <h1 class="primary--text">Create A Meetup</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" offset-lg="3" offset-sm="2">
                <form @submit.prevent="onCreateMeetup">
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field name="title" label="Title" id="title" v-model="title" required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-text-field name="location" label="Location" id="location" v-model="location" required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-file-input multiple label="File input" chips v-on:change="changeFile" v-model="files"></v-file-input>
                        </v-col>
                    </v-row>
                    <v-row v-show="imageUrl">
                        <v-col cols="12" sm="6">
                            <img :src="imageUrl" alt="Image Preview" height="300px" width="600px" />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" sm="6">
                            <v-date-picker v-model="date"></v-date-picker>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" sm="6">
                            <v-time-picker scrollable format="24hr" v-model="time"></v-time-picker>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-textarea outlined name="desciption" label="Description" v-model="desciption"></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" offset-sm="2">
                            <v-btn class="primary" :disabled="!formIsValid" type="submit">Create Meetup</v-btn>
                        </v-col>
                    </v-row>
                </form>
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
            title: "",
            location: "",
            desciption: "",
            files: [],
            imageUrl: null,
            date: new Date().toISOString().substr(0, 10),
            time: new Date().toISOString().substr(11, 5),
            image: null,
        };
    },
    methods: {
        onCreateMeetup() {
            if (!this.formIsValid){
                    return
                }
            if (!this.image){
                    return
                }
            const meetupData = {
                title: this.title,
                location: this.location,
                desciption: this.desciption,
                image: this.image,
                date: new Date(this.date + " " + this.time),
            };
            this.$store.dispatch("createMeetup", meetupData);
            this.$router.push({ name: "Meetups" });
        },
        changeFile() {
            let filename = this.files[0].name;
            if (filename.lastIndexOf(".") <= 0) {
                return alert("Please add a valid file.");
            }
            const fileReader = new FileReader();
            fileReader.addEventListener("load", () => {
                this.imageUrl = fileReader.result;
            });
            fileReader.readAsDataURL(this.files[0]);
            this.image = this.files[0];
        },
    },
    computed: {
        formIsValid() {
            return this.title !== "" && this.location !== "" && this.imageUrl !== "" && this.desciption !== "";
        },
    },
};
</script>
