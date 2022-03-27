<script lang="ts">
    import Card from "../components/layouts/Card.svelte";
    import { slide } from "svelte/transition";
    import { accessRequests } from "../stores";

    let licencePlate: string
    let code: string

    const checkLicence = () => {
        const ar = $accessRequests.find((rq) => !!rq.licences.find((l) => l.plate === licencePlate))
        if (ar) generateCode()
        console.log(code)
    }

    const generateCode = () => code = Math.floor(1000 + Math.random() * 9000).toString();

</script>

<Card>
    <div slot="title">Get code</div>
    {#if !code}
        <div class="flex justify-center mb-4 items-baseline space-x-4 my-8">
            <input type="text" id="licencePlate" bind:value={licencePlate} class="border-b bg-transparent text-2xl w-28">
            <button class="w-fit px-4 hover:bg-transparent bg-gray-600 delay-75 duration-100 text-white text-sm font-bold rounded-2xl w-full py-3 mt-7 border-b-4 border border-b-white-600"
                    on:click={checkLicence}>
                Check
            </button>
        </div>
    {:else}
        <div class="flex justify-center my-8">
            {#each code as num, i}
                <div class="inline-block text-gray-200 border rounded text-3xl text-center px-4 py-2 m-2">
                    <div in:slide={{delay: (i*300)}}>
                        {num}
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</Card>


<div class="mt-8">

</div>