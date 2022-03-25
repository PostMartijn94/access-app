import {writable, readable} from 'svelte/store';

export const page = writable(1);

export const back = () => page.update(n => n -= 1)
export const next = () => page.update(n => n += 1)

export const reasonOptions = readable([
    'Laden/Lossen',
    'Verhuizen',
    'Bezoek',
])

export const accessRequest = writable({
    reason: null,
    date: Date().toLocaleString(),
    time: {
        from: '07:00',
        to: '20:00'
    },
    licences: [
        {id: 0, plate: '51-LT-DT', trailer: false}
    ]
})

export const accessRequests = writable([{
    reason: 'Verhuizen',
    date: '01-06-2022',
    time: {
        from: '09:00',
        to: '21:00'
    },
    licences: [
        {id: 0, plate: '51-LT-DT', trailer: true}
    ]
}])
