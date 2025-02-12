document.addEventListener("DOMContentLoaded", function () {
    const noteArea = document.getElementById("noteArea");
    const saveButton = document.getElementById("saveButton");

    // Load saved note
    chrome.storage.sync.get("note", function (data) {
        if (data.note) {
            noteArea.value = data.note;
        }
    });

    // Save note on change
    noteArea.addEventListener("input", function () {
        chrome.storage.sync.set({ "note": noteArea.value });
    });

    // Save note to file
    saveButton.addEventListener("click", function () {
        const blob = new Blob([noteArea.value], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "note.txt";
        a.click();
        URL.revokeObjectURL(url);
    });
});
