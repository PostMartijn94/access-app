import { writable } from 'svelte/store'
import { buildValidator } from './validate.js'

export function createFieldValidator (...validators) {
    const { subscribe, set } = writable({ dirty: false, valid: false, message: null })
    const validator = buildValidator(validators)

    function action (node, binding) {
        function validate (value, dirty) {
            const result = validator(value, dirty)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            set(result)
        }

        validate(binding, false)

        return {
            update (value) {
                validate(value, true)
            }
        }
    }

    return [ { subscribe }, action ]
}