<script lang="ts">
    import { accessRequest, page } from "../stores";
</script>

<div class="mt-8">
    <ul class="p-4 rounded">
        <li on:click={() => $page = 2} class="cursor-pointer">
            Reden: {$accessRequest.reason}
        </li>
        <li on:click={() => $page = 3} class="cursor-pointer">
            Datum: {$accessRequest.date}
        </li>
        <li on:click={() => $page = 4} class="cursor-pointer">
            Tijd: {$accessRequest.time.from + ' tot ' + $accessRequest.time.to}
        </li>
        <li on:click={() => $page = 5} class="cursor-pointer">
            Kenteken{$accessRequest.licences.length > 1 ? 's' : ''}:
            {#each $accessRequest.licences as licence}
                <li class="ml-4">{licence.plate} {licence.trailer ? '+ aanhanger' : ''}</li>
            {/each}
        </li>
    </ul>
</div>