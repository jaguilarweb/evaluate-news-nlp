
function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log("::: Form Submitted ok :::")
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
            resultContainer.className = "result-api";
            const parrafo = document.createElement('pre');
            resultContainer.appendChild(parrafo);
            parrafo.innerHTML = JSON.stringify(response, null, 4);
        })
        .catch(error => console.log(`Error: ${error}`));

    } else {
        alert('Please, include an url in your text');
    }
}


export { handleSubmit }

//`${req.body.BASE_URL}${API_KEY}&lang=${req.body.LANG}&url=${req.body.urlToAnalyzeInput}`
   // https://api.meaningcloud.com/sentiment-2.1?key=APIKEY&txt=MENSAJE&lang=es
