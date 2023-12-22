<script lang="ts">
    import ParTitle from "$lib/ParTitle.svelte";
    import CardItem from "$lib/CardItem.svelte";
	import AboutBox from "$lib/AboutBox.svelte";
    import papersIndex from "$lib/data/papers/papers.index.json"
	import DocTable from "$lib/DocTable.svelte";
    import type { Doc } from "../types/Doc";

    let currentDocuments: Doc[];
</script>


<AboutBox title="Hi and welcome to my website" 
text="Well, if you are here you probably already know who I am, but in case you don't:
I'm Luca, a software developer mainly interested in reverse engineering, cyber security and low level stuff.
From time to time I publish some research papers about malware analysis, unpacking etc. and I have a 
YouTube channel where I talk about reverse engineering (in italian).
If you want to know more about what I do, you can tave a look at my Linkedin profile or Github page.
This website serve to keep track of my projects and to host my technical papers.
"
avatarUrl="https://avatars2.githubusercontent.com/u/3731220" 
githubRef="Luca1991" 
youtubeRef="@LucaDAmico91" 
linkedinRef="luca91"
twitterRef="LucaDAmico91"
emailAddr="contact@lucadamico.dev" />


<ParTitle parTitle="Technical Papers" />
<div class="flex place-content-center flex-wrap gap-x-2 gap-y-2 flex-col md:justify-evenly md:flex-row md:gap-y-auto">
   <CardItem cardTitle="Malware Analysis" 
    cardText="Technical papers about different malware I’ve reverse engineered and analyzed"
    cardImage="/resources/cards/papers/malware.png"
    cardBtnText="Open"
    onBtnClick={() => {
        currentDocuments = papersIndex.malware_analysis;
        document.getElementById("docs-table")?.scrollIntoView({
            behavior: 'smooth'
        });
     }} />

    <CardItem cardTitle="Unpacking" 
    cardText="Technical papers about some obscure and underground packers"
    cardImage="/resources/cards/papers/unpacking.png"
    cardBtnText="Open"
    onBtnClick={() => {
        currentDocuments = papersIndex.unpacking;
        document.getElementById("docs-table")?.scrollIntoView({
            behavior: 'smooth'
        });
     }} />

   <CardItem cardTitle="Old-Skool DRMs" 
    cardText="Technical papers I’ve written while reverse engineering very old DRMs that aren’t used anymore, just for learning purposes."
    cardImage="/resources/cards/papers/cracking.png"
    cardBtnText="Open"
    onBtnClick={() => {
        currentDocuments = papersIndex.drm;
        document.getElementById("docs-table")?.scrollIntoView({
            behavior: 'smooth'
        });
     }} />
</div>

<div class="flex place-content-center" id="docs-table">
    <div class="w-full md:w-2/3">
        <DocTable bind:documents={currentDocuments} />
    </div>
</div>

<ParTitle parTitle="Apps/Tools" />
<div class="flex place-content-center flex-wrap gap-x-2 gap-y-2 flex-col md:justify-evenly md:flex-row md:gap-y-auto">
    <CardItem cardTitle="NDSFactory" 
    cardText="Unpack & Repack Nintendo DS Roms (.nds)"
    cardImage="/resources/icons/github.png"
    cardBtnText="Open repo"
    onBtnClick={() => {
        window.open("https://github.com/Luca1991/NDSFactory", "_blank");
     }} />

    <CardItem cardTitle="MoRePhun" 
    cardText="Experimental MoPhun Emulator"
    cardImage="/resources/icons/github.png"
    cardBtnText="Open repo"
    onBtnClick={() => {
        window.open("https://github.com/Luca1991/MoRePhun", "_blank");
    }} />

    <CardItem cardTitle="Puzzle Bobble Grub2 Theme" 
    cardText="Puzzle Booble Theme for Grub2"
    cardImage="/resources/icons/github.png"
    cardBtnText="Open repo"
    onBtnClick={() => {
        window.open("https://github.com/Luca1991/Puzzle-Bobble-Grub2-Theme", "_blank");
    }} />
</div>

<ParTitle parTitle="Projects" />
<div class="flex place-content-center flex-wrap gap-x-2 gap-y-2 flex-col md:justify-evenly md:flex-row md:gap-y-auto">
    <CardItem cardTitle="ReverseIT" 
     cardText="Open source initiative with the aim of becoming the de facto space for reverse engineering and cybersecurity in Italy!"
     cardImage="/resources/cards/projects/reverseit.png"
     cardBtnText="Visit website"
     onBtnClick={() => {
        window.open("https://reverseit.space", "_blank");
     }} />
</div> 