import { writable } from 'svelte/store';
import { getUserData } from '../services/userService';

function createUserStore() {
    const { set, subscribe } = writable([]);

    return {
        subscribe,
        load: async () => set(await getUserData())
    }
}

export const users = createUserStore();