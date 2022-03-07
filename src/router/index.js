import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'
import Profile from '@/views/Profile.vue'
import SearchResult from '@/views/SearchResult.vue'
import Sell from '@/views/Sell.vue'

/*List of Category pages in nav bar*/
import CategoryAudio from '@/views/category/CategoryAudio.vue'
import CategoryCollectibles from '@/views/category/CategoryAudio.vue'
import CategoryIcons from '@/views/category/CategoryAudio.vue'
import CategoryPhotography from '@/views/category/CategoryAudio.vue'
import CategoryVideos from '@/views/category/CategoryAudio.vue'
import CategoryVintage from '@/views/category/CategoryAudio.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/searchResult',
        name: 'Search Result',
        component: SearchResult
    },
    {
        path: '/sell',
        name: 'Sell',
        component: Sell
    },
    /* Category pages */
    {
        path: '/categoryAudio',
        name: 'Category Audio',
        component: CategoryAudio
    },
    {
        path: '/categoryCollectibles',
        name: 'Category Collectibles',
        component: CategoryCollectibles
    },
    {
        path: '/categoryIcons',
        name: 'Category Icons',
        component: CategoryIcons
    },
    {
        path: '/categoryPhotography',
        name: 'Category Photography',
        component: CategoryPhotography
    },
    {
        path: '/categoryVideos',
        name: 'Category Videos',
        component: CategoryVideos
    },
    {
        path: '/categoryVintage',
        name: 'Category Vintage',
        component: CategoryVintage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router