<script>
  export let returnsDeposit
</script>

<label class="root">
  <input type="checkbox" bind:checked={returnsDeposit}>
  I will return the bottles (optional)
</label>

<style>
  .root {
    display: flex;
    align-items: center;
  }

  input {
    width: 30px;
    height: 30px;
    margin-right: 8px;
  }
</style>
