const homeModule = {
    //声明命名空间
    namespaced: true,
    state() {
        return {
            homeCount: 100
        }
    },
    getters: {
        doubleHomeCount(state, getters, rootState, rootGetters) {
            return state.homeCount * 2
        }
    },
    mutations: {
        //只有一个参数state
        increment(state) {
            state.homeCount++
        }
    },
    actions: {
        //$store中没有rootState rootGetters
        incrementAction({commit, dispatch, state, rootState, getters, rootGetters}) {
            commit("increment")
            //第二个参数为payload  第三参数表示提交到根store进行处理
            commit("increment", null, {root: true})

            // dispatch
            // dispatch("incrementAction", null, {root: true})
        }
    }
}

export default homeModule
