function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const resultContainer = document.getElementById('results');

    if (Client.checkUrl(formText)){
        fetch('http://localhost:8080/dataAnalyze',
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({formText})
        })
        .then(response => response.json())
        .then(function(response) {
            const card = document.getElementById('card');
            card.innerHTML =    `
                                <p>Score tag:  <span>${response.score_tag}</span></p>
                                <p>Agreement:  <span>${response.agreement}</span></p>
                                <p>Subjectivity:  <span>${response.subjectivity}</span></p>
                                <p>Confidence:  <span>${response.confidence}</span></p>
                                `;
            resultContainer.className = "result-api";
            const paragraph = document.createElement('pre');
            resultContainer.appendChild(paragraph);
            paragraph.innerHTML = JSON.stringify(response, null, 4);
        })
        .catch(error => console.log(`Error: ${error}`));

    } else {
        alert('Please, include a valid url.');
    }
}

export { handleSubmit }
