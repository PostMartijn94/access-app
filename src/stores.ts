import {writable, derived, readable} from 'svelte/store';

export const page = writable(1);

export const back = () => page.update(n => n -= 1)
export const next = () => page.update(n => n += 1)

export const reasonOptions = readable([
    'Laden/Lossen',
    'Verhuizen',
    'Bezoek',
])

export const reason = writable(null)

export const date = writable(Date().toLocaleString())

export const time = writable({from: '07:00', to: '20:00'})