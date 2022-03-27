<script lang="ts">
    import Card from "../components/layouts/Card.svelte";
    import { goto } from "$app/navigation";
    import { page, accessRequest } from "../stores";
    import {now} from "svelte/internal";

    $page === 1

    console.log((new Date(Date.now())).toLocaleDateString())

    $accessRequest = {
        reason: null,
        date: (new Date(Date.now())).toLocaleDateString(),
        time: {
            from: '07:00',
            to: '20:00'
        },
        licences: [
            {id: 0, plate: '', trailer: false}
        ]
    }
</script>

<Card>
    <div slot="title">Access App</div>
    <button class="hover:bg-transparent bg-gray-600 delay-75 duration-100 text-white text-sm font-bold rounded-2xl w-full py-3 mt-7 border-b-4 border border-b-white-600"
            on:click={() => goto('/access')}>
        Request access
    </button>
    <button class="mb-4 hover:bg-transparent bg-gray-700 delay-75 duration-100 text-white text-sm font-bold rounded-2xl w-full py-3 mt-7 border-b-4 border border-b-white-600"
            on:click={() => goto('/code')}>
        Get code
    </button>
</Card>

