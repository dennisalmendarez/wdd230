function addMeetAndGreetBanner() {
    // Get the banner element
    const banner = document.getElementById('meet-greet-banner');
    
    // Display the banner
    banner.style.display = 'block';
    
    // Close banner functionality
    const closeButton = document.getElementById('close-banner-button');
    closeButton.addEventListener('click', function() {
        banner.style.display = 'none';
    });
}

// Function to check if today is Monday, Tuesday, or Wednesday
function isApplicableDay() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
    
    // Check if today is Monday (1), Tuesday (2), or Wednesday (3)
    return dayOfWeek >= 1 && dayOfWeek <= 3;
}

// Function to initialize the banner
function initializeBanner() {
    if (isApplicableDay()) {
        addMeetAndGreetBanner();
    }
}

// Call the initializeBanner function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeBanner);