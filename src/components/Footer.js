import React from "react";

function Footer() {
  return (
    <div className="container-lg bg-light">
      <p className="mb-0 text-center text-dark">
        Fait avec{" "}
        <span role="img" aria-label="Emoji coeur">
          ❤️
        </span>{" "}
        par{" "}
        <a
          href="https://github.com/NicolasMRTNS"
          className="text-reset"
          target="_blank noopener noreferrer"
        >
          <u>Nicolas Martins</u>
        </a>
      </p>
    </div>
  );
}

export default Footer;
