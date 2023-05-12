
//Generate a random quote from any anime using the public api

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then(
      (data) =>
        (document.getElementById("randomQuote").value =
          data.quote + "-" + data.character)
    );
});

//Generate a random quote from a particular anime

// 1. Create ul representing names of animes

const animeQuote = document.querySelector(
  "body > main > div.menu-bar > ul > li.active > div"
);
fetch("http://localhost:3000/animes")
  .then((response) => response.json())
  .then((data) => renderAnime(data))
  .catch((error) => console.error("Error fetching Anime Data:", error));

function renderAnime(animes) {
  const ul = document.createElement("ul");
  ul.className= "anime-navigation"
  animeQuote.appendChild(ul)
  animes.forEach((anime) => {

    const li = document.createElement("li");
    ul.appendChild(li);
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = anime.anime;
    li.appendChild(a);
  });
}

  
  const animeNavigation= document.querySelector(".anime-navigation > li").addEventListener("click", console.log("hello"))

/* function quoteFromAnime(animes){
  fetch("http://localhost:3000/animes").then(response=> response.json()).then(anime=> {
    const animeName = anime;
    const animeObj = animes.find(anime => anime.anime === animeName);
    const charactersArr = animeObj.characters;
    const charactersLength = charactersArr.length;

  })
  

 
  }
 */
  /* const animeQuoteDisplay= document.querySelector(' div.main-div')
  const p= document.createElement('p')

  //get random index value
const animeName = anime;
const animeObj = animes.find(anime => anime.anime === animeName);
const charactersArr = animeObj.characters;
const charactersLength = charactersArr.length;

console.log(charactersLength); // Output: 18
  const randomIndex = Math.floor(Math.random() * animes.charactersLength);
  console.log(randomIndex)

  //p.textContent= anime */