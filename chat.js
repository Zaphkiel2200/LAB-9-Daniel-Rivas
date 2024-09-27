const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const userSelect = document.getElementById('user-select');

function addMessage() {
    const message = messageInput.value.trim();
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add('message', userSelect.value);
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

sendButton.addEventListener('click', addMessage);

messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addMessage();
    }
});