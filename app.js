document.addEventListener('DOMContentLoaded', () => {
    let personList = [
        {
            "voornaam": "Maarten",
            "familienaam": "Narain"
        },
        {
            "voornaam": "Roger",
            "familienaam": "Pique"
        },
        {
            "voornaam": "Emily",
            "familienaam": "Johnson"
        },
        {
            "voornaam": "Kendrick",
            "familienaam": "Lamar"
        }
    ];

    let table = document.getElementById('personTable');
    let volgnummer = 1;

    personList.forEach(person => {
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.textContent = volgnummer++;
        cell2.textContent = person.voornaam;
        cell3.textContent = person.familienaam;
    });
});