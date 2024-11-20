document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
  
    const observerOptions = {
      root: null, // Viewport as root
      rootMargin: "0px",
      threshold: 0.15 // Trigger when 20% of the section is visible
    };
  
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible");
          entry.target.classList.remove("section-hidden");
        } else {
          entry.target.classList.remove("section-visible");
          entry.target.classList.add("section-hidden");
        }
      });
    }, observerOptions);
  
    // Observe each section
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  });
  



// Get the toggle button, close button, and the navbar
const toggleBtn = document.getElementById("toggle-btn");
const sidemenu = document.getElementById("sidemenu");
const closeBtn = document.getElementById("close-btn");

// Toggle the sidebar when the menu button is clicked
toggleBtn.addEventListener("click", () => {
    sidemenu.classList.toggle("open");
    document.body.classList.toggle("menu-open"); // Disable body scroll
});

// Close the sidebar when the close button is clicked
closeBtn.addEventListener("click", () => {
    sidemenu.classList.remove("open");
    document.body.classList.remove("menu-open"); // Enable body scroll again
});




document.getElementById('dark-mode-toggle').addEventListener('change', function () {
  if (this.checked) {

    // Revert to dark mode

//
document.documentElement.style.setProperty('--primary-color', '#ffffff');  // Deep blue for primary accents
document.documentElement.style.setProperty('--secondary-color', '#000000');  // Very dark blue for secondary elements
document.documentElement.style.setProperty('--light-gray', '#292b2b');  // Soft, dark gray for backgrounds
document.documentElement.style.setProperty('--dark-gray', 'rgb(220, 214, 214)');  // Rich, almost black background for contrast
document.documentElement.style.setProperty('--medium-gray', '#b1aeae');  // Medium gray for borders and subtle text
document.documentElement.style.setProperty('--footer-color', '#e70000');  // Dark footer with a bit of contrast
document.documentElement.style.setProperty('--header-text-color', '#b0b3b6');  // Light gray text for headers and titles
document.documentElement.style.setProperty('--left-side', '#787676');  // Very dark sidebar with a smooth feel
document.documentElement.style.setProperty('--test-one', 'rgb(110, 110, 110)');  // Soft gray for non-intrusive elements
document.documentElement.style.setProperty('--test', 'rgb(110, 110, 110)');  // Soft gray for non-intrusive elements
document.documentElement.style.setProperty('--see', '#000');  // Soft gray for non-intrusive elements
document.documentElement.style.setProperty('--contact', '#dfe0e1');  // Soft gray for non-intrusive elements
document.documentElement.style.setProperty('--btnn', '#000000');  // Soft gray for non-intrusive elements
document.documentElement.style.setProperty('--hover', '#0056b3');  // Soft gray for non-intrusive elements
document.documentElement.style.setProperty('--faraj', '#000');  // Soft gray for non-intrusive elements
document.documentElement.style.setProperty('--blue', '#000000');  // Soft gray for non-intrusive elements
document.documentElement.style.setProperty('--blue-f', '#0056b3');  // Soft gray for non-intrusive elements      
  } else {
      // Revert to light mode
      document.documentElement.style.setProperty('--primary-color', '#0044cc');
      document.documentElement.style.setProperty('--secondary-color', '#0056b3');
      document.documentElement.style.setProperty('--light-gray', '#f0f0f0');
      document.documentElement.style.setProperty('--dark-gray', '#333333');
      document.documentElement.style.setProperty('--medium-gray', '#777777');
      document.documentElement.style.setProperty('--footer-color', '#292b2b');
      document.documentElement.style.setProperty('--header-text-color', '#0044cc');
      document.documentElement.style.setProperty('--left-side', '#fff');
      document.documentElement.style.setProperty('--test-one', 'rgb(172, 172, 172)');
      document.documentElement.style.setProperty('--test', 'rgb(225, 225, 225)');  // Soft gray for non-intrusive elements
      document.documentElement.style.setProperty('--see', '#0056b3');  // Soft gray for non-intrusive elements
      document.documentElement.style.setProperty('--contact', '#007BFF');  // Soft gray for non-intrusive elements
      document.documentElement.style.setProperty('--btnn', '#007BFF');  // Soft gray for non-intrusive elements
      document.documentElement.style.setProperty('--hover', '#e07b00');  // Soft gray for non-intrusive elements
      document.documentElement.style.setProperty('--faraj', '#0056b3');  // Soft gray for non-intrusive elements
      document.documentElement.style.setProperty('--blue', '#1E88E5');  // Soft gray for non-intrusive elements
document.documentElement.style.setProperty('--blue-f', '#0056b3');  // Soft gray for non-intrusive elements      
    } 
});

  


















// Partie button chatbot:
let hasGreeted = false; // Flag to track if the greeting has been shown
const API_URL = 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill';
const API_KEY = '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';
// Initialize the available questions
let availableQuestions = [
  "What is your current position?",
  "Where are you located?",
  "What are your main skills?",
  "What programming languages do you know?",
  "What is your educational background?",
  "What projects have you worked on?",
  "Do you have experience with networking?",
  "What are your interests?",
  "What languages do you speak?",
  "What services do you offer?",
  "What is your hourly rate?",
  "How can I hire you?",
  "What are your working hours?",
  "Do you work with tight deadlines?",
  "Do you work on weekends?",
  "How do you handle revisions?",
  "What is your development process?",
  "Do you provide maintenance or support?",
  "What tools do you use?",
  "What industries have you worked with?",
  "Can you share your portfolio?",
  "Do you work alone or with a team?",
  "Do you sign non-disclosure agreements (NDA)?",
  "What makes you different from other freelancers?",
  "Do you offer fixed-price or hourly contracts?",
  "Can you work in different time zones?",
  "How do you handle communication with clients?",
  "What if a project takes longer than expected?",
  "What do you need from me to start a project?",
  "How do you handle project milestones?",
  "Can you work with existing codebases?",
  "What is your process for bug fixing?",
  "Do you provide project documentation?",
  "Can you integrate third-party APIs?",
  "What security measures do you implement?",
  "How do you ensure quality assurance?",
  "Do you offer training for delivered solutions?",
  "What platforms are you comfortable developing on?",
  "How do you handle project feedback?",
  "Can you customize existing solutions?",
  "What is your preferred communication tool?",
  "How do you manage multiple projects?",
  "Do you offer design services?",
  "Can you help with project planning?",
  "How do you keep up with industry trends?",
  "Do you provide estimates before starting a project?",
  "What is your approach to code quality?",
  "How do you handle conflicts with clients?",
  "Can you work with agile methodologies?"
];

// Show initial greeting and suggestions when the chatbot window opens
function displayGreeting() {
  if (!hasGreeted) {  // Check if the greeting has already been shown
    addMessageToChat('Chatbot', "Hi, my name is Faraj. How can I assist you today?");
    hasGreeted = true; // Set the flag to true after greeting
  }

  showSuggestions(availableQuestions);
}

// Display suggestions as clickable buttons
function showSuggestions(suggestions) {
  const suggestionsContainer = document.getElementById('suggestions-container');
  suggestionsContainer.innerHTML = '';  // Clear any previous suggestions
  suggestions.forEach(suggestion => {
    const button = document.createElement('button');
    button.textContent = suggestion;
    button.onclick = function() {
      handleSuggestedQuestion(suggestion);
    };
    suggestionsContainer.appendChild(button);
  });
}

// Handle when a suggested question is clicked
function handleSuggestedQuestion(question) {
  addMessageToChat('You', question);
  showLoadingDots();  // Show loading dots before response
  setTimeout(() => { // Simulate loading delay
    getBotResponse(question);
    // Remove the question from available questions after it's answered
    availableQuestions = availableQuestions.filter(q => q !== question);
    // Update the suggestions
    showSuggestions(availableQuestions);
  }, 2000); // 2 seconds delay before getting the response
}

// Handle message input and responses
function handleInput(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

function sendMessage() {
  const inputField = document.getElementById('chatbot-input');
  const userMessage = inputField.value.trim();
  if (userMessage) {
    addMessageToChat('You', userMessage);
    showLoadingDots();  // Show loading dots before response
    setTimeout(() => { // Simulate loading delay
      getBotResponse(userMessage);
    }, 2000); // 2 seconds delay before getting the response
    inputField.value = '';
  }
}

// Function to show the loading dots
function showLoadingDots() {
  const messagesContainer = document.getElementById('chatbot-messages');
  const loadingMessage = document.createElement('div');
  loadingMessage.setAttribute('id', 'loading-message');
  loadingMessage.innerHTML = `<strong>Chatbot:</strong> <span id="loading-dots"></span>`;
  messagesContainer.appendChild(loadingMessage);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Function to remove loading message when response is ready
function removeLoadingDots() {
  const loadingMessage = document.getElementById('loading-message');
  if (loadingMessage) {
    loadingMessage.remove();
  }
}

// Add a message to the chat
function addMessageToChat(sender, message) {
  const messagesContainer = document.getElementById('chatbot-messages');
  const messageElement = document.createElement('div');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Generate bot response based on user input
async function getBotResponse(message) {
  let response;

  // Convert message to lowercase for better matching
  const userMessage = message.toLowerCase();

  if (userMessage.includes("what is your current position")) {
    response = "I am currently a freelancer specializing in web, Android, and iOS development, working through platforms such as UpWork, Fiverr, and more.";
  } else if (userMessage.includes("where are you located")) {
    response = "I am based in Paris, France.";
  } else if (userMessage.includes("what are your main skills")) {
    response = "My main skills include web development (HTML, CSS, JavaScript, React.js, Node.js), electronics (Arduino, PLC programming), machine learning (TensorFlow, XGBoost), and more.";
  } else if (userMessage.includes("what programming languages do you know")) {
    response = "I have proficiency in Python, PowerShell, C, JavaScript, React.js, and React Native, among others.";
  } else if (userMessage.includes("what is your educational background")) {
    response = "I hold a Bachelor's degree in Electronics and Computer Science, specializing in Mechatronics. I am also preparing to start a Master's in Computer Science at ESGI.";
  } else if (userMessage.includes("what projects have you worked on")) {
    response = "Some of my notable projects include an Autonomous Mobile Robot, a Credit Card Fraud Prediction system using TensorFlow, and a Brain Tumor Detection system using machine learning.";
  } else if (userMessage.includes("do you have experience with networking")) {
    response = "Yes, I have experience with IoT and networking technologies such as Node-RED, LoRaWAN, SNMP, and MQTT.";
  } else if (userMessage.includes("what are your interests")) {
    response = "I am interested in open-source development, chess, traveling, and volunteering.";
  } else if (userMessage.includes("what languages do you speak")) {
    response = "I am proficient in French, English, Arabic, and German.";
  } 
  
else if (message.includes("what services do you offer")) {
  response = "I offer services in web development, mobile app development, electronics engineering, machine learning projects, and more.";
} else if (message.includes("what is your hourly rate")) {
  response = "My hourly rate varies depending on the project complexity, but I am happy to discuss and agree on a fair rate for your project.";
} else if (message.includes("how can i hire you")) {
  response = "You can hire me through platforms like UpWork or Fiverr, or you can contact me directly for freelance projects.";
} else if (message.includes("what are your working hours")) {
  response = "My working hours are flexible to accommodate client needs. I usually work Monday through Friday, but I'm open to different schedules based on project requirements.";
} else if (message.includes("do you work with tight deadlines")) {
  response = "Yes, I have experience working on projects with tight deadlines and always strive to deliver high-quality work within the agreed timeframe.";
} else if (message.includes("do you work on weekends")) {
  response = "I am open to working on weekends if a project requires it, depending on the timeline and urgency.";
} else if (message.includes("how do you handle revisions")) {
  response = "I offer a revision policy based on mutual agreement. Typically, I am happy to make reasonable revisions to ensure client satisfaction.";
} else if (message.includes("what is your development process")) {
  response = "My development process usually involves understanding the client's requirements, planning, prototyping, iterative development, testing, and delivery, with regular feedback along the way.";
} else if (message.includes("do you provide maintenance or support")) {
  response = "Yes, I can provide ongoing maintenance and support for projects to ensure smooth performance and address any issues.";
} else if (message.includes("what tools do you use")) {
  response = "I use various tools, including version control systems like GitHub, text editors like VS Code, cloud platforms like AWS, and development frameworks like React.js, among others.";
} 
//Part 3:
else if (message.includes("what industries have you worked with")) {
  response = "I have worked with a range of industries including technology, e-commerce, healthcare, finance, and manufacturing, providing tailored solutions.";
} else if (message.includes("can you share your portfolio")) {
  response = "Certainly! You can check out my portfolio at <https://farajdev.github.io>. It showcases my projects in web development, electronics, and more.";
} else if (message.includes("do you work alone or with a team")) {
  response = "I typically work as an independent freelancer, but I can collaborate with teams if a project requires it.";
} else if (message.includes("do you sign non-disclosure agreements (nda)")) {
  response = "Yes, I am comfortable signing NDAs to ensure confidentiality and protect your intellectual property.";
} else if (message.includes("what makes you different from other freelancers")) {
  response = "I bring a blend of technical expertise, creativity, and adaptability. I’m dedicated to providing personalized solutions, clear communication, and high-quality work.";
} else if (message.includes("do you offer fixed-price or hourly contracts")) {
  response = "I offer both fixed-price and hourly contracts, depending on the project’s scope, duration, and client preference.";
} else if (message.includes("can you work in different time zones")) {
  response = "Yes, I am flexible with working hours and can adjust to different time zones to accommodate international clients.";
} else if (message.includes("how do you handle communication with clients")) {
  response = "I prioritize clear communication through regular updates, meetings, and feedback sessions, using tools like email, chat, or video calls.";
} else if (message.includes("what if a project takes longer than expected")) {
  response = "If a project takes longer due to unforeseen issues, I communicate with the client immediately to adjust the timeline and find a solution together.";
} else if (message.includes("what do you need from me to start a project")) {
  response = "To start a project, I typically need a clear brief, goals, timeline, budget, and any relevant assets or access to tools/platforms.";
}
//Part 4:
 // Part 4: Additional Questions Frequently Asked to Freelancers
else if (message.includes("how do you handle project milestones")) {
response = "I work with clients to define clear project milestones, breaking down tasks into manageable phases, with deliverables and check-ins at each stage.";
} else if (message.includes("can you work with existing codebases")) {
response = "Yes, I am experienced in working with existing codebases. I can review, modify, and enhance code while adhering to the established structure and standards.";
} else if (message.includes("what is your process for bug fixing")) {
response = "My bug-fixing process involves identifying the root cause, debugging efficiently, testing thoroughly, and communicating any changes made to the client.";
} else if (message.includes("do you provide project documentation")) {
response = "Yes, I provide detailed documentation, including project specifications, code explanations, and user guides, as per the client's needs.";
} else if (message.includes("can you integrate third-party apis")) {
response = "Yes, I have extensive experience integrating various third-party APIs into applications for enhanced functionality and services.";
} else if (message.includes("what security measures do you implement")) {
response = "I prioritize security by following best practices like input validation, encryption, secure authentication, and adherence to OWASP guidelines.";
} else if (message.includes("how do you ensure quality assurance")) {
response = "I conduct thorough testing, including unit tests, integration tests, and user acceptance tests, to ensure a high-quality product.";
} else if (message.includes("do you offer training for delivered solutions")) {
response = "Yes, I can provide training sessions and user guides to ensure that clients and their teams can effectively use the delivered solution.";
} else if (message.includes("what platforms are you comfortable developing on")) {
response = "I am comfortable developing for web, mobile (Android and iOS), IoT devices, and embedded systems platforms.";
} else if (message.includes("how do you handle project feedback")) {
response = "I encourage open feedback throughout the project and use it constructively to refine and enhance the deliverables.";
}
//Part 5:
else if (message.includes("what is your name")) {
  response = "My name is Faraj.";
  }
else if (message.includes("can you customize existing solutions")) {
response = "Yes, I specialize in customizing existing solutions to meet specific client needs, optimizing features, and enhancing performance.";
} else if (message.includes("what is your preferred communication tool")) {
response = "I am flexible and can use various communication tools, including email, Slack, Zoom, Microsoft Teams, and others based on client preferences.";
} else if (message.includes("how do you manage multiple projects")) {
response = "I prioritize tasks, set clear deadlines, and use project management tools like Trello or Asana to ensure all projects progress smoothly.";
} else if (message.includes("do you offer design services")) {
response = "While my primary focus is on development, I can offer basic design services and collaborate with designers for more advanced needs.";
} else if (message.includes("can you help with project planning")) {
response = "Yes, I can assist with project planning, including requirement gathering, timeline estimation, and identifying key milestones.";
} else if (message.includes("how do you keep up with industry trends")) {
response = "I stay current by attending workshops, following tech blogs, participating in online courses, and engaging with the developer community.";
} else if (message.includes("do you provide estimates before starting a project")) {
response = "Yes, I provide detailed estimates after understanding the project requirements, scope, and expected outcomes.";
} else if (message.includes("what is your approach to code quality")) {
response = "I adhere to best coding practices, write clean and maintainable code, and conduct regular code reviews and testing.";
} else if (message.includes("how do you handle conflicts with clients")) {
response = "I believe in clear and open communication to resolve conflicts and find solutions that work for both parties in a professional manner.";
} else if (message.includes("can you work with agile methodologies")) {
  response = "Yes, i can.";
}
   
  else {
    let response2;
    response2 = await(askQuestion(userMessage));
    if (response2 === undefined) {
     response= "I couldn't understand that. Could you please rephrase your question or provide more details?";
  } else {
      response = await askQuestion(userMessage);
  }
  }

  // Remove the loading dots and display the response
  removeLoadingDots();

  // Add a professional closing message after the response
  response += "<br> I hope I was able to help. Feel free to ask again if you need further assistance.";
  
  addMessageToChat('Chatbot', response);
}




// Initial greeting when chatbot is opened
function toggleChatbot() {
  const chatbotWindow = document.getElementById('chatbot-window');
  chatbotWindow.classList.toggle('open');
  if (chatbotWindow.classList.contains('open')) {
    displayGreeting();
  }
}


async function askQuestion(question) {
  const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: question }),
  });

  if (!response.ok) {
      const errorDetails = await response.text();
      console.error('Error:', response.status, response.statusText, errorDetails);
      return;
  }

  const data = await response.json();
  const chatbotResponse = data[0]?.generated_text;
  console.log('Chatbot response:', chatbotResponse || 'No response found.');
  return chatbotResponse;
}




















emailjs.init("kULK13J3740WVr-ff"); 

// Show and hide modal
const appointmentButton = document.getElementById("appointmentButton");
const modal = document.getElementById("calendarModal");
const closeBtn2 = document.getElementsByClassName("close")[0];

appointmentButton.onclick = function() {
    modal.style.display = "block";
}

closeBtn2.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle payment amount selection
const paymentAmountRange = document.getElementById("paymentAmountRange");
const paymentAmount = document.getElementById("paymentAmount");

paymentAmountRange.addEventListener('change', function() {
    if (paymentAmountRange.value === 'over10000') {
        paymentAmount.style.display = 'block';
    } else {
        paymentAmount.style.display = 'none';
    }
});

// Handle date selection and time slots
const appointmentDate = document.getElementById("appointmentDate");
const appointmentTime = document.getElementById("appointmentTime");

// Set the minimum date to today (no past dates allowed)
const currentDate = new Date();
let dateString = currentDate.toISOString().split('T')[0];
appointmentDate.setAttribute("min", dateString);

// Populate time slots based on selected date
appointmentDate.addEventListener('change', function() {
    const selectedDate = new Date(appointmentDate.value);
    const times = [];

    // Check for weekends (Saturday & Sunday)
    if (selectedDate.getDay() === 0 || selectedDate.getDay() === 6) {
        // For weekends, show full day from 9 AM to 9 PM
        for (let i = 9; i <= 21; i++) {
            times.push(`${i}:00`);
        }
    } else {
        // For weekdays, show from 6 PM to 10 PM
        for (let i = 18; i <= 22; i++) {
            times.push(`${i}:00`);
        }
    }

    appointmentTime.innerHTML = "";
    times.forEach(time => {
        let option = document.createElement("option");
        option.value = time;
        option.textContent = time;
        appointmentTime.appendChild(option);
    });
});

// Ensure that the time is not earlier than the current time (restrict past times)
appointmentTime.setAttribute("min", currentDate.toTimeString().split(' ')[0].substring(0, 5));

// Handle appointment confirmation
const confirmButton = document.getElementById("confirmAppointment");

confirmButton.addEventListener('click', function() {
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const missionSubject = document.getElementById("missionSubject").value;
    const missionDescription = document.getElementById("missionDescription").value;
    const payment = paymentAmountRange.value === "over10000" ? paymentAmount.value : paymentAmountRange.value;
    const date = appointmentDate.value;
    const time = appointmentTime.value;

    // Validate form
    if (!name || !email || !missionSubject || !missionDescription || !payment || !date || !time) {
        alert("Please fill in all fields.");
        return;
    }

    // Prepare the email template
    const templateParams = {
        userName: name,
        userEmail: email,
        missionSubject: missionSubject,
        missionDescription: missionDescription,
        paymentAmount: payment,
        appointmentDate: date,
        appointmentTime: time
    };

    // Log the parameters to check them
    console.log("Template Params:", templateParams);

    // Send the email using EmailJS
    emailjs.send("service_2kt3cqa", "template_vvfi4lu", templateParams)
        .then(function(response) {
            alert("Appointment booked successfully!");
            modal.style.display = "none";
        }, function(error) {
            alert("Error booking appointment. Please try again.");
            console.error("Error:", error);
        });
});
