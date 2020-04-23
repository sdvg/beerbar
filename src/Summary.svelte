<script>
  import formatPrice from './formatPrice'

  export let beers, selection, returnsDeposit, deposit, paypalName

  let beerPriceSum
  let numberOfBeers
  let depositSum

  $: beerPriceSum = Object.keys(selection).reduce((accumulator, beerId) => {
    const count = selection[beerId]
    const beer = beers.find(searchBeer => searchBeer.id === Number(beerId))

    return accumulator + count * beer.price
  }, 0)
  $: numberOfBeers = Object.values(selection).reduce((accumulator, count) => accumulator + count, 0)
  $: depositSum = returnsDeposit ? 0 : numberOfBeers * deposit
  $: total = beerPriceSum + depositSum

  const redirectToPaypal = () => {
    location.replace(`https://www.paypal.me/${paypalName}/${total}eur`)
  }
</script>

<p>
  Total: {formatPrice(total)}
  {#if !returnsDeposit}
    <small>(incl. {formatPrice(depositSum)} deposit)</small>
  {/if}

  <button
    disabled="{total === 0}"
    on:click={redirectToPaypal}
  >
    Pay Up 🍻
  </button>
</p>
