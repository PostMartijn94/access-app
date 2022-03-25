<script lang="ts">
    import { accessRequest } from "../stores";
    import { slide, fade } from "svelte/transition";

    const addItem = () => $accessRequest.licences = [...$accessRequest.licences, {
        id: $accessRequest.licences.length,
        plate: '',
        trailer: false
    }]

    const removeItem = (id) => $accessRequest.licences = $accessRequest.licences.filter((licence)=> licence.id !== id)
</script>

<div class="flex flex-col my-8">
    {#each $accessRequest.licences as licence, i (i)}
        <div class="flex mb-4 justify-between" transition:slide >
            <input type="text" bind:value={$accessRequest.licences[i].plate} class="border-b bg-transparent text-2xl w-28">
            <label class="inline-flex items-center mt-4 ml-4">
                <input type="checkbox" bind:value={$accessRequest.licences[i].trailer} class="form-checkbox h-5 w-5 text-orange-600"><span class="ml-2 text-gray-200">Aanhanger</span>
            </label>
            <button on:click={() => removeItem(licence.id)} class="text-white mx-4 bg-red-600 p-2 py-1 rounded-full">x</button>
        </div>
    {/each}
    {#if $accessRequest.licences.length < 3}
        <button on:click={addItem} class="mt-10 text-gray-800 bg-white rounded-full mx-auto px-3 py-1">+</button>
    {/if}
</div>