import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
} from 'react-router-dom';
import Navi from './Navi';
import SearchPage from './SearchPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

/**
 * class App component
 */
class App extends Component {
  /**
   * render components
   * @return {Component}
   */
  render() {
    return (<BrowserRouter>
      <div className='app'>
        <ul className='navi'>
          <li><Link to='/'>緯度経度検索</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        <Routes path='/' element={<Navi />}>
          <Route index element={<SearchPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>);
  }
}

export default App;
