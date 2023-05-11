
//Generate a random quote from any anime using the public api

document.addEventListener("DOMContentLoaded", () => {

    fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then(data => document.getElementById("randomQuote").value = data.quote + "-" +data.character);
  
})

//Generate a random quote from a particular anime

// 1. Create ul representing names of animes 

const animeQuote= document.querySelector("body > main > div.menu-bar > ul > li.active > div")
fetch('http://localhost:3000/animes')
  .then(response => response.json())
  .then(data =>
   renderAnime(data)
  )
  .catch(error => console.error('Error fetching Anime Data:', error));


  function renderAnime(animes){
    animes.forEach(anime => {
      const ul = document.createElement('ul')
      animeQuote.appendChild(ul)
      const li= document.createElement('li')
      /* li.textContent= anime.anime; */
      ul.appendChild(li)
      const a= document.createElement('a')
      a.href="#"
      a.textContent= anime.anime
      li.appendChild(a)
    });
  }




     


