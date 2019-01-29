const state = {
    productItems: []
};

const mutations = {
    UPDATE_PRODUCT_ITEMS(state, payload) {
        state.productItems = payload;
    }
};

const actions = {
    getProductItems({ commit }) {

    }
};

const getters = {};

const productModule = {
    state,
    mutations,
    actions,
    getters
}

export default productModule;