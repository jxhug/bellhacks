<script>
    import "../app.pcss";
    import { ModeWatcher } from "mode-watcher";
    import Navbar from "$lib/components/navbar.svelte";
    import { Toaster } from "$lib/components/ui/sonner";

</script>


<ModeWatcher />

<div>
    <Navbar></Navbar>
    <Toaster />

    <slot />

</div>