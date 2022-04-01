<card class="border-2 border-gray-300 rounded-2xl p-5 w-96">
    <p class="text-2xl font-bold text-center text-gray-300 mb-4">
        <slot name="title">
            Default title
        </slot>
    </p>

    <hr>

    <slot></slot>

    {#if $$slots.nav}
        <hr class="mt-4">

        <div class="relative py-4">
            <slot name="nav"></slot>
        </div>
    {/if}
</card>