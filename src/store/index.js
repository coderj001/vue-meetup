import Vue from "vue";
import Vuex from "vuex";

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
    user: {
      id: "anqlkw12m12",
      registerdMeetups: ["aslkw1212"]
    }
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
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
      // TODO: Add firebase
      commit("createMeetup", meetup);
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    },
    featureMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetup(state) {
      return meetupId => {
        return state.loadedMeetups.find(meetup => {
          return meetup.id == meetupId;
        });
      };
    }
  }
});
