<script lang="ts">
    export let cardTitle = "";
    export let cardText = "";
    export let cardImage = "";
    export let cardBtnText= "";
    export let onBtnClick = () => {};
    const click = () => {
      onBtnClick();
    }
</script>

<div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="{cardImage}" alt="{cardTitle}" /></figure>
  <div class="card-body">
    <h2 class="card-title">{cardTitle}</h2>
    <p>{cardText}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary" on:click={click}>{cardBtnText}</button>
    </div>
  </div>
</div>