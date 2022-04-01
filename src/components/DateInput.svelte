<script lang="ts">
    import { nl } from '../localize';
    import {accessRequest, showNext} from '../stores';
    import SveltyPicker from 'svelty-picker';
    import { config } from 'svelty-picker';
    import { fade } from "svelte/transition";

    $showNext = true

    // set new locale
    config.i18n = nl
    config.todayBtn = false;
</script>

<div class="flex my-8 justify-center" in:fade>
    <SveltyPicker
            mode="date"
            startDate={$accessRequest.date}
            format="dd/mm/yyyy"
            bind:value={$accessRequest.date}
            inputClasses="cursor-pointer bg-transparent text-center content-fit text-3xl"
            on:change={(e) => console.log(e.detail)}
    />
</div>