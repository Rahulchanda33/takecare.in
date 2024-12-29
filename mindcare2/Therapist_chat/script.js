const therapistsContainer = document.querySelector('.therapists-container');
const therapistSearch = document.getElementById('therapistSearch');

// Therapist data generator (sample data)
const therapistNames = [
    'Aarav Kumar', 'Aanya Rani', 'Aditya Sharma', 'Aditi Mehta', 'Akash Verma', 'Alok Yadav', 'Ananya Singh', 
    'Anish Gupta', 'Anjali Rao', 'Arjun Patel', 'Avani Deshmukh', 'Ayush Chaudhary', 'Bhavna Iyer', 'Bhuvan Shah', 
    'Chirag Joshi', 'Darsh Malhotra', 'Deepak Sinha', 'Dev Reddy', 'Diya Nair', 'Esha Saxena', 'Gaurav Choudhary', 
    'Gita Agarwal', 'Gopal Kaur', 'Harsh Kapoor', 'Hema Roy', 'Isha Sharma', 'Jaya Banerjee', 'Jayant Bhatt', 
    'Karan Joshi', 'Kavya Singh', 'Khushi Bansal', 'Krish Mehta', 'Lavanya Desai', 'Laxman Dutta', 'Madhav Joshi', 
    'Mahesh Iyer', 'Manish Kumar', 'Meera Verma', 'Mohit Sharma', 'Neha Gupta', 'Nidhi Sood', 'Nikhil Ranjan', 
    'Niraj Roy', 'Pallavi Gupta', 'Pankaj Nair', 'Parveen Singh', 'Pranav Jha', 'Priya Saha', 'Rahul Yadav', 
    'Raj Malhotra', 'Rakesh Kumar', 'Rani Gupta', 'Ravi Kapoor', 'Reema Bhatia', 'Rohan Singh', 'Rohit Yadav', 
    'Sagar Chatterjee', 'Sahil Verma', 'Saira Saxena', 'Sakshi Sharma', 'Sameer Bhardwaj', 'Sanjay Patil', 
    'Sanya Gupta', 'Sapna Sharma', 'Sarita Mehta', 'Shalini Yadav', 'Shankar Nair', 'Sharmila Iyer', 'Shiv Rajput', 
    'Shreya Joshi', 'Siddharth Agarwal', 'Sneha Sharma', 'Sonali Gupta', 'Soumya Rani', 'Suman Rao', 'Suraj Sinha', 
    'Swati Bhattacharya', 'Tanvi Gupta', 'Tejas Reddy', 'Uday Sharma', 'Urvashi Das', 'Vaishali Mehta', 'Varun Patel', 
    'Vidya Kumar', 'Vikram Bhardwaj', 'Vinay Rani', 'Vineet Singh', 'Yash Verma', 'Aarohi Rao', 'Aashvi Joshi', 
    'Abhay Yadav', 'Abhilasha Verma', 'Adarsh Mehta', 'Amaya Gupta', 'Amisha Singh', 'Anand Roy', 'Anirudh Kumar', 
    'Anushka Chaudhary', 'Arnav Rani', 'Ayesha Malik', 'Charvi Iyer', 'Devika Agarwal', 'Disha Ranjan', 'Eshan Kapoor', 
    'Farhan Nair', 'Gaurika Sharma', 'Harini Mehta', 'Ishaan Patel', 'Jai Verma', 'Jaya Gupta', 'Kanak Sinha', 
    'Kirti Kumar', 'Kritika Sharma', 'Lavith Joshi', 'Manav Gupta', 'Mukesh Reddy', 'Navya Sharma', 'Neeraj Mehta', 
    'Parth Yadav', 'Payal Agarwal', 'Prisha Iyer', 'Raghav Kumar', 'Rajesh Bhardwaj', 'Rani Desai', 'Richa Sharma', 
    'Ritesh Malhotra', 'Ruchi Kumar', 'Saahil Verma', 'Saket Sinha', 'Sameena Gupta', 'Sanika Sharma', 'Sarvesh Rao', 
    'Shikha Yadav', 'Shubham Singh', 'Shivani Mehta', 'Shreyas Nair', 'Snehal Rani', 'Sravan Patil', 'Sukriti Gupta', 
    'Sumit Reddy', 'Swarnima Bhardwaj', 'Tanisha Agarwal', 'Tejal Singh', 'Vani Iyer', 'Vidhan Kapoor', 'Vinita Gupta', 
    'Yashvi Sharma', 'Zahid Rani', 'Zoya Malhotra', 'Zubair Chaudhary'
];

const languages = ['English', 'Hindi', 'Punjabi', 'Tamil', 'Kannada', 'Bengali', 'Assamese'];
const experienceLevels = ['3 Years', '2 Years', '4 Years', '5 Years', '7 Years', '10 Years'];
const chargesPerMinute = [5, 7, 10, 12, 15];

// Function to display therapists
function displayTherapists(filter = '') {
    therapistsContainer.innerHTML = ''; // Clear previous content

    therapistNames.forEach((name) => {
        // Filter by search input
        if (name.toLowerCase().includes(filter.toLowerCase())) {
            const experience = experienceLevels[Math.floor(Math.random() * experienceLevels.length)];
            const language = languages[Math.floor(Math.random() * languages.length)];
            const charge = chargesPerMinute[Math.floor(Math.random() * chargesPerMinute.length)];

            const therapistCard = `
                <div class="therapist-card">
                    <img src="https://img.icons8.com/ios-filled/100/000000/user.png" alt="${name}">
                    <h3>${name}
                        <span class="verified"></span> <!-- Verified badge logo -->
                    </h3>
                    <p>Experience: ${experience}</p>
                    <p>Language: ${language}</p>
                    <p class="charges">₹ ${charge}/min</p>
                    <button class="chat-button">Chat Now</button>
                </div>
            `;
            therapistsContainer.innerHTML += therapistCard;
        }
    });
}

// Initial load: Display all therapists
displayTherapists();

// Add event listener for search input
therapistSearch.addEventListener('input', function (e) {
    displayTherapists(e.target.value); // Filter therapists based on input
});


// Recharge
document.getElementById('rechargeButton').onclick = function() {
    var options = {
        key: 'YOUR_RAZORPAY_KEY', // Enter your Razorpay key ID
        amount: 50000, // Amount in paise (50000 paise = ₹500)
        currency: 'INR',
        name: 'Recharge Service',
        description: 'Recharge for your account',
        image: 'https://example.com/your_logo.jpg', // Optional: logo URL
        order_id: '', // Use this to store the order ID from your server
        handler: function (response) {
            alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
            // You can also call your backend here to verify the payment
        },
        prefill: {
            name: 'Customer Name', // Optional: customer name
            email: 'customer@example.com', // Optional: customer email
            contact: '9999999999' // Optional: customer contact number
        },
        notes: {
            address: 'Razorpay Corporate Office' // Optional: additional notes
        },
        theme: {
            color: '#F37254' // Optional: color of the Razorpay payment page
        }
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
    event.preventDefault();
};

// Generate a random 4-digit OTP
let generatedOTP = '';

function generateOTP() {
    let mobileNumber = document.getElementById('mobileNumber').value;
    if (mobileNumber.length === 10) {
        generatedOTP = Math.floor(1000 + Math.random() * 9000); // Generate 4-digit OTP
        document.getElementById('otpValue').textContent = generatedOTP;
        document.getElementById('generatedOtp').style.display = "block"; // Show the OTP for simulation
        document.getElementById('otpSection').style.display = "block"; // Show OTP input section
    } else {
        alert("Please enter a valid 10-digit mobile number.");
    }
}

// 1. Select the menu icon and the navigation links
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// 2. Add event listener for the menu icon click
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// 3. Open and close modal functions
function openModal() {
    document.getElementById('loginModal').style.display = 'flex'; // Use 'flex' for centering
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
    resetForm(); // Reset form when modal is closed
}

// Verify the entered OTP
function verifyOTP() {
    let enteredOTP = document.getElementById('otp').value;
    if (enteredOTP === generatedOTP.toString()) {
        alert("Login successful! OTP verified.");
        closeModal(); // Close the modal on successful login
    } else {
        alert("Invalid OTP. Please try again.");
    }
}

// Reset the form and hide OTP sections
function resetForm() {
    document.getElementById('loginForm').reset();
    document.getElementById('generatedOtp').style.display = "none";
    document.getElementById('otpSection').style.display = "none";
}

// Event listeners for OTP generation and verification buttons
document.getElementById('generateOtpButton').onclick = generateOTP; // Assuming you have a button to generate OTP
document.getElementById('verifyOtpButton').onclick = verifyOTP; // Assuming you have a button to verify OTP

