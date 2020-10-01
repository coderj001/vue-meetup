<template>
    <v-container>
        <v-row>
            <v-col xs="12" sm="6" offset-sm="3">
                <v-card>
                    <v-card-text>
                        <v-container>
                            <v-row v-if="error">
                                <v-col cols="12">
                                    <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
                                </v-col>
                            </v-row>
                            <h2>SignUp Form</h2>
                            <v-form ref="form" @submit.prevent="onSignup" lazy-validation>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="email" name="email" id="email" type="email" label="Email" required></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="password" name="password" id="password" type="password" label="Password" required></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field v-model="confirmPassword" name="confirmPassword" id="confirmPassword" type="password" label="Confirm Password" :rules="[comparePassword]"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" offset-lg="4">
                                        <v-btn type="submit" :disabled="loading" :loading="loading" color="success" class="mr-4">
                                            Sign Up
                                            <span class="custom-loader">
                                                <v-icon light>mdi-cached</v-icon>
                                            </span>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "SignUp",
    components: {},
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: "",
        };
    },
    methods: {
        onSignup() {
            this.$store.dispatch("signUserUp", { email: this.email, password: this.password });
        },
        onDismissed() {
            this.$store.commit("clearError");
        },
    },
    computed: {
        comparePassword() {
            return this.password !== this.confirmPassword ? "Passwords do not match" : "";
        },
        user() {
            return this.$store.getters.user;
        },
        error() {
            return this.$store.getters.error;
        },
        loading() {
            return this.$store.getters.loading;
        },
    },
    watch: {
        user(value) {
            if (value !== null && value !== undefined) this.$router.push({ name: "Home" });
        },
    },
};
</script>

<style>
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
}
@-moz-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@-webkit-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@-o-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
