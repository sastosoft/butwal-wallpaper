(function () {
  emailjs.init("oWRI72Q2OSFq_2tQV"); // Your public key
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const statusMessage = document.getElementById("status-message");
    statusMessage.innerHTML = "Sending...";

    // Send the form data to EmailJS
    emailjs
      .sendForm("service_qud4cmp", "template_qq0jj5k", this)
      .then(function () {
        statusMessage.innerHTML = "Message sent successfully!";
        statusMessage.style.color = "#28a745"; // Green for success
      })
      .catch(function (error) {
        statusMessage.innerHTML = "Failed to send message. Please try again.";
        statusMessage.style.color = "#dc3545"; // Red for error
        console.error("EmailJS error:", error);
      });
  });
