import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ mode }) => {
    // const env = loadEnv(mode, process.cwd());

    return {
        plugins: [vue()],
        base: '/new_portfolio',
        server: {
            open: '/',
        },
    };
});