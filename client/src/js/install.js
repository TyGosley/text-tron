const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// ✅ Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// ✅ Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    // Show the install prompt
    promptEvent.prompt();
    // Wait for the user to respond to the prompt
    const result = await promptEvent.userChoice;
    // Clear the deferred prompt variable
    window.deferredPrompt = null;
    // Hide the button
    butInstall.classList.toggle('hidden', true);
});

// ✅ Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null;
    // Log the event
    console.log('App installed', event);
});
