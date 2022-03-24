<script lang="ts">

</script>

<main class="flex items-center justify-center">
    <slot></slot>
</main>

<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    body {
      @apply bg-gray-800 text-gray-300;
    }

    main {
        max-width: 768px;
        margin: 100px auto
    }
</style>