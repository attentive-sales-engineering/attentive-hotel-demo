$(document).ready(function () {
  // Page loaded - get localstorage items
  console.log('PAGE LOADED')
  console.log('GET LOCAL STORAGE')

  let city = localStorage.getItem('city') || ''
  console.log('get city:', city)

  let checkin = localStorage.getItem('checkin') || ''
  console.log('get checkin:', checkin)

  let checkout = localStorage.getItem('checkout') || ''
  console.log('get checkout:', checkout)

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

    checkin = document.querySelector('#checkin')?.value
    console.log('set checkin:', checkin)
    if (checkin) localStorage.setItem('checkin', checkin)

    checkout = document.querySelector('#checkout')?.value
    console.log('set checkout:', checkout)
    if (checkout) localStorage.setItem('checkout', checkout)

    adults = document.querySelector('#adults')?.value
    console.log('set adults:', adults)
    if (adults) localStorage.setItem('adults', adults)

    children = document.querySelector('#children')?.value
    console.log('set children:', children)
    if (children) localStorage.setItem('children', children)
  })
})
