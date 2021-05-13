
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log(`el formText ${formText}`);
    console.log(Client.checkUrl(formText));

    console.log("::: Form Submitted ok :::")
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

        const resultContainer = document.getElementById('results');
        resultContainer.className = "result-api";
        const parrafo = document.createElement('pre');
        resultContainer.appendChild(parrafo);
        parrafo.innerHTML = JSON.stringify(response, null, 4);
    })

}


export { handleSubmit }

//`${req.body.BASE_URL}${API_KEY}&lang=${req.body.LANG}&url=${req.body.urlToAnalyzeInput}`
   // https://api.meaningcloud.com/sentiment-2.1?key=APIKEY&txt=MENSAJE&lang=es
