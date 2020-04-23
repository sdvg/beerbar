<script>
  import IconPlus from './IconPlus.svelte'
  import IconMinus from './IconMinus.svelte'

  export let value = 0

  const increase = () => value += 1
  const decrease = () => value = Math.max(value - 1, 0)
</script>

<div class="root">
  <button
    on:click={decrease}
    class="button"
  >
    <IconMinus size="16" />
    <span class="visually-hidden">Decrease</span>
  </button>

  <span class="value">{value}</span>

  <button
    on:click={increase}
    class="button"
  >
    <IconPlus size="16" />
    <span class="visually-hidden">Increase</span>
  </button>
</div>

<style>
  .root {
    display: flex;
    align-items: stretch;
    background: var(--color-2);
    border-radius: 3px
  }

  .value {
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-left: 1px solid var(--color-1);
    border-right: 1px solid var(--color-1);
  }

  .button {
    padding: 8px 16px;
    background: transparent;
    border: none;
    touch-action: manipulation;
  }
</style>
