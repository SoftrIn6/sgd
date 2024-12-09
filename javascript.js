// Select the popup and close button
const popup = document.getElementById('spin-popup');
const closeButton = document.querySelector('.close-popup');

let popupTimeout;

// Function to show the popup
function showPopup() {
    popup.classList.remove('hidden');
    clearTimeout(popupTimeout); // Clear any existing timeout
}

// Function to hide the popup and set it to reappear
function hidePopup() {
    popup.classList.add('hidden');
    popupTimeout = setTimeout(showPopup, 4000); // Show popup again after 4 seconds
}

// Initial popup display after 6 seconds
popupTimeout = setTimeout(showPopup, 6000);

// Event listener for the close button
closeButton.addEventListener('click', hidePopup);
