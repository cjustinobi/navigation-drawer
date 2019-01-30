
// States
export const state = () =>({

    toggleSidebar: false

})

// mutations
export const mutations = {

    TOGGLE_SIDEBAR(state) {
        state.toggleSidebar = !state.toggleSidebar
    }

}

// actions
export const actions = {

    toggleSidebar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    }

}

// Getters
export const getters = {

    toggleSidebar: state => state.toggleSidebar,

}
