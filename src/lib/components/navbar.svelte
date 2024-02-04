
<script lang="ts">
    import * as Menubar from "$lib/components/ui/menubar";
    import { Button } from "$lib/components/ui/button"; 
    import { goto } from "$app/navigation";
    import DarkModeToggle from "$lib/components/darkModeToggle.svelte"
    import { Home, Navigation, Info } from "lucide-svelte"

    let isHovered = false;
</script>

<div class="mt-5 w-fit drop-shadow-lg z-10 fixed mx-5">
<Menubar.Root class="flex justify-between">
    <div class="flex flex-row">
        <Menubar.Menu>
            <Menubar.Item>
                <div class="flex-row flex space-x-2 pl-2 pr-2">
                    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                    <img src="https://imagedelivery.net/jdWMhVH-CbfKe5Pbmw-19Q/95b40fa8-16e5-4edf-c117-210140458600/public" class="w-6 h-6" class:animate-spin={isHovered} alt="" on:mouseover={() => {
                        isHovered = true
                        setTimeout(() => {
                            isHovered = false
                        }, 1000)
                    }}>
                </div>
            </Menubar.Item>
        </Menubar.Menu>
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
           
        <!-- <Menubar.Menu>
            <Menubar.Item on:click={() => {
                console.log("About")
            }}>
            <!-- Icon here for ""-->
            <!-- <Button variant="ghost" on:click={() => {
                goto("/co2")
          }}>
                <div class="flex-row flex space-x-2">
                <Info size={20}/>
                <p> About</p> 
                <div>
                </Button>
            </Menubar.Item> 
            </Menubar.Menu>  -->
          
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