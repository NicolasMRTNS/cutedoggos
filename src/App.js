import React from "react";
import Header from "./components/Header";
import MainPic from "./components/MainPic";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainPic />
        <Footer />
      </div>
    );
  }
}

export default App;
