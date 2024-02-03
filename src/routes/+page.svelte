<script lang="ts">
	import { Button } from "$lib/components/ui/button";

    let count = 0;
</script>

<main>
    <h1 class="text-3xl font-bold underline">
        Hello world - count is {count}
    </h1>
    <Button on:click={() => {
        count += 1;
    }}>Click me</Button>
</main>