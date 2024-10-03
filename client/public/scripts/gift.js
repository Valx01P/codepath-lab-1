const renderGift = async () => {
    try {
        // Parse the gift ID from the URL
        const pathSegments = window.location.pathname.split('/')
        const requestedID = parseInt(pathSegments[pathSegments.length - 1])

        if (isNaN(requestedID)) {
            throw new Error('Invalid gift ID')
        }

        // Fetch all gift data
        const response = await fetch('/gifts')
        if (!response.ok) {
            throw new Error('Failed to fetch gifts')
        }
        const data = await response.json()

        // Find the gift that matches the requested ID
        const gift = data.find(gift => gift.id === requestedID)

        if (gift) {
            // Set the gift details in the DOM
            document.getElementById('image').src = gift.image
            document.getElementById('image').alt = gift.name
            document.getElementById('name').textContent = gift.name
            document.getElementById('submittedBy').textContent = `Submitted by: ${gift.submittedby}`
            document.getElementById('submittedOn').textContent = `Submitted on: ${gift.submittedon.slice(0, 10)}`
            document.getElementById('pricePoint').textContent = `Price: ${gift.pricepoint}`
            document.getElementById('audience').textContent = `Audience: ${gift.audience}`
            document.getElementById('description').textContent = gift.description

            // Set the page title to the gift name
            document.title = gift.name
        } else {
            throw new Error('Gift not found')
        }
    } catch (error) {
        console.error('Error rendering gift details:', error)
        // Redirect to 404 page if there's an error
        window.location.href = '/404.html'
    }
}

// Call the renderGift function to display the gift details
renderGift()