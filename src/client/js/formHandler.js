function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const resultContainer = document.getElementById('results');

    if (Client.checkUrl(formText)){
        fetch('/dataAnalyze',
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
            resultContainer.className = "result-api";
            const paragraph = document.createElement('pre');
            resultContainer.appendChild(paragraph);
            paragraph.innerHTML = JSON.stringify(response, null, 4);
        })
        .catch(error => console.log(`Error: ${error}`));

    } else {
        alert('Please, include an url in your text');
    }
}

export { handleSubmit }
