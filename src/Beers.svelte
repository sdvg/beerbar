<script>
  import StepCounter from './StepCounter.svelte'
  import formatPrice from './formatPrice'

  export let beers
  export let selection
</script>

<ul>
  {#each beers as {id, name, price}, beerIndex (id)}
  <li>
    <StepCounter bind:value={selection[id]} />
    {name}
    ({formatPrice(price)})
  </li>
  {/each}
</ul>
