import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore({
    state: {
        images: [],
        favoriteImages: [],
    },
    mutations: {
        SET_IMAGES_TO_STATE: (state, images) => {
            state.images = images;
        },
        ADD_FAVORITES_IMAGES_TO_STATE: (state, favoriteImage) => {
            state.favoriteImages.unshift(favoriteImage)
        }
    },
    actions: {
        GET_RANDOM_IMAGES_FROM_UNSPLASH({commit}) {
            return axios('https://api.unsplash.com/photos/random?client_id=dWre8rHhu9YZYk-geu19UjxnU0cby-3CYBNSV6ZdogA&count=8', {
                method: "GET",
            })
                .then((images) => {
                    commit('SET_IMAGES_TO_STATE', images.data);
                    return images;
                })
                .catch(error => {
                    console.log(error)
                    return error;
                });
        },
        GET_IMAGES_FROM_UNSPLASH_BY_SEARCH(ctx, searchWordValue) {
            return axios(`https://api.unsplash.com/search/photos?client_id=dWre8rHhu9YZYk-geu19UjxnU0cby-3CYBNSV6ZdogA&query=${searchWordValue}&count=8`, {
                method: "GET",
            })
                .then((images) => {
                    ctx.commit('SET_IMAGES_TO_STATE', images.data.results);
                    return images;
                })
                .catch(error => {
                    console.log(error)
                    return error;
                });
        }
    },
    getters: {
        allImages(state) {
            return state.images;
        },
        favoriteImages(state) {
            return state.favoriteImages;
        }
    }
});

export default store;