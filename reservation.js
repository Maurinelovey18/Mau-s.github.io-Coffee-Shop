function submitReservation() {
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    // Validate the form (if needed)
    if (!name || !email || !phone || !date || !time || !guests) {
        alert("Please fill out all fields.");
        return;
    }

    // Display a confirmation message
    const message = `Thank you, ${name}! Your reservation for ${guests} guest(s) on ${date} at ${time} has been confirmed. We'll contact you at ${phone} or ${email} if needed.`;
    const messageElement = document.getElementById("reservationMessage");
    messageElement.textContent = message;
    messageElement.style.display = "block";

    // Reset the form (optional)
    document.getElementById("reservationForm").reset();
}
