(function() {
    'use strict';

    // Function to get the current time as a string
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString();
    }

    // Function to send message
    function sendMessageWithTime() {
        console.log("Attempting to find chatbox and send button...");

        const chatbox = document.querySelector('textarea[placeholder="Type something"]');
        const sendButton = document.querySelector('button[aria-label="Run"]');

        if (chatbox) {
            console.log("Chatbox found:", chatbox);
        } else {
            console.error("Chatbox not found.");
        }

        if (sendButton) {
            console.log("Send button found:", sendButton);
        } else {
            console.error("Send button not found.");
        }

        if (chatbox && sendButton) {
            const currentTime = getCurrentTime();
            const message = `The current time is ${currentTime}`;
            chatbox.value = message;
            chatbox.dispatchEvent(new Event('input', { bubbles: true }));
            sendButton.click();
            console.log("Message sent:", message);
        }
    }

    // Delayed execution to ensure elements are loaded
    function initialize() {
        setTimeout(() => {
            sendMessageWithTime();  // Initial call to send message immediately when the script runs
            setInterval(sendMessageWithTime, 3600000); // Set interval to send message every hour
        }, 5000); // Delay of 5 seconds
    }

    window.addEventListener('load', initialize);
})();
