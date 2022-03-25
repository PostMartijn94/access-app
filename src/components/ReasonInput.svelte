<script lang="ts">
    import { page, accessRequest, reasonOptions} from "../stores";
    import { slide } from "svelte/transition";

    const setReason = (option) => {
        $accessRequest.reason = option
        $page += 1
    }
</script>

<div class="flex flex-col" in:slide>
    {#each $reasonOptions as option, i (i)}
        <button on:click={() => setReason(option)}
                class:active={$accessRequest.reason === option}
                class="bg-transparent text-white border-r border-l hover:bg-white hover:text-gray-800 delay-75 duration-100 text-white font-bold rounded-2xl w-full py-3 mt-3 w-auto"
        >
            {option}
        </button>
    {/each}
</div>

<style>
    .active {
        @apply text-gray-800 bg-white;
    }
</style>