function goToAnotherPage() {
    window.location.href = 'Home.html';
}

function changeText(dropdownId) {
    // Get the dropdown button element
    var dropdownButton = document.querySelector('.' + dropdownId + ' .dropbtn');
    // Change the text of the button
    dropdownButton.textContent = "Selected";
}

function changeTextValue(dropdownId, text) {
    // Get the dropdown button element
    var dropdownButton = document.querySelector('.' + dropdownId + ' .dropbtn');
    // Change the text of the button
    dropdownButton.textContent = text;
}
