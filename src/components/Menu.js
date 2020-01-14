import React from "react";

export default class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <h1 className="menu__heading">Menu</h1>
        <div className="menu__columns">
          <div className="menu__category">
            <h3 className="menu__category--header">Coffee</h3>
            <div className="menu__category--item">
              <h4 className="menu__category--item-heading">Pour Over $2.50</h4>
              <p className="menu__category--item-desc">
                filter filled with our gourmet beans is placed over your mug and
                then hot water is poured over resulting in a classic but more
                refined flavor.
              </p>
            </div>
            <div className="menu__category--item">
              <h4 className="menu__category--item-heading">
                French Press $3.00
              </h4>
              <p className="menu__category--item-desc">
                Coffee grounds are added directly to hot water and then filtered
                out using a press. Results in a much more robust flavor.
              </p>
            </div>
            <div className="menu__category--item">
              <h4 className="menu__category--item-heading">Cold Brew $3.00</h4>
              <p className="menu__category--item-desc">
                Extremely smooth cold coffee infused with nitrogen for a sweet
                smooth flavor.
              </p>
            </div>
            <div className="menu__category--item">
              <div className="menu__category--item-heading">
                <h4>Drip</h4>
                <p>$2.00</p>
              </div>
              <p className="menu__category--item-desc">
                Coffee made the old fashioned way using our gourmet coffee.
                grounds.
              </p>
            </div>
          </div>
          <div className="menu__category">
            <h3 className="menu__category--header">Espresso</h3>
            <div className="menu__category--item">
              <h4 className="menu__category--item-heading">Americano</h4>
              <p className="menu__category--item-desc">
                This is a description detailing the item in which the consumer
                will purchase
              </p>
            </div>
            <div className="menu__category--item">
              <div className="menu__category--item-heading">
                <h4>Latte</h4>
                <p>$2.00</p>
              </div>
              <p className="menu__category--item-desc">
                Coffee made the old fashioned way using our gourmet coffee.
                grounds.
              </p>
            </div>
            <div className="menu__category--item">
              <div className="menu__category--item-heading">
                <h4>Macchiato</h4>
                <p>$2.00</p>
              </div>
              <p className="menu__category--item-desc">
                Coffee made the old fashioned way using our gourmet coffee.
                grounds.
              </p>
            </div>
            <div className="menu__category--item">
              <div className="menu__category--item-heading">
                <h4>Fireside Mocha</h4>
                <p>$2.00</p>
              </div>
              <p className="menu__category--item-desc">
                Coffee made the old fashioned way using our gourmet coffee.
                grounds.
              </p>
            </div>
            <div className="menu__category--item">
              <div className="menu__category--item-heading">
                <h4>White Chocolate Mocha</h4>
                <p>$2.00</p>
              </div>
              <p className="menu__category--item-desc">
                Coffee made the old fashioned way using our gourmet coffee.
                grounds.
              </p>
            </div>
          </div>
          <div className="menu__category">
            <h3 className="menu__category--header">Non-Coffee</h3>
          </div>
        </div>
      </div>
    );
  }
}
