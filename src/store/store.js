import { createStore } from 'vuex'
import axios from '@/axios'

 const store = createStore({
  state: {
    step: 0,
    allowStep: true,
    learning_objectives: [],
    pre_requisites: [],
    patientHistory: {
      id: 1,
      name: null,
      age: null,
      incident_description: []  
    }
  },
  getters:{
    learningObjectives: state => state.learning_objectives,
    preRequisites: state => state.pre_requisites,
    patientHistory: state => state.patientHistory
  },
  mutations: {
    SET_LEARNING_OBJECTIVES(state, learning_objectives){
      state.learning_objectives = learning_objectives
    },
    SET_PRE_REQUISITES(state, pre_requisites){
      state.pre_requisites = pre_requisites
    },
    // SET_PATIENT_HISTORY(state, patientHistory){
    //   state.patientHistory = patientHistory
    // }
  },
  actions: {
    async getExperimentData({ commit }){
      await axios.get('experiment').then(response => {
        commit("SET_LEARNING_OBJECTIVES", response.data.learning_objectives)
        commit("SET_PRE_REQUISITES", response.data.pre_requisites)
        this.state.patientHistory.name = response.data.name
        this.state.patientHistory.age = response.data.age
        this.state.patientHistory.incident_description = response.data.incident_description
      })
    },
    
  },
  modules: {

  }
})

export default store
