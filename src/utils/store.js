import Vue from 'vue'
import Vuex from 'vuex'
import Web3 from 'web3'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        "infuraKey": "",
        "infuraUrl": "wss://mainnet.infura.io/ws/v3/",
        "userWallet": "0x2D1E7B6E6284409e16991dE76d2A82847a7d61C5",
        "ethBalance": 0,
    },
    mutations: {
        setEthBalance(state, payload){
            state.ethBalance = payload;
        },
        setInfuraKey(state, payload){
            state.infuraKey = payload;
            state.infuraUrl = "wss://mainnet.infura.io/ws/v3/" + payload;
        },
    },
    actions: {
        getEthBalance(context) {
            // grab endpoint
            const endpoint = context.state.infuraUrl;
            // Creating the web3 object
            var web3 = new Web3(endpoint);
            // Calling the async function
            web3.eth.getBalance(context.state.userWallet).then(response => {
            context.commit('setEthBalance', response);
            });
        },
        changeInfuraKey(context, newKey){
            context.commit('setInfuraKey', newKey);
        }
    },
    getters: {
        infuraEndpoint(state){
            return function(){
                // TODO To add function to actually compute this based on the KEY
                return state.infuraUrl;
            }
        },
        ethBalance(state){
            return function(){
                return state.ethBalance;
            }
        }
    }
})