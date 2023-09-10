import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Works from "./pages/Works.vue";
import MyExperience from "./pages/MyExperience.vue";


export const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'About',
        path: '/about',
        component: About
    },
    {
        name: 'My Experience',
        path: '/my_experience',
        component: MyExperience
    },
    {
        name: 'Works',
        path: '/works',
        component: Works
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact
    },
]
