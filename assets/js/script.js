// Object mapping button IDs to their theme colors
const themeColors = {
  'btn-1': '#4E00BA',  // Purple
  'btn-2': '#0066BA',  // Blue
  'btn-3': '#BA3500',  // Orange
  'btn-4': '#BA0088',  // Magenta
  'btn-5': '#BA7C00'   // Yellow
};

// Initialize theme picker functionality after the DOM is loaded
function initThemePicker() {
  const heading = document.getElementById('mainHeading');
  const gradient = document.getElementById('bg-gradient');
  const buttons = document.querySelectorAll('.theme-buttons button');

  // Function to apply the given color as heading text and background gradient
  function applyTheme(color) {
    heading.style.color = color;
    gradient.style.backgroundColor = color;
  }

  // Button click handler
  function onButtonClick(event) {
    const btn = event.currentTarget;
    const color = themeColors[btn.id];
    if (color) {
      applyTheme(color);
    }
  }

  // Attach click listeners to all theme buttons
  buttons.forEach(btn => {
    btn.addEventListener('click', onButtonClick);
  });

  // Initialize with first theme's color on load
  const firstColor = themeColors['btn-1'];
  if (firstColor) {
    applyTheme(firstColor);
  }
}

// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', initThemePicker);
