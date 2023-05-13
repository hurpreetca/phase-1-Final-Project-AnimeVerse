
//Generate a random quote from a Given list of animes

// 1. Create ul representing names of animes

const animeQuote = document.querySelector(".quotes-from-anime");
fetch("http://localhost:3000/animes")
  .then((response) => response.json())
  .then((data) => renderAnime(data))
  .catch((error) => console.error("Error fetching Anime Data:", error));

function renderAnime(animes) {
  const ul = document.createElement("ul");
  ul.className = "anime-navigation";
  animeQuote.appendChild(ul);
  animes.forEach((anime) => {
    const li = document.createElement("li");
    li.addEventListener("click", (e) => {
      fetch("http://localhost:3000/animes")
        .then((response) => response.json())
        .then((animes) => {
          const animeData = animes.find((anime) => {
            if (anime.anime === e.target.textContent) {
              //Generate a Random Number
              const animeName = anime.anime;
              //console.log(animeName)
              const animeObj = animes.find(
                (anime) => anime.anime === animeName
              );
              const charactersArr = animeObj.characters;
              const charactersLength = charactersArr.length;

              //console.log(charactersLength);
              const randomIndex = Math.floor(Math.random() * charactersLength);
              //console.log(randomIndex)

              //Select display-div using Navigation Bar "Anime"
              const displayDiv = document.querySelector(".display-div");
              displayDiv.replaceChildren();
              const p = document.createElement("p");
              p.textContent = anime.quotes[randomIndex]+ "  -  "+anime.characters[randomIndex];
              p.id = "display-quote";
              p.class = "display-p";
              displayDiv.appendChild(p);
             
              const img = document.createElement("img");
              img.src = anime.images[randomIndex];
              img.id = "display-image";
              img.class = "display-img";
              img.addEventListener("mouseenter", (e) => {
                console.log(e);
              });
              img.addEventListener("mouseleave", (e) => {
                console.log(e);
              });
              displayDiv.appendChild(img);
            }
          });
        });
    });
    li.className = anime.anime;
    ul.appendChild(li);
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = anime.anime;
    li.appendChild(a);
  });
}
// ==================================================================================================

//Generate a random quote from a particular character
//Create ul representing names of characters

const characterQuote = document.querySelector(".quotes-from-character");
fetch("http://localhost:3000/characters")
  .then((response) => response.json())
  .then((data) => renderCharacter(data))
  .catch((error) => console.error("Error fetching Character Data:", error));

function renderCharacter(characters) {
  const ul = document.createElement("ul");
  ul.className = "character-navigation";
  characterQuote.appendChild(ul);
  characters.forEach((character) => {
    const li = document.createElement("li");
    li.addEventListener("click", (e) => {
      fetch("http://localhost:3000/characters")
        .then((response) => response.json())
        .then((characters) => {
          const characterData = characters.find((character) => {
            if (character.character === e.target.textContent) {
              //Generate a Random Number
              const characterName = character.character;
              const characterObj = characters.find(
                (character) => character.character === characterName
              );
              const charactersArr = characterObj.quotes;
              const charactersLength = charactersArr.length;
              const randomIndex = Math.floor(Math.random() * charactersLength);

              //Select display-div using Navigation Bar "Anime"
              const displayDiv = document.querySelector(".display-div");
              displayDiv.replaceChildren();
              const p = document.createElement("p");
              p.textContent = character.quotes[randomIndex]+"  -  "+character.character;
              p.id = "display-quote";
              p.class = "display-p";
              displayDiv.appendChild(p);
              const img = document.createElement("img");
              img.src = character.image;
              img.id = "display-image";
              img.class = "display-img";
              img.addEventListener("mouseenter", (e) => {
                console.log(e);
              });
              img.addEventListener("mouseleave", (e) => {
                console.log(e);
              });
              displayDiv.appendChild(img);
            }
          });
        });
    });
    li.className = character.character;
    ul.appendChild(li);
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = character.character;
    li.appendChild(a);
  });
}
