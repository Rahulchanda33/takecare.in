document.querySelector(".cta-btn").addEventListener("click", () => {
    alert("Get Started with MindCare!");
});


function openModal() {
    document.getElementById("loginModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("loginModal").style.display = "none";
  }
  
  function generateOTP() {
    const otp = Math.floor(1000 + Math.random() * 9000);  // Generating a 4-digit OTP
    document.getElementById("otpValue").innerText = otp;
    document.getElementById("generatedOtp").style.display = "block";
    document.getElementById("otpSection").style.display = "block";
  }
  
  function verifyOTP() {
    const enteredOtp = document.getElementById("otp").value;
    const generatedOtp = document.getElementById("otpValue").innerText;
  
    if (enteredOtp === generatedOtp) {
      alert("OTP Verified Successfully!");
      closeModal();
    } else {
      alert("Invalid OTP. Please try again.");
    }
  }
  