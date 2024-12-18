function redirectToWhatsApp(message) {
    const phone = "+919074941605"; // Replace with your WhatsApp number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
}

function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.style.display = (chatContainer.style.display === 'none' || chatContainer.style.display === '') ? 'flex' : 'none';
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== "") {
        const chatBox = document.getElementById('chat-box');

        // Add User Message
        const userMessage = document.createElement('div');
        userMessage.classList.add('chat-message', 'user-message');
        userMessage.innerHTML = `<i class="fas fa-user-circle"></i> <span>${userInput}</span>`;
        chatBox.appendChild(userMessage);

        // Add loading animation for bot
        const botMessage = document.createElement('div');
        botMessage.classList.add('chat-message', 'bot-message');
        botMessage.innerHTML = `<span class="loader"></span>`;
        chatBox.appendChild(botMessage);

        // Simulate typing delay
        setTimeout(() => {
            botMessage.innerHTML = `<span>${getBotReply(userInput)}</span> <i class="fas fa-robot"></i>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);

        // Clear input
        document.getElementById('user-input').value = "";
    }
}

function sendSuggestedMessage(question) {
    document.getElementById('user-input').value = question;
    sendMessage();
}

function getBotReply(input) {
    const replies = {
        "hi": "Hi there! Welcome to YesTrustedseller. How can I assist you today? 😊",
        "hello": "Hi there! Welcome to YesTrustedseller. How can I assist you today? 😊",
        "how are you": "I'm just a bot, but I'm doing great! How about you? 🤖",
        "what is your name": "I'm YesTrustedseller's Bot, at your service! 🤖",
        "bye": "Goodbye! Come back soon. 🥰",
        "help": "I can assist you with account purchases, inquiries, or general support. Let me know how I can help! 🤖",
        "thank you": "You're welcome! 😊",
        "who created you": "I was created by the amazing YesTrustedseller team to assist you! 🙌",
        "what do you sell": "We specialize in Instagram accounts and services! 💼",
        "how to buy": "Simply let me know what you're looking for, and I'll guide you through the process! 🛒",
        "payment methods": "We accept PayPal, Bank Transfers, and Crypto. 💳",
        "is it safe": "Absolutely! We prioritize safety and customer satisfaction. 🛡️",
        "how long does it take": "It depends on the service you choose, but we strive for fast and efficient transactions. ⏱️",
        "do you provide support": "Yes! We provide 24/7 customer support. Feel free to ask me anything! 💬",
        "clear chat": "Chat history cleared! 😎"
    };

    return replies[input.toLowerCase()] || "Sorry, I didn't quite catch that. Could you rephrase? 🤔";
}
