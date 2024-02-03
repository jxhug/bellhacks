<script lang="ts">
	import { Button } from "$lib/components/ui/button";
    let count = 0;
</script>

<div class="flex h-screen w-screen">
    <section class="bg-center bg-hero-image bg-no-repeat bg-cover bg-blend-overlay bg-slate-200 dark:bg-[#171a17] h-screen w-screen">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black dark:text-white md:text-5xl lg:text-6xl">EcoNavigator</h1>
            <p class="mb-8 text-lg font-normal text-slate-800 dark:text-gray-300 lg:text-xl sm:px-16 lg:px-48">EcoNavigator is a mapping service designed to help the Earth as you travel, by finding the best and most efficent routes, while reducing CO2 emmisions.</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900">
                    Help the Earth
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                
            </div>
        </div>
    </section>

</div>
