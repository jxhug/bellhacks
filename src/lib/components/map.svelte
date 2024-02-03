<script lang="ts">
    import { Map, Marker } from '@beyonk/svelte-mapbox'
    import { mode } from "mode-watcher";
    import { controls } from '@beyonk/svelte-mapbox'
    import { onMount } from 'svelte'

    const { GeolocateControl, NavigationControl, ScaleControl } = controls


    let darkMode = false
    let mapComponent: Map

onMount(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            mapComponent.flyTo({center:[position.coords.longitude, position.coords.latitude ]})

            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places-permanent/${position.coords.longitude},${position.coords.latitude}.json?limit=2&access_token=pk.eyJ1IjoiY2hpbGRxdWFjayIsImEiOiJjbHM2a2s2dXQwdmVzMmxxaHN0dXEzaGRsIn0.RVy7AMo3FChS0lsSkJcyPg`).then(response => response.json()).then(data => {
                console.log(data)

                //ZAdwd454Wg4Hd3rBJVaKfB5N5OEP4Fh7

                //https://transit.land/api/v2/rest/stops?lon=-121.89496&lat=37.33939&&radius=1000&api_key=ZAdwd454Wg4Hd3rBJVaKfB5N5OEP4Fh7
            })

        })
    }
})

//

// make a reactive varible that checks the mode varible with the mode-watcher package and sets the darkMode varible to true if the mode is dark
// this is used to change the map style to a dark mode map style

// now change the map style to a dark mode map style if the darkMode varible is true

//[-121.89496, 37.33939]

/**
mapbox://styles/mapbox/navigation-day-v1
mapbox://styles/mapbox/navigation-night-v1
*/

</script>

<div class="h-screen w-full">
<Map accessToken="pk.eyJ1IjoiY2hpbGRxdWFjayIsImEiOiJjbHM2a2s2dXQwdmVzMmxxaHN0dXEzaGRsIn0.RVy7AMo3FChS0lsSkJcyPg"
  style="mapbox://styles/mapbox/navigation-night-v1"
  bind:this={mapComponent} 
center={[-121.89496, 37.33939]} zoom={12}

>
   <Marker lat=-74.0060152 lng=40.7127281 label="NYC" />
  <GeolocateControl position="bottom-right" trackUserLocation={true} />
<NavigationControl />
<ScaleControl />
x
</Map>
</div>

