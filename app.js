document.addEventListener('DOMContentLoaded', () => {

    // Sample data for persons
    const persons = [
        { number: 1, firstName: 'Jan', lastName: 'Jansen' },
        { number: 2, firstName: 'Piet', lastName: 'Pietersen' },
        { number: 3, firstName: 'Klaas', lastName: 'Klaassen' }
    ];

    // Function to populate the person table
    function populatePersonTable(data) {
        const tableBody = document.querySelector('#personTable tbody');
        data.forEach(person => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${person.number}</td>
                <td>${person.firstName}</td>
                <td>${person.lastName}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Populate tables on page load
    populatePersonTable(persons);
});
