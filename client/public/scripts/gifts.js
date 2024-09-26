// Asynchronous function to fetch and render gift data
const renderGifts = async () => {
    try {
        // Fetch data from the /gifts endpoint
        const response = await fetch('/gifts')
        const data = await response.json()

        // Select the main content area
        const mainContent = document.getElementById('main-content')

        // Check if data is available
        if (data && data.length > 0) {
            // Map over the data and create a card for each gift
            data.forEach(gift => {
                // Create a card container
                const card = document.createElement('div')
                card.className = 'card'

                // Create the top container with the gift image
                const topContainer = document.createElement('div')
                topContainer.className = 'top-container'
                topContainer.style.backgroundImage = `url(${gift.image})`
                topContainer.style.backgroundSize = 'cover'
                topContainer.style.backgroundPosition = 'center'

                // Create the bottom container with gift details
                const bottomContainer = document.createElement('div')
                bottomContainer.className = 'bottom-container'

                // Create the gift name element
                const giftName = document.createElement('h3')
                giftName.textContent = gift.name

                // Create the price point element
                const pricePoint = document.createElement('p')
                pricePoint.textContent = `Price: ${gift.pricePoint}`

                // Create the audience element
                const audience = document.createElement('p')
                audience.textContent = `Audience: ${gift.audience}`

                // Create the 'Read More' link
                const readMore = document.createElement('a')
                readMore.textContent = 'Read More >'
                readMore.href = `/gifts/${gift.id}`
                readMore.setAttribute('role', 'button')

                // Append elements to the bottom container
                bottomContainer.appendChild(giftName)
                bottomContainer.appendChild(pricePoint)
                bottomContainer.appendChild(audience)
                bottomContainer.appendChild(readMore)

                // Append top and bottom containers to the card
                card.appendChild(topContainer)
                card.appendChild(bottomContainer)

                // Append the card to the main content area
                mainContent.appendChild(card)
            })
        } else {
            // If no data is available, show a 'No Gifts Available' message
            const noGiftsMessage = document.createElement('h2')
            noGiftsMessage.textContent = 'No Gifts Available 😞'
            mainContent.appendChild(noGiftsMessage)
        }
    } catch (error) {
        console.error('Error fetching gift data:', error)
    }
}

// Function to determine if the current page is the main page
const isMainPage = () => {
    const pathname = window.location.pathname
    return pathname === '/' || pathname === '/index.html'
}

// Function to determine if the URL is for a specific gift
const isGiftPage = () => {
    const pathname = window.location.pathname
    const giftId = pathname.split('/').pop()
    return !isNaN(giftId) && pathname.includes('/gifts/')
}

// Redirect to 404 if the URL is invalid
const handleInvalidUrl = () => {
    if (!isMainPage() && !isGiftPage()) {
        window.location.href = '../404.html'
    } else if (isMainPage()) {
        renderGifts()
    }
}

// Call the function to handle the current URL
handleInvalidUrl()
