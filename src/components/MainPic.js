import React from "react";
//Import CSS
import "./styles.css";

//Variable pour les éléments HTML créé en voulant générer une photo
let dogImg = document.createElement("img");
let viewLink = document.createElement("a");
//Class pour le lien
const LINK_CLASS = ["align-self-center", "text-danger"];

class MainPic extends React.Component {
  constructor() {
    super();
    //Binding de this sur la méthode handleClick
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //Fetch à l'API
    fetch("https://random.dog/woof.json")
      .then((response) => response.json())
      .then((response) => {
        //Création du src de la balise image en fonction du fichier de l'API
        dogImg.src = response.url;
        //Exclusion des fichiers mp4 et webm car ce sont des vidéos et ils ne sont pas supportés par la balise img et plus longs à charger
        let regex = /(mp4|webm)/gim;
        if (dogImg.src.match(regex)) {
          //Si jamais le fichier est un mp4 ou webm, on relance la méthode
          this.handleClick();
        }
        //Quelques attributs et classes pour les éléments HTML
        dogImg.width = "550";
        dogImg.classList.add("align-self-center");
        viewLink.href = dogImg.src;
        viewLink.innerHTML =
          "👨‍✈️Brigade de la mignonerie, vous pouvez garder le silence tout en me laissant admirer cela en plein écran.🤗";
        viewLink.setAttribute("target", "_blank noopener noreferrer");
        viewLink.classList.add(...LINK_CLASS);
        //On ajoute tout cela au render avec un appendChild
        document.getElementById("showMeTheImage").appendChild(dogImg);
        document.getElementById("showMeTheImage").appendChild(viewLink);
      });
  }
  render() {
    return (
      <div className="container-lg bg-light">
        <p className="pt-5 text-dark">
          Pour générer une photo ou bien un gif trop mimi, il vous suffit de
          cliquer sur le bouton juste ici :{" "}
          <button className="btn btn-primary ml-2" onClick={this.handleClick}>
            Générer
          </button>
        </p>
        {/* Partie où l'on appelle l'API et on affiche l'image */}
        <article
          id="showMeTheImage"
          className="d-flex flex-row-reverse direction-responsive"
        ></article>
      </div>
    );
  }
}

export default MainPic;
