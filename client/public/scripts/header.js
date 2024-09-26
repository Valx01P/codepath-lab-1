// Select the header element
const header = document.getElementById('header')

// Create a div element with class name 'header-container'
const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

// Create a div element with class name 'header-left'
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

// Create an img element and set its source to 'logo.png'
const logo = document.createElement('img')
logo.src = '/logo.png'
logo.alt = 'Unearthed Logo'

// Create an h1 element and set its text content to 'Unearthed'
const title = document.createElement('h1')
title.textContent = 'Unearthed'

// Append the logo and title to the 'header-left' div
headerLeft.appendChild(logo)
headerLeft.appendChild(title)

// Create a div element with class name 'header-right'
const headerRight = document.createElement('div')
headerRight.className = 'header-right'

// Create a button element, set its text content to 'Home'
const headerButton = document.createElement('button')
headerButton.textContent = 'Home'

// Register a click event listener to the button that redirects to the home page
headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/'
})

// Append the button to the 'header-right' div
headerRight.appendChild(headerButton)

// Append the left and right divs to the 'header-container' div
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

// Finally, append the 'header-container' to the header element
header.appendChild(headerContainer)
