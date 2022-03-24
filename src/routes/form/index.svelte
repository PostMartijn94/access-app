<script lang="ts">
    import Card from '../../components/layouts/Card.svelte';
    import AccessForm from "../../components/AccessForm.svelte";
    import { goto } from "$app/navigation";
    import { page, back, next } from "../../stores";

    $: title = ['Reden', 'Datum', 'Tijd', 'Kenteken'][$page -1]
    $: if ($page === 0) goto('/')
    $: if ($page === 5) {
        // save access request
        $page = 1
        goto('/')
    }
</script>

<Card>
    <div slot="title">{title}</div>

    <AccessForm />

    <div slot="button-bar">
        <button class="mx-8" on:click={back}>Back</button>
        {#if ($page <= 4)}
            <button class="mx-8" on:click={next}>{$page === 4 ? 'Finish' : 'Next'}</button>
        {/if}
    </div>
</Card>
