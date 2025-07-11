function showTab(tabId) {
  // Hide all sections
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.style.display = 'none';
  });

  // Show selected section
  document.getElementById(tabId).style.display = 'block';

  // Remove 'active' from all links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Add 'active' class to the current tab
  const activeLink = document.querySelector(`a[href="#${tabId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Show default tab on load
document.addEventListener('DOMContentLoaded', () => {
  showTab('home');
});
