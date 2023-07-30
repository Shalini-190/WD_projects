const slides = document.querySelectorAll('.slide'); // Get all slide elements
let currentSlide = 0;

function showSlide() {
  // Hide all slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // Show the current slide
  slides[currentSlide].classList.add('active');

  // Increment the slide index
  currentSlide++;

  // If the index exceeds the number of slides, reset it to 0
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // Call the showSlide function every 3 seconds
  setTimeout(showSlide, 3000);
}

// Start the slideshow
showSlide();

// Sample volunteer data
const volunteers = [
  { name: "Sophia Martinez", photo: "https://th.bing.com/th/id/OIP.Uqy6xqtDtaUBuTSzi0bkpwHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { name: "Noah Davis", photo: "https://th.bing.com/th/id/OIP.W2DgKUM4ewzVToLogMUa3gHaC3?w=345&h=135&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { name: "Emma Johnson", photo: "https://th.bing.com/th/id/OIP.9TFhbOeio_QIChsiv4L2MQHaEq?w=276&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { name: "James Anderson", photo: "https://th.bing.com/th/id/OIP.QfSWU59XMiw4q4H9gPB4GQHaKD?w=146&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { name: "Mason Miller", photo: "https://th.bing.com/th/id/OIP.JkPZinI1J3qW0HznoQBsEQHaE7?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
];

// Function to create volunteer cards
function createVolunteerCard(volunteer) {
  if (!volunteer.name || !volunteer.photo) {
    return null;
  }

  const volunteerCard = document.createElement("div");
  volunteerCard.classList.add("volunteer-card");

  const volunteerPhoto = document.createElement("img");
  volunteerPhoto.classList.add("volunteer-photo");
  volunteerPhoto.src = volunteer.photo;
  volunteerPhoto.alt = volunteer.name;

  const volunteerName = document.createElement("p");
  volunteerName.classList.add("volunteer-name");
  volunteerName.textContent = volunteer.name;

  volunteerCard.appendChild(volunteerPhoto);
  volunteerCard.appendChild(volunteerName);

  return volunteerCard;
}

// Function to display volunteers
function displayVolunteers() {
  const volunteersSection = document.getElementById("volunteers-section");

  volunteers.forEach((volunteer) => {
    const volunteerCard = createVolunteerCard(volunteer);
    if (volunteerCard) {
      volunteersSection.appendChild(volunteerCard);
    }
  });
}

// Call the function to display volunteers when the page loads
window.addEventListener("load", displayVolunteers);
// Form validation function
function validateForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return false;
  }

  if (email === '') {
    alert('Please enter your email.');
    emailInput.focus();
    return false;
  } else if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return false;
  }

  if (message === '') {
    alert('Please enter a message.');
    messageInput.focus();
    return false;
  }

  // Show pop-up message with a random nice quote
  showNiceQuote();

  return true;
}


// Random nice quotes
const niceQuotes = [
  'Spread love and kindness everywhere you go.',
  'In a world where you can be anything, be kind.',
  'The smallest act of kindness is worth more than the grandest intention.',
  'Kindness is a language that the deaf can hear and the blind can see.',
  'No act of kindness, no matter how small, is ever wasted.',
  'The world is full of nice people. If you can\'t find one, be one.',
];

// Function to show a pop-up message with a random nice quote
function showNiceQuote() {
  const randomQuote = niceQuotes[Math.floor(Math.random() * niceQuotes.length)];

  alert('Thank you for submitting the form!\n\n' + randomQuote);
}

// Attach form validation to submit button

// Simulated data for demonstration purposes (Replace with actual data)
// Simulated data for demonstration purposes (Replace with actual data)
const needyRequests = [
  {
      name: "John Doe",
      contact: "+91 1234567890",
      requirements: "Food and clothing"
  },
  {
      name: "Jane Smith",
      contact: "+91 9876543210",
      requirements: "School supplies for children"
  },
  // Add more requests as needed
];

document.addEventListener("DOMContentLoaded", function () {
  const requestsList = document.getElementById("requestsList");
  
  // Loop through the needy requests and create HTML elements to display them
  needyRequests.forEach((request, index) => {
      const requestElement = document.createElement("div");
      requestElement.classList.add("request-item");
      requestElement.innerHTML = `
          <h3>${request.name}</h3>
          <p>Contact: ${request.contact}</p>
          <p>Requirements: ${request.requirements}</p>
      `;

      requestsList.appendChild(requestElement);
  });

  // Check if there are no requests and display the "No requests yet" message
  if (needyRequests.length === 0) {
      noRequestsMessage.style.display = "block";
  }
});

 
document.addEventListener("DOMContentLoaded", function () {
  // Get references to form elements
  const nameInput = document.querySelector('input[placeholder="Your Name"]');
  const mobileInput = document.querySelector('input[placeholder="Mobile No."]');
  const donationSelect = document.getElementById("donation");
  const addressInput = document.querySelector('input[placeholder="Address"]');
  const messageTextarea = document.querySelector('textarea[placeholder="Message"]');
  const submitBtn = document.getElementById("submitBtn");

  // Event listener for form submission
  submitBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent form submission

      // Perform form validation
      if (!validateName(nameInput.value) || !validateMobile(mobileInput.value) || !validateDonation(donationSelect.value) || !validateAddress(addressInput.value)) {
          alert("Please fill in all required fields with valid data.");
          return;
      }

      // If form validation passes, you can submit the form
      document.querySelector(".contact-form").submit();
  });

  // Form validation functions
  function validateName(name) {
      return name.trim() !== ""; // Check if the name field is not empty
  }

  function validateMobile(mobile) {
      const mobileRegex = /^[0-9]+$/;
      return mobile.match(mobileRegex); // Check if the mobile number contains only digits
  }

  function validateDonation(donation) {
      return donation !== ""; // Check if a donation option is selected
  }

  function validateAddress(address) {
      return address.trim() !== ""; // Check if the address field is not empty
  }
});
function displayNeeds(name, donation, address) {
  const needsList = document.getElementById("needsList");
  const listItem = document.createElement("li");
  listItem.textContent = `${name} needs ${donation}. Address: ${address}`;
  needsList.appendChild(listItem);
}

// Event listener for form submission
var submitBtn = document.querySelector('.btn1');
submitBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission

  if (validateForm()) {
    // Form is valid, you can perform additional actions

    // Get form data
    var name = document.querySelector('input[placeholder="Your Name"]').value;
    var donation = document.querySelector('select[name="donation"]').value;
    var address = document.querySelector('input[placeholder="Address"]').value;

    // Call function to display the needs in the list
    displayNeeds(name, donation, address);

    // Reset the form after submission
    document.querySelector('.contact-form').reset();
  }
});

