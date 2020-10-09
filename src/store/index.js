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
    setLoadedMeetups(state, payload) {
      state.loadedMeetups = payload;
    },
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    },
    updateMeetup(state, payload) {
      const meetup = state.loadedMeetups.find(meetup => {
        return meetup.id === payload.id;
      });
      if (payload.title) meetup.title = payload.title;
      if (payload.desciption) meetup.desciption = payload.desciption;
      if (payload.location) meetup.location = payload.location;
      if (payload.date) meetup.date = payload.date;
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
    loadedMeetups({ commit }) {
      commit("setLoading", true);
      firebaseApp
        .database()
        .ref("meetups")
        .once("value")
        .then(data => {
          const meetups = [];
          const obj = data.val();
          for (let key in obj) {
            meetups.push({
              id: key,
              title: obj[key].title,
              desciption: obj[key].desciption,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              location: obj[key].location,
              creatorId: obj[key].creatorId
            });
          }
          commit("setLoadedMeetups", meetups);
          commit("setLoading", false);
        })
        .catch(err => {
          console.log(err);
          commit("setLoading", false);
        });
    },
    createMeetup({ commit, getters }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        desciption: payload.desciption,
        date: payload.date.toISOString(),
        creatorId: getters.user.id
      };
      let imageUrl;
      let key;
      firebaseApp
        .database()
        .ref("meetups")
        .push(meetup)
        .then(data => {
          key = data.key;
          return key;
        })
        .then(key => {
          const filename = payload.image.name;
          const ext = filename.slice(filename.lastIndexOf("."));
          return firebaseApp
            .storage()
            .ref("meetups/" + key + "." + ext)
            .put(payload.image);
        })
        .then(fileData => {
          imageUrl = null;
          fileData.ref
            .getDownloadURL()
            .then(url => {
              imageUrl = url;
              return firebaseApp
                .database()
                .ref("meetups")
                .child(key)
                .update({ imageUrl: imageUrl });
            })
            .then(() => {
              commit("createMeetup", {
                ...meetup,
                imageUrl: imageUrl,
                id: key
              });
            })
            .catch(err => {
              console.log(err);
            });
        });
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
    },
    autoSignIn({ commit }, payload) {
      commit("setUser", { id: payload.uid, registerdMeetups: [] });
    },
    logout({ commit }) {
      firebaseApp.auth().signOut();
      commit("setUser", null);
    },
    updateMeetupData({ commit }, payload) {
      commit("setLoading", true);
      const updateObj = {};
      if (payload.title) updateObj.title = payload.title;
      if (payload.desciption) updateObj.desciption = payload.desciption;
      if (payload.location) updateObj.location = payload.location;
      if (payload.date) updateObj.date = payload.date;
      firebaseApp
        .database()
        .ref("meetups")
        .child(payload.id)
        .update(updateObj)
        .then(() => {
          commit("setLoading", false);
          commit("updateMeetup", payload);
        })
        .catch(err => {
          console.log(err);
          commit("setLoading", false);
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
