document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav a');
  
    function loadPage(url) {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          contentDiv.innerHTML = xhr.responseText;
        }
      };
      xhr.open('GET', url, true);
      xhr.send();
    }
  
    function handleNavLinkClick(event) {
      event.preventDefault();
      const url = event.target.getAttribute('href');
      loadPage(url);
    }
  
    // Attach click event listeners to navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
    });
  
    // Load the default content (home page) on page load
    loadPage('index.html');
  });
  