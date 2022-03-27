<script lang="ts">
    import Card from '../components/layouts/Card.svelte';
    import AccessForm from "../components/AccessForm.svelte";
    import { goto } from "$app/navigation";
    import { page, back, next, showNext, accessRequests, accessRequest } from "../stores";
    import { onMount } from "svelte";

    onMount(() => $page = 1)

    $: nextButtonText = $page === 1 ? 'Accept' : ($page === 6 ? 'Finish' : 'Next')

    $: title = ['Terms & Conditions','Reden', 'Datum', 'Tijd', 'Kenteken', 'Controleer uw gegevens'][$page - 1]
    $: if ($page === 0) goto('/')

    $: if ($page > 6) {
        $accessRequests.push($accessRequest)
        $page = 1
        goto('/')
    }
</script>

<Card>
    <div slot="title">{title}</div>

    <AccessForm />

    <div slot="nav">
        <button class="absolute left-0 mx-8 hover:text-white cursor-pointer" on:click={back}>Back</button>
        {#if $showNext}
            <button class="absolute right-0 mx-8 hover:text-white cursor-pointer" on:click={next}>{nextButtonText}</button>
        {/if}
    </div>
</Card>
