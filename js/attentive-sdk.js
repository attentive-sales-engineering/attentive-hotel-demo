$(document).ready(function () {
  // Page loaded - get localstorage items
  console.log('PAGE LOADED')
  console.log('window.location.pathname: ', window.location.pathname)

  const firstName = localStorage.getItem('firstName') || 'Fred'
  console.log('get firstName:', firstName)
  const firstNameElement = document.querySelector('#firstName')

  const lastName = localStorage.getItem('lastName') || 'Flinstone'
  console.log('get lastName:', lastName)
  const lastNameElement = document.querySelector('#lastName')

  const email = localStorage.getItem('email') || 'fred@attentive.com'
  console.log('get email:', email)
  const emailElement = document.querySelector('#email')

  const phone = localStorage.getItem('phone') || '2065551212'
  console.log('get phone:', phone)
  const phoneElement = document.querySelector('#phone')

  const city = localStorage.getItem('city') || 'New York'
  console.log('get city:', city)
  const cityElement = document.querySelector('#city')

  const checkIn = localStorage.getItem('checkIn') || '03/01/2023'
  console.log('get checkIn:', checkIn)
  const checkInElement = document.querySelector('#checkIn')

  const checkOut = localStorage.getItem('checkOut') || '03/02/2023'
  console.log('get checkOut:', checkOut)
  const checkOutElement = document.querySelector('#checkOut')

  const adults = localStorage.getItem('adults') || '1 Adult'
  console.log('get adults:', adults)
  const adultsElement = document.querySelector('#adults')

  const children = localStorage.getItem('children') || ''
  console.log('get children:', children)
  const childrenElement = document.querySelector('#children')

  if (window.location.pathname == '/booking.html') {
    console.log('BOOKING PAGE')
    console.log('GET LOCAL STORAGE & SET FORM VALUES')
    if (firstNameElement) firstNameElement.value = firstName
    if (lastNameElement) lastNameElement.value = lastName
    if (emailElement) emailElement.value = email
    if (phoneElement) phoneElement.value = phone
    if (cityElement) cityElement.value = city
    if (checkInElement) checkInElement.value = checkIn
    if (checkOutElement) checkOutElement.value = checkOut
    if (adultsElement) adultsElement.value = adults
    if (childrenElement) childrenElement.value = children
  }

  // Clicked submit button - set localstorage items
  $('button[type="submit"').click(function () {
    console.log('SUBMIT CLICKED')

    if (
      window.location.pathname == '/index.html' ||
      window.location.pathname == '/room-details.html'
    ) {
      console.log('SET LOCAL STORAGE')
      localStorage.setItem('city', cityElement.value)
      localStorage.setItem('checkIn', checkInElement.value)
      localStorage.setItem('checkOut', checkOutElement.value)
      localStorage.setItem('adults', adultsElement.value)
      localStorage.setItem('children', childrenElement.value)
      // ADD TO CART SDK
      console.log('ADD TO CART SDK')
    } else if (window.location.pathname == '/booking.html') {
      // PURCHASE SDK
      console.log('PURCHASE SDK')
    }
  })
})
