document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Load saved settings
    chrome.storage.sync.get("darkMode", function (data) {
        if (data.darkMode) {
            darkModeToggle.checked = true;
        }
    });

    // Save settings on change
    darkModeToggle.addEventListener("change", function () {
        chrome.storage.sync.set({ "darkMode": darkModeToggle.checked });
    });
});
