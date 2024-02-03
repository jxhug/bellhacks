<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { Sun, Moon } from "lucide-svelte";
  import { setMode, resetMode } from "mode-watcher";
</script>
<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Button builders={[builder]} variant="ghost" size="icon">
      <Sun size={20}
        class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon size={20}
        class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span class="sr-only">Toggle theme</span>
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
    <DropdownMenu.Item on:click={() => setMode("light")}
      >Light</DropdownMenu.Item
    >
    <DropdownMenu.Item on:click={() => setMode("dark")}>Dark</DropdownMenu.Item>
    <DropdownMenu.Item on:click={() => resetMode()}>System</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>