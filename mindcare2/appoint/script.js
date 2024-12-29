let calendar; // Declare a global variable for the calendar instance

document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');

    // Initialize the FullCalendar instance
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        select: function (info) {
            openModal(info.startStr); // Open the modal with the selected date
        },
        events: [], // Initialize with an empty event list
    });

    calendar.render(); // Render the calendar
});

// Function to open the scheduling modal
function openModal(date) {
    const modal = document.getElementById('appointmentForm');
    document.getElementById('date').value = date; // Pre-fill the date input
    modal.style.display = 'block'; // Show the modal
}

// Function to close the scheduling modal
function closeModal() {
    const modal = document.getElementById('appointmentForm');
    modal.style.display = 'none'; // Hide the modal
}

// Function to handle scheduling an appointment
function scheduleAppointment() {
    const therapist = document.getElementById('therapist').value; // Get selected therapist
    const date = document.getElementById('date').value; // Get selected date
    const time = document.getElementById('time').value; // Get selected time

    // Check if all fields are filled
    if (!therapist || !date || !time) {
        alert('Please fill out all fields!');
        return;
    }

    // Add the appointment as an event to the calendar
    calendar.addEvent({
        title: `Appointment with ${therapist}`,
        start: `${date}T${time}`, // Combine date and time
        allDay: false, // Ensure it's not an all-day event
    });

    closeModal(); // Close the modal
    showSuccessPopup(); // Show success animation
}

// Function to show the success popup animation
function showSuccessPopup() {
    const popup = document.getElementById('successPopup');
    popup.classList.remove('hidden'); // Make the popup visible
    setTimeout(() => {
        popup.classList.add('hidden'); // Hide the popup after 4 seconds
    }, 4000);
}
