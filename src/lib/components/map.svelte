<script lang="ts">
    import { Map, Marker } from '@beyonk/svelte-mapbox'
    import { mode } from "mode-watcher";
    import { controls } from '@beyonk/svelte-mapbox'
    import { onMount } from 'svelte'
    import { toast } from 'svelte-sonner';
    import * as Drawer from "$lib/components/ui/drawer";
	import { Button } from './ui/button';
    import { fetch } from '$lib/utils';

    import { fetchDist } from '$lib/wolfram.js'
    import { getCarbonOffset } from '$lib/carbon.js'

    const { GeolocateControl, NavigationControl, ScaleControl } = controls

    let darkMode = false
    let mapComponent: Map

    let marker = null
    let latitude = 0;
    let longitude = 0;

    let userLongitude = 0;
    let userLatitude = 0;

    let isOpen = false;


    

onMount(() => {
    

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            mapComponent.flyTo({center:[position.coords.longitude, position.coords.latitude ]})

            userLongitude = position.coords.longitude
            userLatitude = position.coords.latitude

            //https://transit.land/api/v2/rest/agencies?lon=-121.89496&lat=37.33939&&radius=1000&api_key=ZAdwd454Wg4Hd3rBJVaKfB5N5OEP4Fh7
            
        })}

    mapComponent.$on('click', (e) => {
        // check that the event.detail is {} and not a number
        if (typeof e.detail === 'number') return

        console.log(e.detail)
        longitude = e.detail.lng
        latitude = e.detail.lat

        calculateResults()
    })

    mapComponent.$on('touch', (e) => {
        // check that the event.detail is {} and not a number
        if (typeof e.detail === 'number') return

        console.log(e.detail)
        longitude = e.detail.lng
        latitude = e.detail.lat

        calculateResults()
    })

    mapComponent.$on('tap', (e) => {
        // check that the event.detail is {} and not a number
        if (typeof e.detail === 'number') return

        console.log(e.detail)
        longitude = e.detail.lng
        latitude = e.detail.lat

        calculateResults()
    })




    const calculateResults = async () => {
        toast.loading('Calculating CO₂ saved emmisions', {duration: 2000})

        

        /**
            let latitude = 0;
            let longitude = 0;

            let userLongitude = 0;
            let userLatitude = 0;

            => toast()

        */
        //fetch the carbon interface api using the wolfram alpha distance api to get coord dist
        // Function to calculate distance using Haversine formula
        function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
            const R = 6371; // Radius of Earth in kilometers

            // Convert latitude and longitude from degrees to radians
            const dLat = (lat2 - lat1) * (Math.PI / 180);
            const dLon = (lon2 - lon1) * (Math.PI / 180);

            // Haversine formula
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);

            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c;

            return distance;
        }


        let dist = calculateDistance(latitude, longitude, userLatitude, userLongitude)


        // Function to calculate emissions in grams
        function calculateEmissionsInGrams(distance: number, mileage: number) {
            const emissionFactorPounds = 22.4; // Emission factor for diesel vehicles in pounds of CO2 per gallon
            const poundsToGramsConversion = 453.592; // Conversion factor from pounds to grams

            // Convert emission factor to grams
            const emissionFactorGrams = emissionFactorPounds * poundsToGramsConversion;

            // Calculate emissions in grams
            const emissionsGrams = (distance / mileage) * emissionFactorGrams;

            return emissionsGrams;
        }

        // Example values
        const distanceTraveled = dist; // Use the distance calculated previously
        const fuelEfficiency = 20; // Assume average fuel efficiency of 20 miles per gallon

        // Calculate emissions in grams
        const emissionsGrams = calculateEmissionsInGrams(distanceTraveled, fuelEfficiency);

        const calculation = Math.floor(parseFloat(emissionsGrams.toFixed(3)) / 10)

        console.log(`Estimated emissions: ${Math.floor(parseFloat(emissionsGrams.toFixed(3)))} grams of CO2`);


        setTimeout(() => {
            toast(`Saved ${calculation}g in CO₂ emissions.`, {duration: 2000})
        }, 2000 + Math.floor(Math.random() * 1000))
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
  style="mapbox://styles/mapbox/dark-v10"
  bind:this={mapComponent} 
center={[-121.89496, 37.33939]} zoom={12}

>
<NavigationControl />
<Marker lat={latitude} lng={longitude}  />

<Marker lat={userLatitude} lng={userLongitude} color="rgb(0,0,255)" label="You" popup={false} />


<Marker lat={latitude} lng={longitude} />

</Map>
</div>

