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

<div class="root">
  <p>
    <span class="total">
      Total: {formatPrice(total)}
    </span>
    {#if !returnsDeposit}
      <small class="deposit">(incl. {formatPrice(depositSum)} deposit)</small>
    {/if}
  </p>

  <button
    class="button"
    disabled="{total === 0}"
    on:click={redirectToPaypal}
  >
    Pay Up 🍻
  </button>
</div>

<style>
  .total {
    font-weight: bold;
    font-size: 22px;
  }

  .deposit {
    vertical-align: center;
    font-size: 16px;
  }

  .button {
    display: block;
    width: 100%;
    font-size: 22px;
    margin-top: 16px;
    padding: 8px;
    text-align: center;
    background: var(--color-1);
    border: none;
    color: var(--color-2);
  }

  .button:disabled {
    opacity: .5;
  }
</style>
