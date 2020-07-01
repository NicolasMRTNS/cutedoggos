import React from "react";
import doggo_image from "../assets/header.jpg";

function Header() {
  return (
    <div className="container-lg d-flex bg-light px-0">
      <img
        src={doggo_image}
        alt="Cute doggo"
        width="550"
        className="mr-3 align-self-start"
      />
      <section className="align-self-center">
        <h1>Bienvenue sur Cute Doggos !</h1>
        <p>
          Vous êtes sur un site où vous pourrez voir des photos ainsi que des
          vidéos de chiens tout mimi.{" "}
          <span role="img" aria-label="Emoji fête">
            🥳
          </span>
          <span role="img" aria-label="Emoji étoiles dans les yeux">
            🤩
          </span>
          <br />
          Il vous suffit de cliquer sur le bouton en dessous pour générer une
          photo ou une vidéo.{" "}
          <span role="img" aria-label="Emoji chien">
            🐶
          </span>
        </p>
      </section>
    </div>
  );
}

export default Header;
