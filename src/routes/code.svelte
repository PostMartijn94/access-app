<script lang="ts">
    import { accessRequests} from "../stores";
</script>

<div class="mt-8">
    <h1 class="flex text-3xl justify-center mb-2">Aanvragen</h1>
    {#each $accessRequests as ar}
        <ul class="border p-4 rounded mb-2">
            <ul class="p-4 rounded">
                <li class="cursor-pointer">
                    Reden: {ar.reason}
                </li>
                <li class="cursor-pointer">
                    Datum: {ar.date}
                </li>
                <li class="cursor-pointer">
                    Tijd: {ar.time.from + ' tot ' + ar.time.to}
                </li>
                <li class="cursor-pointer">
                    Kenteken{ar.licences.length > 1 ? 's' : ''}:
                    {#each ar.licences as licence}
                        <li class="ml-4">{licence.plate} {licence.trailer ? '+ aanhanger' : ''}</li>
                    {/each}
                </li>
            </ul>
        </ul>
    {/each}
</div>