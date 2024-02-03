<script>
    import "../app.pcss";
    import { ModeWatcher } from "mode-watcher";
    import Navbar from "$lib/components/navbar.svelte";

</script>


<ModeWatcher />

<div class="container">
    <Navbar></Navbar>

    <slot />
</div>