document.getElementById("snoop_on").addEventListener("click", function() {
    chrome.storage.sync.set({"snoop": 1});
    console.log(1);
});
document.getElementById("snoop_off").addEventListener("click", function () {
    chrome.storage.sync.set({"snoop": 0});
    console.log(0);
});