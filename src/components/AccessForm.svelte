<script lang="ts">
    import { page, reasonOptions, reason, date, time } from '../stores';
    import SveltyPicker from 'svelty-picker';
    import { config } from 'svelty-picker';
    import { nl } from '../localize'

    // set new locale
    config.i18n = nl
    config.todayBtn = false;
</script>

<div>
    {#if $page === 1}
        <div class="flex flex-col">
            {#each $reasonOptions as option, i (i)}
                <button on:click={() => $reason = option}
                        class:active={$reason === option}
                        class="bg-transparent text-white border-r border-l hover:bg-white hover:text-gray-800 delay-75 duration-100 text-white font-bold rounded-2xl w-full py-3 mt-3 w-auto"
                >
                    {option}
                </button>
            {/each}
        </div>
    {:else if $page === 2}
        <div class="flex justify-center my-8">
            <SveltyPicker
                    mode="date"
                    startDate={$date}
                    format="dd-MM-yyyy"
                    bind:value={$date}
                    inputClasses="cursor-pointer bg-transparent text-center content-fit text-3xl"
            />
        </div>
    {:else if $page === 3}
        <div class="flex justify-center my-8">
            <SveltyPicker
                    mode="time"
                    format="hh:ii"
                    bind:value={$time.from}
                    inputClasses="cursor-pointer bg-transparent w-20 content-fit text-3xl"
            />
            <div class="self-center mx-4"> - </div>
            <SveltyPicker
                    mode="time"
                    format="hh:ii"
                    bind:value={$time.to}
                    inputClasses="cursor-pointer bg-transparent w-20 content-fit text-3xl"
            />
        </div>
    {:else if $page === 4}
        <div>Licence form</div>
    {/if}
</div>

<style>
    .active {
        @apply text-gray-800 bg-white;
    }
</style>