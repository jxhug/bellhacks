<script lang="ts">
	import { Button } from "$lib/components/ui/button";

    let about: HTMLElement;
</script>


<div class="flex h-screen w-screen">
    <section class="bg-center bg-hero-image bg-no-repeat bg-cover bg-blend-overlay bg-slate-200 dark:bg-[#171a17] w-screen">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 h-[90vh]">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black dark:text-white md:text-5xl lg:text-6xl">EcoNavigator</h1>
            <p class="mb-8 text-lg font-normal text-slate   -800 dark:text-gray-300 lg:text-xl sm:px-16 lg:px-48">EcoNavigator is a mapping service designed to help the Earth as you travel, by finding the best and most efficent routes, while reducing CO₂ emmisions.</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="/routes" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900">
                    Help the Earth
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                
            </div>
        </div>

        <div class="w-screen flex justify-center items-center z-10">
            <button class="bg-none items-center text-center flex flex-col fill-black text-black dark:fill-white dark:text-white" on:click={() => {about.scrollIntoView({ behavior: "smooth"})}}>
                see more
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24"><path d="m12 16.175l3.9-3.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062q-.2 0-.375-.063T11.3 18.3l-4.6-4.6q-.275-.275-.288-.687T6.7 12.3q.275-.275.7-.275t.7.275l3.9 3.875Zm0-6L15.9 6.3q.275-.275.688-.287t.712.287q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062q-.2 0-.375-.062T11.3 12.3L6.7 7.7q-.275-.275-.288-.688T6.7 6.3q.275-.275.7-.275t.7.275l3.9 3.875Z"/></svg>
            </button>
        </div>
    </section>
</div>

<section class="bg-white dark:bg-gray-900" bind:this={about}>
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Mission</h2>
            <p class="mb-4">EcoNavigator's mission is to provide eco-friendly navigation services that reduce carbon emissions and protect the planet. By utilizing advanced routing algorithms and up-to-date environmental data, we aim to guide travelers along the most fuel-efficient routes while avoiding high-congestion areas. Our vision is a future where transportation has minimal impact on the environment. We strive to promote sustainability and ecologically-conscious choices by making green travel effortless.</p>
            <p>Through partnerships, innovation and a commitment to our core values, EcoNavigator helps travelers tread more lightly on the Earth.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://imagedelivery.net/jdWMhVH-CbfKe5Pbmw-19Q/3f8c9810-2d09-4fb5-ffcd-6d4b4a470000/public" alt="office content 1">
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://imagedelivery.net/jdWMhVH-CbfKe5Pbmw-19Q/dc0bf79f-80af-4f84-fb8c-9a8b59fba900/public" alt="office content 2">
        </div>
    </div>
</section>

<div class="bg-white dark:bg-gray-900 pb-16">
    <div class="pb-1">
        <div class="relative">
            <div class="absolute inset-0 h-1/2"></div>
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-4xl mx-auto">
                    <dl class="rounded-lg bg-white dark:bg-gray-800 bg-opacity-25 shadow-lg dark:shadow-xl sm:grid sm:grid-cols-3">
                        <div class="flex flex-col border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-r">
                            <dt class="order-2 mt-2 text-lg leading-6 font-light text-gray-500 dark:text-gray-400">
                                metric tonnes of CO₂ produced each year by transport
                            </dt>
                            <dd class="order-1 text-5xl font-extrabold text-gray-700 dark:text-white number-animation">7B+</dd>
                        </div>
                        <div
                            class="flex flex-col border-t border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                            <dt class="order-2 mt-2 text-lg leading-6 font-light text-gray-500 dark:text-gray-400">
                                of transport CO₂ emissions attributed to motor vehicles
                            </dt>
                            <dd class="order-1 text-5xl font-extrabold text-gray-700 dark:text-white">83%</dd>
                        </div>
                        <div class="flex flex-col border-t border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l">
                            <dt class="order-2 mt-2 text-lg leading-6 font-lights text-gray-500 dark:text-gray-400">
                                of CO₂ emissions reduced by taking public transit
                            </dt>
                            <dd class="order-1 text-5xl font-extrabold text-gray-700 dark:text-white">45%</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</div>


<footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
        <div class="flex flex-row gap-x-2 justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <img src="https://imagedelivery.net/jdWMhVH-CbfKe5Pbmw-19Q/95b40fa8-16e5-4edf-c117-210140458600/public" class="w-9 h-9" alt="">
            EcoNavigator    
        </div>
        <p class="my-6 text-gray-500 dark:text-gray-400">The easiest way to reduce carbon emissions through eco-friendly transit.</p>
        <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Home</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Routes</a>
            </li>
        </ul>
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 EcoNavigator. All Rights Reserved.</span>
    </div>
  </footer>
