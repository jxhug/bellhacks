
<script lang="ts">
    import * as Menubar from "$lib/components/ui/menubar";
    import { Button } from "$lib/components/ui/button"; 
    import { goto } from "$app/navigation";
    import DarkModeToggle from "$lib/components/darkModeToggle.svelte"
    let bookmarks = false;
    let fullUrls = true;
    const profileRadioValue = "benoit";
    import { Home, Navigation, Info, PawPrint } from "lucide-svelte"

</script>

<div class="mt-5 w-fit drop-shadow-lg z-10 fixed mx-5">
<Menubar.Root class="flex justify-between">
    <div class="flex flex-row">
        <Menubar.Menu>
            <Menubar.Item on:click={() => {
                console.log("Home")
            }}>
        <!-- Icon here for "Home"-->
                <Button variant="ghost"on:click={() => {
                  goto("/")
                }}>
                    <div class="flex-row flex space-x-2">
                        <Home size={20}/>
                        <p>Home</p>
                    </div>
                </Button>
            </Menubar.Item>
        </Menubar.Menu>
           
        <Menubar.Menu>
            <Menubar.Item on:click={() => {
                console.log("About")
            }}>
            <!-- Icon here for ""-->
            <Button variant="ghost" on:click={() => {
                goto("/co2")
          }}>
                <div class="flex-row flex space-x-2">
                <Info size={20}/>
                <p> About</p> 
                <div>
                </Button>
            </Menubar.Item> 
            </Menubar.Menu>
          
        <Menubar.Menu>
            <Menubar.Item on:click={() => {
                console.log("Routes")
            }}> 
            <!-- Icon here for "Routes"-->
              <Button variant="ghost" on:click={() => {
                    goto("/routes")
              }}>
                <div class="flex-row flex space-x-2">
                    <Navigation size={20}/>
                    <p>Routes</p> 
                </div>
                
              </Button>
            </Menubar.Item>
        </Menubar.Menu>

        <Menubar.Menu>            <Menubar.Item on:click={() => {
                console.log("Zoo")
                goto("/zoo")
            }}>
            <!-- Icon here for ""-->
                <a href="/zoo">
                <Button variant="ghost">
                <div class="flex-row flex space-x-2">
                <PawPrint size={20} />
                <p> Zoo</p> 
                <div>
                </Button>
                </a>
            </Menubar.Item> 
            </Menubar.Menu>
    </div>

<Menubar.Menu>
    <Menubar.Item>

    </Menubar.Item>
</Menubar.Menu> 


 <!-- -->
<Menubar.Menu>
    <div>
    <!-- <Menubar.Item> -->
        <DarkModeToggle/>
    <!-- </Menubar.Item> -->
    </div>
</Menubar.Menu> 



</Menubar.Root>
</div>