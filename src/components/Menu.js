import React from 'react';

export default class Menu extends React.Component {
  render() {
    return (
      <div className='menu'>
        <h1 className='menu__heading'>Menu</h1>
        <div className='categories'>
          <div className='menu__category'>
            <h3 className='menu__category--header'>Coffee</h3>
            <div className='menu__category--item-container'>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Pour Over</h4>
                  <p>$2.00</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>French Press</h4>
                  <p>$2.50</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Nitro Cold Brew</h4>
                  <p>$3.50</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Cold Drip</h4>
                  <p>$1.50</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Blonde</h4>
                  <p>$1.50</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Columbian</h4>
                  <p>$1.50</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Texas Pecan</h4>
                  <p>$1.50</p>
                </div>
              </div>
            </div>
          </div>
          <div className='menu__category'>
            <h3 className='menu__category--header'>Espresso</h3>
            <div className='menu__category--item-container'>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Americano</h4>
                  <p>$2.75</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Latte</h4>
                  <p>$4.45</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Macchiato</h4>
                  <p>$4.45</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Fireside Mocha</h4>
                  <p>$4.25</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>White Chocolate Mocha</h4>
                  <p>$4.25</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Cappuccino</h4>
                  <p>$3.25</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Red Eye</h4>
                  <p>$2.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className='menu__category'>
            <h3 className='menu__category--header'>Non-Coffee</h3>
            <div className='menu__category--item-container'>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Strawberry Bannana Smoothie</h4>
                  <p>$3.50</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Mixed Berry Smoothie</h4>
                  <p>$3.50</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Loose Leaf Tea</h4>
                  <p>$1.50</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Iced Tea</h4>
                  <p>$1.50</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Chai Tea</h4>
                  <p>$2.00</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Hot Chocolate</h4>
                  <p>$2.50</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Chocolate/Vanilla Milkshake</h4>
                  <p>$3.50</p>
                </div>
              </div>
            </div>
          </div>
          <div className='menu__category'>
            <h3 className='menu__category--header'>Pastries</h3>
            <div className='menu__category--item-container'>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Cheese Danish</h4>
                  <p>$2.75</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Scone</h4>
                  <p>$2.25</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Chocolate Chip Cookie</h4>
                  <p>$1.50</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Oatmeal Cookie</h4>
                  <p>$1.50</p>
                </div>
              </div>
              <div className='menu__category--item'>
                <div className='menu__category--item-heading'>
                  <h4>Blueberry Muffin</h4>
                  <p>$2.25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
