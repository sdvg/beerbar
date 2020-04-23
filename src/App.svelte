<script>
  import { onMount } from 'svelte'
  import Beers from './Beers.svelte'
  import DepositChoice from './DepositChoice.svelte'
  import Summary from './Summary.svelte'

  let beers
  let deposit
  let paypalName
  let selection
  let returnsDeposit = false

  onMount(async () => {
    ({ beers, deposit, paypalName } = await (await fetch('beerData.json')).json())
    selection = beers.reduce((accumulator, currentValue) => ({
      ...accumulator,
      [currentValue.id]: 0,
    }), {})
  })
</script>

<main>
  {#if beers}
    <h1>🍺 What do you need?</h1>
    <Beers {beers} bind:selection />
    <DepositChoice bind:returnsDeposit />
    <Summary {beers} {deposit} {selection} {returnsDeposit} {paypalName} />
  {:else}
    <p>Loading...</p>
  {/if}
</main>

<style>

</style>
