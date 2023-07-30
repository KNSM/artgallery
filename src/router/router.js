import {createRouter, createWebHashHistory} from "vue-router";

import ImagesContent from "@/components/ImagesContent";
import ImagesFavorite from "@/components/ImagesFavorite.vue";
import ImageDetail from '@/components/ImageDetail';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ImagesContent
        },
        {
            path: '/images-favorite',
            name: 'favorite-images',
            component: ImagesFavorite
        },
        {
            path: '/image-detail',
            name: 'image-detail',
            component: ImageDetail
        },
    ]
});