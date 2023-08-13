<script lang="ts">
	import type { LayoutData } from "./$types";


export let data: LayoutData

</script>

<div class="layout ml-5">
    <aside>
        <nav>
            <h4 class="text-xl font-bold"> Posts </h4>
            <ul>
                {#each data.posts as {slug, title} }
                    <li class="py-2">
                        <a href="/posts/{slug}"> {title }</a>
                    </li>
                {/each}
            </ul>
        </nav>
    </aside>

    <main>
        <slot/>
    </main>
</div>

<style>
    .layout {
        display: grid;
        grid-template-columns: 200px minmax(auto, 60ch);
        gap: 4rem;
        margin-top: 2rem;;
    }
</style>