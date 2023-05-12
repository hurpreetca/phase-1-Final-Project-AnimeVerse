
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
    li.addEventListener("click", (e)=>{
     fetch("http://localhost:3000/animes").then((response)=> response.json()).then((animes)=> {
      const animeData= animes.find((anime)=>{
         if(anime.anime=== e.target.textContent)
         {
          //Generate a Random Number
          const animeName = anime.anime;
          //console.log(animeName)
          const animeObj = animes.find(anime => anime.anime === animeName);
          const charactersArr = animeObj.characters;
          const charactersLength = charactersArr.length;

          //console.log(charactersLength); 
          const randomIndex = Math.floor(Math.random() * charactersLength);
          //console.log(randomIndex)

          //Select display-div using Navigation Bar "Anime"
          const displayDiv= document.querySelector(".display-div")
          
          const p= document.createElement('p')
          p.textContent = anime.quotes[randomIndex]
          p.id= "display-quote"
          p.class= "display-p"
          displayDiv.appendChild(p)
          const img= document.createElement('img')
          img.src= anime.images[randomIndex]
          img.id="display-image"
          img.class="display-img"
          img.addEventListener("mouseenter", (e)=>{
            console.log(e)
         })
         img.addEventListener("mouseleave", (e)=>{
          console.log(e)
         })
          displayDiv.appendChild(img)
          

         }
      })
     } ) 
    })
    li.className= anime.anime
    ul.appendChild(li);
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = anime.anime;
    li.appendChild(a);

  });
}


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
  const p= document.createElement('p')*/