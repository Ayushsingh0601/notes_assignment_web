document.addEventListener('DOMContentLoaded', function () {
    const noteForm = document.getElementById('noteForm');
    const noteInput = document.getElementById('noteInput');
    const noteList = document.getElementById('noteList');
    const fileUpload = document.getElementById('fileUpload');

    // Function to save a note
    function saveNote() {
        const noteText = noteInput.value.trim();
        if (noteText !== '') {
            const noteItem = document.createElement('div');
            noteItem.classList.add('note');
            noteItem.textContent = noteText;
            noteList.appendChild(noteItem);
            noteInput.value = ''; // Clear the input field after saving
        }
    }

    // Event listener for note submission
    noteForm.addEventListener('submit', function (event) {
        event.preventDefault();
        saveNote();
    });

    // Function to handle file upload
    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const fileName = file.name;
            const fileItem = document.createElement('div');
            fileItem.textContent = `Uploaded File: ${fileName}`;
            document.querySelector('.assignment').appendChild(fileItem);
            fileUpload.value = ''; // Clear the input field after uploading
        }
    }

    // Event listener for file upload
    fileUpload.addEventListener('change', handleFileUpload);
});


// JavaScript for dropdown menu
document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            this.querySelector('.dropdown-content').classList.toggle('show');
        });
    });

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            dropdowns.forEach(function(dropdown) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    }
});
