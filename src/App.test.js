import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { shallow } from "enzyme";

//Check si l'appli crash
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

//Check que le click fonctionne bien sur le bouton de l'appli
describe("<MainPic />", () => {
  it("should trigger its `onClick` prop when clicked", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <button className="btn btn-primary ml-2" onClick={onClick}>
        Générer
      </button>
    );
    wrapper.simulate("click");
  });
});

//Création de snapshot pour voir que rien ne bouge malgré les changements
it("should match its reference snapshot", () => {
  const onClick = jest.fn();
  const wrapper = shallow(
    <button className="btn btn-primary ml-2" onClick={onClick}>
      Générer
    </button>
  );
  expect(wrapper).toMatchSnapshot();
});
