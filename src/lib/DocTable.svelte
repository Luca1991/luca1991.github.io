<script lang="ts">
	import type { Doc } from "../types/Doc";

    export let documents: Doc[];
</script>
{#if documents != null && documents.length > 0}
    <div class="overflow-x-auto my-2.5 py-8">
        <table class="table table-sm">
            <thead>
                <tr class="text-center uppercase text-sm bg-base-200">
                    <th>Title</th>
                    <th>Download</th>
                </tr>
            </thead>
            <tbody>
                {#each documents as document }
                    <tr class="hover:bg-base-300 bg-base-100 text-sm">
                        <td class="min-w-56 text-center">
                            {document.title}
                        </td>
                        <td>
                            <div class="flex justify-center">
                                {#each document.download as dl }
                                <div class="px-4">
                                    <a href="{dl.url}" target="_blank"> 
                                        <img src="/resources/icons/flags/{dl.language}.png" alt="{dl.language}" /> 
                                    </a>
                                </div>
                                {/each}
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{/if}