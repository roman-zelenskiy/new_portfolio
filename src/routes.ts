import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';
import Works from './pages/Works.vue';
import MyExperience from './pages/MyExperience.vue';
import AdminMain from './pages/admin/Main.vue';

import DefaultLayout from './layouts/Default.vue';
import AdminLayout from './layouts/Admin.vue';

import AdminWorks from './pages/admin/works/List.vue';
import CreateWorkPage from './pages/admin/works/Create.vue';
import UpdateWorkPage from './pages/admin/works/Update.vue';

import { useAuthStore } from './stores/index';

export const routes = [
  {
    name: 'Client',
    path: '/',
    component: DefaultLayout,
    children: [
      {
        name: 'Home',
        path: '',
        component: Home,
        meta: { transition: 'slide-fade' }
      },
      {
        name: 'About',
        path: 'about',
        component: About,
        meta: { transition: 'slide-fade' }
      },
      {
        name: 'My Experience',
        path: 'my_experience',
        component: MyExperience,
        meta: { transition: 'slide-fade' }
      },
      {
        name: 'Works',
        path: 'works',
        component: Works,
        meta: { transition: 'slide-fade' },
        props: true
      },
      {
        name: 'Contact',
        path: 'contact',
        component: Contact,
        meta: { transition: 'slide-fade' },
        props: true
      }
    ]
  },
  {
    name: 'Admin',
    path: '/admin',
    props: true,
    component: AdminLayout,
    beforeEnter: () => {
      const authStore = useAuthStore();

      if (!authStore.chцckAdminKey()) {
        return false;
      }
    },
    children: [
      {
        name: 'AdminMain',
        path: 'main',
        component: AdminMain,
        meta: { transition: 'slide-fade' },
        props: true
      },
      {
        name: 'AdminWorks',
        path: 'works',
        component: AdminWorks,
        meta: { transition: 'slide-fade', customName: 'Works' },
        props: true
      },
      {
        name: 'CreateWork',
        path: 'works/create',
        component: CreateWorkPage,
        meta: { transition: 'slide-fade' },
        props: true
      },
      {
        path: 'works/update/:projectId',
        name: 'UpdateWork',
        component: UpdateWorkPage,
        props: true,
        meta: { transition: 'slide-fade' }
      }
    ]
  }
];
