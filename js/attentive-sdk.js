$(document).ready(function () {
  // Page loaded - get localstorage items
  console.log('PAGE LOADED')
  console.log('GET LOCAL STORAGE')

  let city = localStorage.getItem('city') || ''
  console.log('get city:', city)

  let checkIn = localStorage.getItem('checkIn') || ''
  console.log('get checkIn:', checkIn)

  let checkOut = localStorage.getItem('checkOut') || ''
  console.log('get checkOut:', checkOut)

  let adults = localStorage.getItem('adults') || ''
  console.log('get adults:', adults)

  let children = localStorage.getItem('children') || ''
  console.log('get children:', children)

  // Clicked submit button - set localstorage items
  $('#submit').click(function () {
    console.log('#SUBMIT CLICKED')
    console.log('SET LOCAL STORAGE')

    city = document.querySelector('#city')?.value
    console.log('set city:', city)
    if (city) localStorage.setItem('city', city)

    checkIn = document.querySelector('#checkIn')?.value
    console.log('set checkIn:', checkIn)
    if (checkIn) localStorage.setItem('checkIn', checkIn)

    checkOut = document.querySelector('#checkOut')?.value
    console.log('set checkOut:', checkOut)
    if (checkOut) localStorage.setItem('checkOut', checkOut)

    adults = document.querySelector('#adults')?.value
    console.log('set adults:', adults)
    if (adults) localStorage.setItem('adults', adults)

    children = document.querySelector('#children')?.value
    console.log('set children:', children)
    if (children) localStorage.setItem('children', children)
  })
})
