<script lang="ts">
    import { accessRequest } from '../stores';
    import SveltyPicker from 'svelty-picker';
    import { fade } from "svelte/transition";

</script>

<div class="flex my-8 justify-center" in:fade>
    <SveltyPicker
            mode="time"
            format="hh:ii"
            bind:value={$accessRequest.time.from}
            inputClasses="cursor-pointer bg-transparent w-20 content-fit text-3xl"
    />
    <div class="self-center mx-4"> - </div>
    <SveltyPicker
            mode="time"
            format="hh:ii"
            bind:value={$accessRequest.time.to}
            inputClasses="cursor-pointer bg-transparent w-20 content-fit text-3xl"
    />
</div>