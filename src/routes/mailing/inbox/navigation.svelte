<script lang="ts">
    
    // passed value
    export let skip:number;
    export let limit:number;
    export let total:number;
    export let currentUrl:URL;    

    // default value
    const pointerEnable = "cursor-pointer";
    const pointerDisable = "cursor-not-allowed";
        
    let prevUrlClass = pointerEnable;
    let nextUrlClass = pointerEnable;

    $: prevUrl = currentUrl.pathname + "?limit=" + limit + "&skip=" + (skip-limit)
    $: nextUrl = currentUrl.pathname + "?limit=" + limit + "&skip=" + (skip+limit)

    $: startIndex = skip;
    $: endIndex = skip + limit;
    
    if (skip == 0 ) {
        startIndex = 1
    }

    function checkNavUrl(){
        console.log("----------------------------");        
        console.log("before:",startIndex, endIndex, skip);                        
        console.log(prevUrl, prevUrlClass);
        console.log(nextUrl, nextUrlClass);
                
        if (startIndex <= 1) {
            prevUrl = "#";
            prevUrlClass = pointerDisable;            
        } else if (endIndex >= total) {
            nextUrl = "#";
            nextUrlClass =  pointerDisable;
        } else {
            prevUrlClass =  pointerEnable;
            nextUrlClass =  pointerEnable;
        }
        console.log("----------------------------");        
        console.log("after",startIndex, endIndex, skip);
        console.log(prevUrl, prevUrlClass);            
        console.log(nextUrl, nextUrlClass);        
    }    

</script>
<div class="items-center hidden space-x-0 space-y-3 sm:flex sm:space-y-0 sm:space-x-3">
    <!-- <a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
    </a> -->
    <a href="{prevUrl}" on:click={checkNavUrl} class="{prevUrlClass} inline-flex justify-center p-1 text-gray-500 rounded hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
    </a>
    <a href="{nextUrl}" on:click={checkNavUrl} class="{nextUrlClass} inline-flex justify-center p-1 text-gray-500 rounded hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
    </a>
    <span class="font-normal text-gray-500 sm:text-xs md:text-sm dark:text-gray-400">Show <span class="font-semibold text-gray-900 dark:text-white">{startIndex}-{endIndex}</span> of <span class="font-semibold text-gray-900 dark:text-white">{total}</span></span>
</div>