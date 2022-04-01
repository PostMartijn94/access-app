<script lang="ts">
    import { accessRequests } from '../stores';

    const deleteRequest = (id) =>  $accessRequests = $accessRequests.filter((ar) => ar.id !== id)
</script>

<div class="flex-col justify-center border rounded-xl pt-4 py-2">
    <h1 class="flex justify-center text-4xl">Access Requests</h1>
    <div class="flex flex-col">
        <div class="w-full">
            <div class="">
                <!-- <table> -->
                <table id="dataTable" class="p-4">
                    <thead class="border-b">
                    <tr>
                        <th class="p-8 text-xs">
                            Datum
                        </th>
                        <th class="p-8 text-xs">
                            Tijd
                        </th>
                        <th class="p-8 text-xs">
                            Kenteken(s)
                        </th>
                        <th class="p-8 text-xs">
                            Aanhanger
                        </th>
                        <th class="px-6 py-2 text-xs">
                            Acties
                        </th>
                    </tr>
                    </thead>
                    <tbody class="bg-white">
                    {#each $accessRequests as rq (rq.id)}
                    <tr class="whitespace-nowrap bg-gray-800">
                        <td class="px-6 py-4 text-center">
                            <div class="text-sm">
                                {rq.date}
                            </div>
                        </td>
                        <td class="px-6 py-4 text-center">
                            <div class="text-sm">
                                {rq.time.from} - {rq.time.to}
                            </div>
                        </td>
                        <td class="px-6 py-4 text-sm text-center">
                            {#each rq.licences as licence, i}
                                {licence.plate}{rq.licences.length > i + 1 ? ', ' : ''}
                            {/each}
                        </td>
                        <td class="px-6 py-4 text-center">
                            <div class="text-sm">
                                {rq.licences.some((l) => l.trailer) ? 'Ja' : 'Nee'}
                            </div>
                        </td>
                        <td class="px-6 py-4 text-center">
                            <button class="px-4 py-1 text-sm bg-red-600 rounded" on:click={() => deleteRequest(rq.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>