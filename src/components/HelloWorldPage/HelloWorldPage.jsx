import React, { PropTypes, Component } from 'react';
// import { Link } from 'react-router';
import './bootstrap.css';
import './main.css';

const propTypes = {
  initialName: PropTypes.string
};

class HelloWorldPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <header className='col-md-12'>
          <div className='row  '>
            <div className='col-md-3 col-xs-12   '>
              <nav className='navbar row'>
                <div className=' col-xs-2 '>
                  <img className='profile-image man-online'
                    src='https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url=https://habrastorage.org/webt/5a/ea/b9/5aeab9c0723ae127400850.jpeg&container=focus&refresh=2592000&resize_w=60'
                    alt=''
                  />
                </div>
                <div className=' col-xs-3 pr-0'>
                  <label>
                    <input className='radio' type='radio' name='radio-test' />
                    <span className='radio-custom' />
                    <span className='label'>Все(56)</span>
                  </label>
                </div>
                <div className=' col-xs-3 p-0'>
                  <label>
                    <input className='radio' type='radio' name='radio-test' />
                    <span className='radio-custom' />
                    <span className='label'>Мои(26)</span>
                  </label>
                </div>
                <div className=' col-xs-3 p-0'>
                  <label>
                    <input className='radio' type='radio' name='radio-test' />
                    <span className='radio-custom' />
                    <span className='label'>Доступные</span>
                  </label>
                </div>


              </nav>
            </div>
            <div className='col-md-6 p-0 text-center  '>
              <span className='back' />
              <div className='block-center'>
                <h1>Валерий, Хабаровск </h1>
                <h2>+791406654984</h2>
              </div>
            </div>
            <div className='col-md-3 p-0  '>

              <ul className='nav nav-tabs col-md-12 p-0' id='myTab' role='tablist'>
                <li className='nav-item col-md-4 p-0'>

                  <a className='nav-link active' id='home-tab' data-toggle='tab'
                    href='#home'
                    role='tab'
                    aria-controls='home' aria-selected='true'
                  >
                    <img src='http://localhost:8050/public/assets/icon/order.png' className='icon-na' alt='' />
                    <img src='http://localhost:8050/public/assets/icon/order_active.png' className='icon-a' alt='' />
                    Заказы
                    </a>
                </li>
                <li className='nav-item col-md-4 p-0'>
                  <a className='nav-link' id='profile-tab' data-toggle='tab'
                    href='#profile'
                    role='tab'
                    aria-controls='profile' aria-selected='false'
                  >
                    <img src='http://localhost:8050/public/assets/icon/orders.png' className='icon-na' alt='' />
                    <img src='http://localhost:8050/public/assets/icon/orders_active.png' className='icon-a' alt='' />
                      Все заказы
                  </a>
                </li>
                <li className='nav-item col-md-4 p-0'>
                  <a className='nav-link' id='contact-tab' data-toggle='tab'
                    href='#contact'
                    role='tab'
                    aria-controls='contact' aria-selected='false'
                  >
                    <img src='http://localhost:8050/public/assets/icon/manag.png' className='icon-na' alt='' />
                    <img src='http://localhost:8050/public/assets/icon/manag_active.png' className='icon-a' alt='' />
                          Управление
                      </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

HelloWorldPage.propTypes = propTypes;

export default HelloWorldPage;
