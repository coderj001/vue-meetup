import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      loadedMeetups:[
                { imageUrl: "https://i.ibb.co/MCCmYgp/1200px-Lake-Gardens-Kuala-Lumpur-03.jpg", id: "1jsi2jsnaq3", title: "Meet up in Lake Garden" , date:  '2017-07-17'},
                { imageUrl: "https://i.ibb.co/tXx9r0K/science-city.jpg", id: "223n1j21o2", title: "Meet up in Science City" , date:  '2018-07-17'},
            ],
      user: {
          id: 'anqlkw12m12',
          registerdMeetups:['aslkw1212'],
      }
  },
  mutations: {
  },
  actions: {
  },
  getters: {
      loadedMeetups (state){
          return state.loadedMeetups.sort((meetupA, meetupB)=> {return meetupA.date > meetupB.date;})
      },
      loadedMeetup (state){
          return (meetupId)=>{return state.loadedMeetups.find((meetup)=>{
              return meetup.id == meetupId;
          })};
      }
  }
})
