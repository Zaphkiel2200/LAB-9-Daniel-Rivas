const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const userSelect = document.getElementById('user-select');

// Rutas de las imágenes de perfil 

    const profilePics = {
        blue: 'Profile Pic/Kindred.png',
        green: 'Profile Pic/Trynda.png'
    };

    function addMessage() {
        const message = messageInput.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', userSelect.value);
            
            const profilePic = document.createElement('img');
            profilePic.classList.add('profile-pic');
            profilePic.src = profilePics[userSelect.value];
            profilePic.alt = `Foto de perfil de ${userSelect.value === 'blue' ? 'Kindred' : 'Trynda'}`;

            const messageContent = document.createElement('div');
            messageContent.classList.add('message-content');
            messageContent.textContent = message;

            messageElement.appendChild(profilePic);
            messageElement.appendChild(messageContent);

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