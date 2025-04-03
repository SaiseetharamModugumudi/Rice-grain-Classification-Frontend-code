**script.js
function showTab(tabId) {
    // Hide all tab content
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    // Show the selected tab
    document.getElementById(tabId).style.display = 'block';

    // Remove 'active' class from all links
    let navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the clicked link
    document.querySelector(`a[href="#${tabId}"]`).classList.add('active');
}
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    
    // Simulate a delay for file processing (e.g., pretend we're running a model)
    setTimeout(function() {
        // Redirect to the result tab after "processing"
        showTab('result'); // This will show the result tab content
    }, 1000); // Delay for 1 second to simulate processing time
}
function showTab(tabId) {
    // Hide all tab content
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    // Show the selected tab
    document.getElementById(tabId).style.display = 'block';

    // Remove 'active' class from all nav-links
    let navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the clicked tab (i.e., Result tab after submit)
    document.querySelector(`a[href="#${tabId}"]`).classList.add('active');
}
function updateFileName() {
    const fileInput = document.getElementById('fileInput');
    const label = document.querySelector('.custom-file-label');
    
    if (fileInput.files.length > 0) {
        label.textContent = fileInput.files[0].name; // Show the selected file name
    } else {
        label.textContent = 'No file chosen'; // Default text when no file is chosen
    }
}
// Handle the form submission in the Classification tab
document.getElementById('classificationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Simulate file upload and result fetching from backend
    const formData = new FormData();
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) {
        alert("Please choose a file to upload!");
        return;
    }
    
    formData.append('file', fileInput.files[0]);
    
    // Example backend URL (change it to your actual API endpoint)
    const apiUrl = 'http://your-backend-api-url.com/upload'; // Replace with your backend endpoint
    
    // Make a POST request to the backend to classify the file and get the result
    fetch(apiUrl, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Assume the response contains an accuracy value like { accuracy: 92.5 }
        const accuracy = data.accuracy;
        
        // Update the result in the Result tab
        document.getElementById('accuracy-value').textContent = accuracy + '%';
        
        // Automatically switch to the Result tab after submitting
        switchToResultTab();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error occurred while processing the file!');
    });
});

// Function to switch to the Result tab after submitting
function switchToResultTab() {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById('result').style.display = 'block';
}
// Handle the form submission in the Classification tab
document.getElementById('classificationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Simulate file upload and result fetching from backend
    const formData = new FormData();
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) {
        alert("Please choose a file to upload!");
        return;
    }
    
    formData.append('file', fileInput.files[0]);
    
    // Example backend URL (change it to your actual API endpoint)
    const apiUrl = 'http://your-backend-api-url.com/upload'; // Replace with your backend endpoint
    
    // Make a POST request to the backend to classify the file and get the result
    fetch(apiUrl, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Assume the response contains an accuracy value like { accuracy: 92.5 }
        const accuracy = data.accuracy;
        
        // Update the result in the Result tab
        document.getElementById('accuracy-value').textContent = accuracy + '%';
        
        // Automatically switch to the Result tab after submitting
        switchToResultTab();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error occurred while processing the file!');
    });
});

// Function to switch to the Result tab after submitting
function switchToResultTab() {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById('result').style.display = 'block';
}