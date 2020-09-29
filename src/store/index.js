import Vue from "vue";
import Vuex from "vuex";
import firebaseApp from "@/firebase/init";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl:
          "https://i.ibb.co/MCCmYgp/1200px-Lake-Gardens-Kuala-Lumpur-03.jpg",
        id: "1jsi2jsnaq3",
        title: "Meet up in Lake Garden",
        date: new Date()
      },
      {
        imageUrl: "https://i.ibb.co/tXx9r0K/science-city.jpg",
        id: "223n1j21o2",
        title: "Meet up in Science City",
        date: new Date()
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        desciption: payload.desciption,
        date: payload.date,
        id: Math.random()
          .toString(36)
          .substring(7)
      };
      commit("createMeetup", meetup);
    },
    signUserUp({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(obj => {
          commit("setLoading", true);
          const newUser = {
            id: obj.user.uid,
            registerdMeetups: []
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
          console.log(error);
        });
    },
    signUserIn({ commit }, payload) {
      commit("setLoading", true);
      commit("clearError");
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(obj => {
          commit("setLoading", false);
          commit("clearError");
          const User = {
            id: obj.user.uid,
            registerdMeetups: []
          };
          commit("setUser", User);
        })
        .catch(error => {
          commit("setLoading", false);
          commit("setError", error);
          console.log(error);
        });
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    },
    featureMeetups(getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetup(state) {
      return meetupId => {
        return state.loadedMeetups.find(meetup => {
          return meetup.id == meetupId;
        });
      };
    },
    user(state) {
      return state.user;
    },
    error(state) {
      return state.error;
    },
    loading(state) {
      return state.loading;
    }
  }
});
