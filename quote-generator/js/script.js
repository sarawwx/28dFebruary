const api_url =  "https://api.quotable.io"

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
};