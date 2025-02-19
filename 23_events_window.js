// Get the event log element
const eventLog = document.getElementById('eventLog');

// Function to log events
function logEvent(eventName) {
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = `${timestamp} - ${eventName}`;
    const logItem = document.createElement('p');
    logItem.textContent = logMessage;
    eventLog.appendChild(logItem);
}

// Window load event
window.addEventListener('load', function () {
    logEvent('Window loaded');
});

// Window resize event
window.addEventListener('resize', function () {
    logEvent('Window resized');
});

// Window scroll event
window.addEventListener('scroll', function () {
    logEvent('Window scrolled');
});

// Window unload event
window.addEventListener('unload', function () {
    logEvent('Window unloaded');
});

// Before unload event (can be used to prompt user)
window.addEventListener('beforeunload', function (event) {
    logEvent('Before unload');
    // Custom message shown in some browsers
    event.returnValue = 'Are you sure you want to leave?';
});

// Window focus event
window.addEventListener('focus', function () {
    logEvent('Window focused');
});

// Window blur event
window.addEventListener('blur', function () {
    logEvent('Window blurred');
});
