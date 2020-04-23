<script>
  export let value = 0

  const increase = () => value += 1
  const decrease = () => value = Math.max(value - 1, 0)
</script>

<div>
  <button on:click={decrease}>-</button>
  {value}
  <button on:click={increase}>+</button>
</div>
