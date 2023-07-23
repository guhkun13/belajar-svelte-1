<script lang="ts">	
    import { page } from '$app/stores';    
    import type { PageServerData } from "./$types";
	import Compose from './compose.svelte';
	import Navigation from './navigation.svelte';
	import Footer from './footer.svelte';
    
    console.log("page here");
    
    let currentUrl = $page.url;
    console.log(currentUrl);
    
    export let data : PageServerData;    
    let skip : number;
    let limit : number;
    
    $: users = data.users;    
    $: total = data.total;
    $: skip = data.skip;
    $: limit = data.limit;

    console.log(total, skip, limit);            
    console.log(currentUrl.pathname);
    
    function readEmail() {
        location.href = "/mailing/read"
    }
    
    $: idx = 1;
    function addCounter(){
        idx = idx + 1;
        console.log("idx", idx);        
    }
</script>

<p>
    <button on:click={addCounter} class="p-4 bg-white"> CLICK ME : {idx} </button>
</p>
<div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
    <Compose/>
    <Navigation {currentUrl} {limit} {skip} {total} />
</div>
<div class="flex flex-col">
    <div class="overflow-x-auto">
        <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden shadow">
                <table class="min-w-full divide-y divide-gray-200 table-fixed">                        
                    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">                        
                        <!-- loop data messages -->
                        {#each users as item }
                        <tr class="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700" on:click={readEmail}>
                            <td class="w-4 p-4">
                                <div class="inline-flex items-center space-x-4">
                                    <div>
                                        <input id="checkbox-{item.id}" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" on:click|stopPropagation>
                                        <label for="checkbox-{item.id}" class="sr-only">checkbox</label>
                                    </div>
                                    <svg on:click|stopPropagation class="w-6 h-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                                </div>
                            </td>
                            <td class="flex items-center p-4 space-x-4 whitespace-nowrap">
                                <!-- <img class="w-6 h-6 rounded-full" src="/images/users/{message.avatar}" alt=""> -->
                                <img class="w-6 h-6 rounded-full" src="{item.image}" alt="">
                                <div class="text-base  font-normal text-gray-700 dark:text-gray-400 ">{item.firstName} {item.lastName}</div>
                            </td>
                            <td class="p-4 text-base  font-normal text-gray-700 dark:text-gray-400  max-w-sm xl:max-w-screen-md 2xl:max-w-screen-lg truncate overflow-hidden">{item.address.address}</td>
                            <td class="p-4 whitespace-nowrap text-base  font-normal text-gray-700 dark:text-gray-400 ">{item.birthDate}</td>
                        </tr>
                        <!-- Unread -->
                        {/each}
                        <!-- end of looping messages -->                       
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<Footer />