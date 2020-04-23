export default value => value.toLocaleString('de-de', {
  style: 'currency',
  currency: 'EUR',
  currencyDisplay: 'symbol',
  minimumFractionDigits: 2
})
