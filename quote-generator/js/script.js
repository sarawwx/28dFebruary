const api_url =  "https://api.quotable.io"

const quote = document.getElementById("quote");
const author = document.getElementById("author");


async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
};

getQuote(apu_url);