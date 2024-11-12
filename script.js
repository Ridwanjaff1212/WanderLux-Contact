document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Show a generic success message to the user
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.innerHTML = "Thank you for your message! We'll get back to you shortly.";
    responseMessage.style.opacity = 1; // Make the message visible

    // Reset the form fields
    this.reset();

    // You can optionally send the data to your server using fetch
    // sendData(name, email, message);
});

// Function to send data to the server
function sendData(name, email, message) {
    fetch('path/to/your/php/script.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Handle the response from the server
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}