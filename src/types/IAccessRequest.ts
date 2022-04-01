export default interface IAccessRequest {
    id: string | null
    reason: string | null,
    date: string,
    time: {
        from: string,
        to: string
    },
    licences: [
        {id: string, plate: string, trailer: boolean}
    ]
}