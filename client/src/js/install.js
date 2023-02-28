const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Handler for `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Store triggered events
  window.deferredPrompt = event;
  // Remove hidden class from the button
  butInstall.classList.toggle('hidden', false);
});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      return;
    }
    // Show prompt
    promptEvent.prompt();
     // Reset deferred prompt variable - it can only be used once
    window.deferredPrompt = null;
  
    butInstall.classList.toggle('hidden', true);
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  window.deferredPrompt = null;
});
