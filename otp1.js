function generateOTP() {
	let digits = "0123456789";
	let OTP = "";
	for (let i = 0; i < 4; i++) {
	  OTP += digits[Math.floor(Math.random() * 10)];
	}
	localStorage.setItem('otp', OTP);
	window.location.replace("number.html");
	return false;
  }
  
  function goBack() {
	location.replace("login.html");
  }

  function otpgen() {
	let verfyOtp = document.getElementById("verify").value;
	let OTP = localStorage.getItem('otp');
	if (verfyOtp === OTP) {
	  alert("success");
	  localStorage.removeItem("otp");
	  window.location.replace("den.html");
	  return false;
	} else {
	  alert("failed");
	}
  }
  