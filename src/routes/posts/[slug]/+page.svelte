<script lang="ts">
	import type { PageData } from "./$types";


export let data: PageData

function formatDate(date: Date){
    return new Intl.DateTimeFormat('en', {
        dateStyle: 'full'
    }).format(date)
}

</script>

<hgroup class="px-5 py-5">
    <h1 class="font-bold text-3xl"> {data.post.title} </h1>
    <h2 class="italic text-sm"> {formatDate(data.post.createdAt)}</h2>
</hgroup>

<div class="content px-10">
    {@html data.post.content}
</div>