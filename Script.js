// Scroll smoothly to the Contact section
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  // Simple success message (frontend only)
  formMessage.style.color = "green";
  formMessage.textContent = "Thank you! Your message has been sent.";

  // Clear the form
  document.getElementById("contactForm").reset();
});
