import React, {Component} from 'react';
import {
  Link,
  Outlet,
} from 'react-router-dom';

class Navi extends Component {
  render() {
    return (
      <>
        <ul className='navi'>
          <li><Link to='/'>緯度経度検索</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        <Outlet />
      </>
    )
  }
}

export default Navi;
