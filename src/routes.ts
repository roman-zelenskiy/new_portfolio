import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Works from "./pages/Works.vue";
import MyExperience from "./pages/MyExperience.vue";


export const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: { transition: 'slide-fade' },
    },
    {
        name: 'About',
        path: '/about',
        component: About,
        meta: { transition: 'slide-fade' },
    },
    {
        name: 'My Experience',
        path: '/my_experience',
        component: MyExperience,
        meta: { transition: 'slide-fade' },
    },
    {
        name: 'Works',
        path: '/works',
        component: Works,
        meta: { transition: 'slide-fade' },
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact,
        meta: { transition: 'slide-fade' },
    },
]
