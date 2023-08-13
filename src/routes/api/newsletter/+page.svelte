<script lang="ts">

async function subscribe(event:Event) {
    const form = event.target as HTMLFormElement
    const data = new FormData(form)

    await fetch('/api/newsletter', {
        body: data,
        method: 'POST'
    })    
}
</script>


<h1> Newsletter </h1>

<form on:submit|preventDefault={subscribe}>
    <input type="email" name="email">
    <button class="px-4 py-2 text-white bg-blue-400 rounded-md"> Subcribe </button>
</form>