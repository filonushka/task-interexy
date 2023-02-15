import { getCharacterById } from "./apiRequests.js";

const charactersList = document.querySelector(".characters");

const data = getCharacterById(2);
console.log(data);

const createCharacterCard = (data) => {
  const { name, image, gender, location, species, status, url } = data;

  article.innerHTML = `
      <img src=${image} alt=${name}">
      <div>
          <h3>${name} Name</h3>
          <p><span>Gender:</span>${gender}</p>
          <p><span>Location:</span>${location.name}</p>
          <p><span>Specie:</span>${species}</p>
          <p><span>Status:</span>${status}</p>
          <p><span>Link:</span><a href=${url}>Click here</a></p>
      </div>
  `;
};

const createCard = () => {
  const article = document.createElement("article");
  article.classList.add("article", "character-info");
  charactersList.appendChild(article);
};
