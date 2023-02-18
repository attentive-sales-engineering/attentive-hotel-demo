$(document).ready(function () {
  // Page loaded - get localstorage items
  console.log('PAGE LOADED')
  console.log('GET LOCAL STORAGE & SET FORM VALUES')

  let firstName = localStorage.getItem('firstName') || 'Fred'
  console.log('get firstName:', firstName)
  let firstNameElement = document.querySelector('#firstName')
  if (firstNameElement) firstNameElement.value = firstName

  let lastName = localStorage.getItem('lastName') || 'Flinstone'
  console.log('get lastName:', lastName)
  let lastNameElement = document.querySelector('#lastName')
  if (lastNameElement) lastNameElement.value = lastName

  let email = localStorage.getItem('email') || 'fred@attentive.com'
  console.log('get email:', email)
  let emailElement = document.querySelector('#email')
  if (emailElement) emailElement.value = email

  let phone = localStorage.getItem('phone') || '2065551212'
  console.log('get phone:', phone)
  let phoneElement = document.querySelector('#phone')
  if (phoneElement) phoneElement.value = phone

  let city = localStorage.getItem('city') || 'New York'
  console.log('get city:', city)
  let cityElement = document.querySelector('#city')
  if (cityElement) cityElement.value = city

  let checkIn = localStorage.getItem('checkIn') || '03/01/2023'
  console.log('get checkIn:', checkIn)
  let checkInElement = document.querySelector('#checkIn')
  if (checkInElement) checkInElement.value = checkIn

  let checkOut = localStorage.getItem('checkOut') || '03/02/2023'
  console.log('get checkOut:', checkOut)
  let checkOutElement = document.querySelector('#checkOut')
  if (checkOutElement) checkOutElement.value = checkOut

  let adults = localStorage.getItem('adults') || '1 Adult'
  console.log('get adults:', adults)
  let adultsElement = document.querySelector('#adults')
  if (adultsElement) adultsElement.value = adults

  let children = localStorage.getItem('children') || ''
  console.log('get children:', children)
  let childrenElement = document.querySelector('#children')
  if (childrenElement) childrenElement.value = children

  // Clicked submit button - set localstorage items
  $('#submit').click(function () {
    console.log('#SUBMIT CLICKED')
    console.log('SET LOCAL STORAGE')

    localStorage.setItem('city', cityElement.value)
    localStorage.setItem('checkIn', checkInElement.value)
    localStorage.setItem('checkOut', checkOutElement.value)
    localStorage.setItem('adults', adultsElement.value)
    localStorage.setItem('children', childrenElement.value)
  })
})
