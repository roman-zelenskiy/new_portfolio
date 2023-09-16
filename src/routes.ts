import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Works from "./pages/Works.vue";
import MyExperience from "./pages/MyExperience.vue";


export const routes = [
    {
        name: 'Home',
        path: '/new_portfolio/',
        component: Home,
        meta: { transition: 'slide-fade' },
    },
    {
        name: 'About',
        path: '/new_portfolio/about',
        component: About,
        meta: { transition: 'slide-fade' },
    },
    {
        name: 'My Experience',
        path: '/new_portfolio/my_experience',
        component: MyExperience,
        meta: { transition: 'slide-fade' },
    },
    {
        name: 'Works',
        path: '/new_portfolio/works',
        component: Works,
        meta: { transition: 'slide-fade' },
    },
    {
        name: 'Contact',
        path: '/new_portfolio/contact',
        component: Contact,
        meta: { transition: 'slide-fade' },
    },
]
