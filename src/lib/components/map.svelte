<script lang="ts">
  import { Map, Marker } from '@beyonk/svelte-mapbox'
  import { mode } from "mode-watcher";


let darkMode = false

  let mapComponent: Map

    function onReady() {
    mapComponent.flyTo({center:[40.7127281,-74.0060152]}) 
	}

//
    
    // make a reactive varible that checks the mode varible with the mode-watcher package and sets the darkMode varible to true if the mode is dark
    // this is used to change the map style to a dark mode map style

    // now change the map style to a dark mode map style if the darkMode varible is true

    
</script>

<div class="h-screen w-full">
<Map accessToken="pk.eyJ1IjoiY2hpbGRxdWFjayIsImEiOiJjbHM2a2s2dXQwdmVzMmxxaHN0dXEzaGRsIn0.RVy7AMo3FChS0lsSkJcyPg"
	style="mapbox://styles/mapbox/outdoors-v11"
  bind:this={mapComponent} 
  on:ready={onReady}

>
	 <Marker lat=-74.0060152 lng=40.7127281 label="NYC" />
</Map>
</div>

