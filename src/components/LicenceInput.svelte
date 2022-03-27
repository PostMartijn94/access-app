<script lang="ts">
    import { accessRequest, showNext } from "../stores";
    import { slide } from "svelte/transition";

    import { requiredValidator } from '../validators';
    import { createFieldValidator } from '../validation';

    const [ validity, validate ] = createFieldValidator(requiredValidator())

    const validatorHandler = (isValid) => $showNext = isValid

    const addItem = () => $accessRequest.licences = [...$accessRequest.licences, {
        id: Math.round(Math.random() * 10000),
        plate: '',
        trailer: false
    }]

    const removeItem = (id) => $accessRequest.licences = $accessRequest.licences.filter((licence)=> licence.id !== id)
</script>

<div class="flex flex-col my-8">
    {#each $accessRequest.licences as { id, plate, trailer }, i (id)}
        <div class="flex mb-4 justify-between" in:slide >
            <input type="text"
                   bind:value={$accessRequest.licences[i].plate}
                   on:change={() => validatorHandler($validity.valid)}
                   class="border-b bg-transparent text-2xl w-28"
                   use:validate={$accessRequest.licences[i].plate}
            >
            <label class="inline-flex items-center mt-4 ml-4">
                <input type="checkbox" bind:value={$accessRequest.licences[i].trailer} checked={$accessRequest.licences[i].trailer} class="form-checkbox h-5 w-5 text-orange-600"><span class="ml-2 text-gray-200">Aanhanger</span>
                {#if $accessRequest.licences.length > 1}
                <button on:click={() => removeItem(id)} class="relative ml-4 text-red-600">x</button>
                {/if}
            </label>
        </div>
    {/each}

    {#if $accessRequest.licences.length < 3 && $validity.valid}
        <button on:click={addItem} class="mt-10 text-gray-800 bg-white rounded-full mx-auto px-3 py-1">+</button>
    {/if}

    {#if $validity.dirty && !$validity.valid}
        <span class="text-red-500 font-thin italic">
            {$validity.message}
        </span>
    {/if}
</div>