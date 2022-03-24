<script lang="ts">
    import Card from "../components/layouts/Card.svelte";
    import { goto } from "$app/navigation";
</script>

<Card>
    <div slot="title">Access App</div>
    <button class="hover:bg-green-400 bg-green-500 delay-75 duration-100 text-white text-sm font-bold rounded-2xl w-full py-3 mt-7 border-b-4 border-b-green-600"
            on:click={() => goto('/form')}>Request access</button>
    <button class="hover:bg-sky-400 bg-sky-500 delay-75 duration-100 text-white text-sm font-bold rounded-2xl w-full py-3 mt-3 border-b-4 border-b-sky-600">Get code</button>
</Card>

