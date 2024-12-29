

    // Select the menu icon and the navigation links
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    // Add event listener for the menu icon click
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Open and close modal
    function openModal() {
        document.getElementById('loginModal').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('loginModal').style.display = 'none';
    }

function login() {
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
  
    fetch('/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Login successful!') {
          document.querySelector('.admin-login').style.display = 'none';
          document.getElementById('dashboard').style.display = 'block';
        } else {
          alert('Invalid credentials');
        }
      });
  }
  
  function viewUsers() {
    fetch('/api/users')
      .then(response => response.json())
      .then(users => {
        displayData(users, 'Users');
      });
  }
  
  function viewTherapists() {
    fetch('/api/therapists')
      .then(response => response.json())
      .then(therapists => {
        displayData(therapists, 'Therapists');
      });
  }
  
  function displayData(data, title) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<h3>${title}</h3><ul>`;
    data.forEach(item => {
      outputDiv.innerHTML += `<li>${item.name} - ${item.email || item.specialty}</li>`;
    });
    outputDiv.innerHTML += '</ul>';
  }
  
  function logout() {
    document.querySelector('.admin-login').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('admin-username').value = '';
    document.getElementById('admin-password').value = '';
    document.getElementById('output').innerHTML = '';
  }
  // Open the modal
function openModal() {
  document.getElementById('loginModal').style.display = "flex";
}

// Close the modal
function closeModal() {
  document.getElementById('loginModal').style.display = "none";
  resetForm(); // Reset form when modal is closed
}

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

// FOR TALK WITH THERAPIST OPTION





