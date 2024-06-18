// Function to remove the overlay if it exists
function removeOverlay() {
  const overlay = document.querySelector('.el-overlay');
  if (overlay) {
    overlay.remove();
    return true;
  }
  return false;
}

// Observe changes in the DOM to detect when the overlay is added
const observer = new MutationObserver((mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      if (removeOverlay()) {
        observer.disconnect(); // Stop observing once the overlay is removed
        break;
      }
    }
  }
});

// Start observing the document body for added nodes
observer.observe(document.body, { childList: true, subtree: true });

// Also try to remove the overlay immediately in case it's already there
removeOverlay();
