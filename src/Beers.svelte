<script>
  import StepCounter from './StepCounter.svelte'
  import formatPrice from './formatPrice'

  export let beers
  export let selection
</script>

<ul>
  {#each beers as {id, name, price}, beerIndex (id)}
  <li class="beer">
    <StepCounter bind:value={selection[id]} />
    <div class="name">{name}</div>
    ({formatPrice(price)})
  </li>
  {/each}
</ul>

<style>
  .beer {
    display: flex;
    align-items: center;
  }

  .beer:not(:first-child) {
    margin-top: 16px;
  }

  .name {
    font-weight: bold;
    margin: 0 4px 0 16px;
  }
</style>
