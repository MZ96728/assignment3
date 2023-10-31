document.addEventListener("DOMContentLoaded", function () {


    const searchInput = document.getElementById("search-name");
    const studentsTable = document.getElementById("students-table").getElementsByTagName('tbody')[0];
    const searchButton = document.getElementById("search-btn");

    // Function to update the table with search results
    function updateTable(searchText) {
        searchText = searchText.trim().toLowerCase();

        // Filter students based on the search text
        const filteredStudents = students.filter(student => student.name.includes(searchText));

        // Sort filtered students by section in ascending order
        filteredStudents.sort((a, b) => a.section - b.section);

        // Clear the table
        studentsTable.innerHTML = '';

        if (filteredStudents.length > 0) {
            // Populate the table with matching students
            filteredStudents.forEach(student => {
                const row = studentsTable.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                cell1.textContent = student.section;
                cell2.textContent = student.name;
            });
        } else {
            // Display the "No students were found" message
            const noResultsRow = studentsTable.insertRow();
            const noResultsCell = noResultsRow.insertCell(0);
            noResultsCell.colSpan = 2;
            noResultsCell.textContent = "No students were found";
        }
    }

    // Add an event listener to the search button to update the table on click
    searchButton.addEventListener("click", function () {
        updateTable(searchInput.value);
    });


});