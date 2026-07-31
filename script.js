// Theme toggle
const toggle = document.querySelector('.theme-toggle');

// Dark mode is default
document.body.classList.remove('light-mode');

// Show sun because clicking it will enable light mode
toggle.innerHTML = '☀️';

toggle.addEventListener('click', () => {

  document.body.classList.toggle('light-mode');

  // Update icon
  if (document.body.classList.contains('light-mode')) {

    // Light mode is active, show moon to go back dark
    toggle.innerHTML = '🌙';

  } else {

    // Dark mode is active, show sun to go light
    toggle.innerHTML = '☀️';

  }

});