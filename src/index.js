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
              const animeObj = animes.find(
                (anime) => anime.anime === animeName
              );
              const charactersArr = animeObj.characters;
              const charactersLength = charactersArr.length;
              const randomIndex = Math.floor(Math.random() * charactersLength);

              //Select display-div using Navigation Bar "Anime"
              const displayDiv = document.querySelector(".display-div");
              displayDiv.replaceChildren();
              const p = document.createElement("p");
              p.textContent =
                anime.quotes[randomIndex] +
                "  -  " +
                anime.characters[randomIndex];
              p.id = "display-quote";
              p.class = "display-p";
              displayDiv.appendChild(p);

              const img = document.createElement("img");
              img.src = anime.images[randomIndex];
              img.id = "display-image";
              img.class = "display-img";
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
          characters.find((character) => {
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
              p.textContent =
                character.quotes[randomIndex] + "  -  " + character.character;
              p.id = "display-quote";
              p.class = "display-p";
              displayDiv.appendChild(p);
              const img = document.createElement("img");
              img.src = character.image;
              img.id = "display-image";
              img.class = "display-img";

              // MOUSEENTER event listener is added to the image in display-div which will change the image to a new one

              img.addEventListener("mouseenter", (e) => {
                fetch("http://localhost:3000/characters")
                  .then((response) => response.json())
                  .then((characters) => {
                    characters.find((character) => {
                      if (
                        "http://127.0.0.1:5501/" + character.image ===
                        img.src
                      ) {
                        document.getElementById("display-image").src =
                          character.titleimage;
                      }
                    });
                  });
              });
              // MOUSELEAVE event listener is added to the img which will switch back the image to original as before
              img.addEventListener("mouseleave", (e) => {
                fetch("http://localhost:3000/characters")
                  .then((response) => response.json())
                  .then((characters) => {
                    characters.find((character) => {
                      if (
                        "http://127.0.0.1:5501/" + character.titleimage ===
                        img.src
                      ) {
                        document.getElementById("display-image").src =
                          character.image;
                      }
                    });
                  });
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
