import {writable, readable, derived} from 'svelte/store';
import type IAccessRequest from "./types/IAccessRequest";

export const page = writable(1);

export const back = () => page.update(n => n -= 1)
export const next = () => page.update(n => n += 1)
export const showNext = writable(false)

export const reasonOptions = readable([
    'Laden/Lossen',
    'Verhuizen',
    'Bezoek',
])

const defaultAccessRequest = {
    id: null,
    reason: null,
    date: (new Date(Date.now())).toLocaleDateString(),
    time: {
        from: '07:00',
        to: '20:00'
    },
    licences: [
        {id: '001', plate: '', trailer: false}
    ]
} as IAccessRequest

export const accessRequest = writable(defaultAccessRequest);

export const resetAccessRequest = () => accessRequest.set(defaultAccessRequest)

export const accessRequests = writable([defaultAccessRequest])
