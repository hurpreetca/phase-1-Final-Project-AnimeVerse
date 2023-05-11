
//Generate a random quote from any anime using the public api

document.addEventListener("DOMContentLoaded", () => {

    fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then(data => document.getElementById("randomQuote").value = data.quote + "-" +data.character);
  
})

//Generate a random quote from a particular anime

// 1. Create ul representing names of animes 

const quotesFromAnime= document.querySelectorAll(".quotes-from-anime")

fetch('http://localhost:3000/ramens')
  .then(response => response.json())
  .then(data =>
   renderRamens(data)
  )
  .catch(error => console.error('Error fetching ramen data:', error));








     


