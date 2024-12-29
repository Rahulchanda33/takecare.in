const therapistsContainer = document.querySelector('.therapists-container');
const therapistSearch = document.getElementById('therapistSearch');

// Therapist data generator (sample data)
const therapistNames = [
    "Sunita Kapoor", "Rajesh Patel", "Neha Gupta", "Vishal Mehta", "Anjali Rao", "Rohit Verma", "Priya Singh", "Rakesh Shah", "Kavita Nair", "Arvind Yadav", "Shalini Iyer", "Amit Desai", "Deepa Bhatt", "Manish Chatterjee", "Harshita Joshi", 
        "Gaurav Reddy", "Swati Malhotra", "Ashok Sharma", "Sneha Roy", "Vikram Agarwal", "Rajni Bansal", "Devika Rani", "Kiran Kapoor", "Ajay Saxena", "Parvati Sinha", "Naveen Kumar", "Pooja Bhardwaj", "Tarun Verma", "Meera Deshmukh", "Sameer Gupta", 
        "Varun Pillai", "Asha Jain", "Alok Banerjee", "Mahesh Iyer", "Ritu Joshi", "Santosh Roy", "Reema Chaudhary", "Shruti Patel", "Farhan Nair", "Ira Choudhary", "Usha Sood", "Abhay Singh", "Kirti Sharma", "Shantanu Verma", "Anil Malhotra", 
        "Bhavna Sinha", "Lakshmi Rao", "Arun Kapoor", "Esha Gupta", "Mukesh Sharma", "Yash Desai", "Madhavi Mehta", "Jaya Verma", "Tejas Roy", "Saurabh Iyer", "Nisha Kaur", "Shyam Reddy", "Aditi Bhatt", "Rajeev Chatterjee", "Anupama Nair", 
        "Arjun Yadav", "Shreya Mehta", "Vishnu Shah", "Manju Deshmukh", "Kalyan Gupta", "Rehan Singh", "Preeti Malhotra", "Shubham Joshi", "Sahil Sinha", "Nirmal Sharma", "Akshay Patel", "Radhika Iyer", "Parth Agarwal", "Bhaskar Gupta", 
        "Tanvi Kapoor", "Nitin Mehta", "Sumit Yadav", "Vivek Roy", "Gita Chaudhary", "Neeraj Verma", "Vandana Reddy", "Zoya Kumar", "Ishaan Shah", "Ananya Gupta", "Tara Sinha", "Krishna Kapoor", "Ravi Desai", "Lakshman Reddy", "Ritika Sood", 
        "Meenakshi Rao", "Amitabh Joshi", "Anushka Kapoor", "Suraj Singh", "Nandini Verma", "Rohit Malhotra", "Harsha Sharma", "Meghna Bansal", "Ajit Chatterjee", "Rahul Mehta", "Pratik Desai", "Veena Patel", "Rohini Gupta", "Lalit Nair", 
        "Ishita Shah", "Suman Sinha", "Avinash Kapoor", "Sarita Reddy", "Ajay Gupta", "Ritika Mehta", "Manoj Yadav", "Aakash Sood", "Sanjana Rao", "Niharika Desai", "Rakesh Kapoor", "Tanya Sharma", "Rishabh Yadav", "Karthik Iyer", "Aarav Patel", 
        "Hema Nair", "Shreya Verma", "Piyush Sinha", "Sanya Bhatt", "Nilesh Gupta", "Praveen Reddy", "Shalini Malhotra", "Vikas Sharma", "Riddhi Kapoor", "Girish Joshi", "Nikita Sood", "Amrita Singh", "Ravi Patel", "Aarti Rao", "Vivek Yadav", 
        "Chaitanya Iyer", "Anup Roy", "Isha Mehta", "Naveen Sharma", "Siddharth Kapoor", "Kajal Verma", "Tanisha Gupta", "Harshit Agarwal", "Rupa Shah", "Uday Kumar", "Manoj Bhatt", "Vikram Desai", "Shobha Patel", "Saurabh Yadav", "Mitali Gupta"
        
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
                    <button class="chat-button">Call Now</button>
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

