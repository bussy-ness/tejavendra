const text = "Web Developer"; // The text to type
const typingTextElement = document.getElementById("introName");
let index = 0;

function type() {
    if (index < text.length) {
        typingTextElement.innerHTML += text.charAt(index); // Add next character
        index++;
        setTimeout(type, 150); // Typing speed (adjust as needed)
    } else {
        // Optionally, you can remove the cursor after typing is done
        typingTextElement.style.borderRight = 'none';
    }
}

type(); // Start typing
document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent actual form submission

    const owl = document.getElementById("owlImage");
    owl.classList.add("fly"); // Add flying effect class

    // Show "Thank you" message after animation
    setTimeout(() => {
        owl.classList.remove("fly"); // Reset for future use
        document.getElementById("contactForm").reset(); // Clear the form
        
    }, 1500); // Adjust time as needed to match the animation duration
});