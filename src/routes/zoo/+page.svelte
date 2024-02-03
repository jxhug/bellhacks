<script lang="ts">
	import { Button } from "$lib/components/ui/button";
    let count = 0;
</script>

<main class="h-screen w-screen flex justify-center">
    
    <div>
        <h1 class="text-3xl font-bold underline">
            Hello world - count is {count}
        </h1>
        <Button on:click={() => {
            count += 1;
        }} class="w-50">Click me</Button>
    </div>
    
</main>