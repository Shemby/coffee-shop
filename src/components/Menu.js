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
              <h4 className="menu__category--item-heading">Item $0.00</h4>
              <p className="menu__category--item-desc">
                This is a description detailing the item in which the consumer
                will purchase
              </p>
            </div>
          </div>
          <div className="menu__category">
            <h3 className="menu__category--header">Coffee</h3>
            <div className="menu__category--item">
              <h4 className="menu__category--item-heading">Item $0.00</h4>
              <p className="menu__category--item-desc">
                This is a description detailing the item in which the consumer
                will purchase
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
