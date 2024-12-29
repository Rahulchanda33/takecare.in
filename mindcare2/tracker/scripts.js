// Function to save and display mood
function saveMood() {
    const mood = document.getElementById('mood').value;
    const moodNotes = document.getElementById('mood-notes').value;

    // Store data in localStorage
    localStorage.setItem('mood', mood);
    localStorage.setItem('moodNotes', moodNotes);

    // Call the function to display insights
    displayInsights();
}

// Function to save and display stress level
function saveStress() {
    const stressLevel = document.getElementById('stress-level').value;
    const stressNotes = document.getElementById('stress-notes').value;

    // Store data in localStorage
    localStorage.setItem('stressLevel', stressLevel);
    localStorage.setItem('stressNotes', stressNotes);

    // Call the function to display insights
    displayInsights();
}

// Function to save and display sleep data
function saveSleep() {
    const sleepHours = document.getElementById('sleep-hours').value;
    const sleepQuality = document.getElementById('sleep-quality').value;
    const sleepNotes = document.getElementById('sleep-notes').value;

    // Store data in localStorage
    localStorage.setItem('sleepHours', sleepHours);
    localStorage.setItem('sleepQuality', sleepQuality);
    localStorage.setItem('sleepNotes', sleepNotes);

    // Call the function to display insights
    displayInsights();
}

// Function to save and display physical activity data
function saveActivity() {
    const activity = document.getElementById('activity').value;
    const activityIntensity = document.getElementById('activity-intensity').value;
    const activityMood = document.getElementById('activity-mood').value;

    // Store data in localStorage
    localStorage.setItem('activity', activity);
    localStorage.setItem('activityIntensity', activityIntensity);
    localStorage.setItem('activityMood', activityMood);

    // Call the function to display insights
    displayInsights();
}

// Function to display insights
function displayInsights() {
    // Retrieve data from localStorage
    const mood = localStorage.getItem('mood');
    const moodNotes = localStorage.getItem('moodNotes');
    const stressLevel = localStorage.getItem('stressLevel');
    const stressNotes = localStorage.getItem('stressNotes');
    const sleepHours = localStorage.getItem('sleepHours');
    const sleepQuality = localStorage.getItem('sleepQuality');
    const sleepNotes = localStorage.getItem('sleepNotes');
    const activity = localStorage.getItem('activity');
    const activityIntensity = localStorage.getItem('activityIntensity');
    const activityMood = localStorage.getItem('activityMood');

    // Display insights in the #insights section
    document.getElementById('mood-insight').innerHTML = `<h3>Mood: ${mood}</h3><p>${moodNotes}</p>`;
    document.getElementById('stress-insight').innerHTML = `<h3>Stress Level: ${stressLevel}</h3><p>${stressNotes}</p>`;
    document.getElementById('sleep-insight').innerHTML = `<h3>Sleep: ${sleepHours} hours (${sleepQuality})</h3><p>${sleepNotes}</p>`;
    document.getElementById('activity-insight').innerHTML = `<h3>Activity: ${activity} (Intensity: ${activityIntensity})</h3><p>${activityMood}</p>`;
}

// Initialize insights when the page loads
window.onload = displayInsights;
