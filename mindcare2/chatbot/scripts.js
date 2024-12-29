const { SessionsClient } = require('dialogflow'); // Import Dialogflow SDK

const projectId = 'your-dialogflow-project-id'; // Your Dialogflow project ID
const sessionClient = new SessionsClient();
const sessionPath = sessionClient.projectAgentSessionPath(projectId, 'session-id');

// Send message to Dialogflow and get the response
async function getDialogflowResponse(query) {
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: query,
                languageCode: 'en',
            },
        },
    };

    try {
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        return result.fulfillmentText; // Return Dialogflow's response
    } catch (error) {
        console.error('Error in Dialogflow request:', error);
        return 'Sorry, I couldn’t process that. Can you try again?';
    }
}

// Send the message and get a response from Dialogflow
async function sendMessage(event) {
    let userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return; // Don't send empty messages
    
    // Append user message to the chat
    appendMessage("User", userInput);

    // Clear input field
    document.getElementById("userInput").value = "";

    // Get response from Dialogflow
    const botResponse = await getDialogflowResponse(userInput);
    appendMessage("Bot", botResponse);  // Display bot's response
}

// Append messages to the chat window
function appendMessage(sender, message) {
    let chatbox = document.getElementById("chatbox");
    let messageElement = document.createElement("div");
    messageElement.className = sender === "User" ? "user-message" : "bot-message";
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;  // Scroll to bottom
}
