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
