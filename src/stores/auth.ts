import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const validKey = import.meta.env.VITE_PERSONAL_ACCESS_TOKEN_GITHUB;

    const getAdminKey = () => {
        return localStorage.getItem("admin_key");
    }


    const setAdminKey = (keyValue: string) => {
        localStorage.setItem("admin_key", keyValue);
    }

    const checkAdminKey = () => {
        if(validKey === getAdminKey()) {
            return true;
        }
        return false;
    }

    return {
        setAdminKey,
        getAdminKey,
        checkAdminKey
    }
})