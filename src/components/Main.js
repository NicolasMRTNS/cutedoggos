import React from "react";

let dogImg = document.createElement("img");
let viewLink = document.createElement("a");

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch("https://random.dog/woof.json")
      .then((response) => response.json())
      .then((response) => {
        dogImg.src = response.url;
        let regex = /(mp4|webm)/gim;
        if (dogImg.src.match(regex)) {
          this.handleClick();
          console.log("Faux");
        }
        console.log(dogImg.src);
        dogImg.width = "550";
        dogImg.classList.add("align-self-center");
        viewLink.href = dogImg.src;
        viewLink.innerHTML =
          "👨‍✈️Brigade de la mignonerie, vous pouvez garder le silence tout en me laissant admirer cela en plein écran.🤗";
        viewLink.classList.add("align-self-center");
        document.getElementById("showMeTheImage").appendChild(dogImg);
        document.getElementById("showMeTheImage").appendChild(viewLink);
      });
  }
  render() {
    return (
      <div className="container-lg bg-light">
        <p className="pt-5">
          Pour générer une photo ou bien une vidéo trop mimi, il vous suffit de
          cliquer sur le bouton juste ici{" "}
          <span role="img" aria-label="flèche droite">
            ➡️
          </span>
          <button className="btn btn-primary ml-2" onClick={this.handleClick}>
            Générer
          </button>
        </p>
        <article
          id="showMeTheImage"
          className="d-flex flex-row-reverse"
        ></article>
      </div>
    );
  }
}

export default Main;
